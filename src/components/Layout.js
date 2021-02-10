import React from 'react';
import styled from 'styled-components';
import 'normalize.css';

import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Header from './Header';

export default function Layout({ children }) {
  const MainGridStyles = styled.div`
    display: grid;
    grid-template-columns: 120px 1fr;
    grid-template-rows: 100%;
    grid-gap: 10px;
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
