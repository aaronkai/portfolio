import React from 'react';
import styled from 'styled-components';
import 'normalize.css';

import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Spacing from '../styles/Spacing';
import Colors from '../styles/Colors';

import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "flower_illustration.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const LayoutGridStyles = styled.div`
    display: grid;
    max-width: var(--maxWidth);
    margin: 0 auto;
    background-color: var(--gray);
    border-left: 3px solid black;
    border-right: 3px solid black;
  `;

  const MainStyles = styled.main`
    padding: var(--space-md);
  `;

  const imageData = data.desktop.childImageSharp.fluid;

  return (
    <>
      <GlobalStyles />
      <Typography />
      <Spacing />
      <Colors />
      <BackgroundImage fluid={imageData} backgroundColor="var(--funerealaqua)">
        <LayoutGridStyles>
          <Header />
          <MainStyles>{children}</MainStyles>
          <Footer />
        </LayoutGridStyles>
      </BackgroundImage>
    </>
  );
}
