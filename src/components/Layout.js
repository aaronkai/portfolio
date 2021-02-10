import React from 'react';
import styled from 'styled-components';
import 'normalize.css';

import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Header from './Header';

export default function Layout({ children }) {
  const MainGridStyles = styled.div`
    display: grid;
    grid-template-columns: minmax(150px, 10%) 1fr;
    grid-template-rows: 100vh;
    grid-gap: 10px;

    @media (max-width: 630px) {
      grid-template-columns: 100vw;
      grid-template-rows: auto auto;
    }
  `;

  return (
    <>
      <GlobalStyles />
      <Typography />
      <MainGridStyles>
        <Header />
        <main>{children}</main>
      </MainGridStyles>
    </>
  );
}
