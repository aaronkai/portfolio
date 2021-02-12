import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Footer from './Footer';

import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Header from './Header';

export default function Layout({ children }) {
  const MainGridStyles = styled.div`
    display: grid;
    grid-template-rows: 7% 80% 10%;
    grid-template-areas:
      'header'
      'body'
      'footer';
    grid-gap: 10px;
    /* @media (max-width: 630px) {
      grid-template-columns: 100vw;
      grid-template-rows: auto auto;
    } */
  `;

  return (
    <>
      <GlobalStyles />
      <Typography />
      <MainGridStyles>
        <Header />
        {children}
      </MainGridStyles>
      <Footer />
    </>
  );
}
