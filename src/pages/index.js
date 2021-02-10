import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Banner from '../components/Banner';
import Bio from '../components/Bio';
import SEO from '../components/SEO';

const PageStyles = styled.div`
  display: grid;
  max-width: 300px;
  grid-gap: 2rem;
  padding: 2rem;
  justify-items: center;
`;

export const query = graphql`
  query SelfieQuery {
    selfie: file(relativePath: { eq: "selfie.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

// TO DO
// 3. call to action like "request a quote"
// 4. Testimonials
// 7. Find a way to put it on github

export default function IndexPage({ data: { selfie } }) {
  return (
    <>
      <SEO title="Home" image={selfie} />
      <PageStyles>
        <Banner />
        <Bio selfie={selfie} />
      </PageStyles>
    </>
  );
}
