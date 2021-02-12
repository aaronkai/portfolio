import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Nav from './Nav';
import Socials from './Socials';

export default function Header() {
  const HeaderStyles = styled.header`
    padding: 1rem;
    display: grid;
    grid-template-rows: 100%;
    align-items: center;
    flex-direction: column;
    background-color: rgb(0, 0, 0, 0.3);
    background-image: url(../assets/opossum.svg);
    ul {
      margin: 0;
      padding: 0;
    }
    /* @media (max-width: 630px) {
      grid-template-columns: 25% 1fr auto;
      align-items: center;
    } */
  `;

  return (
    <HeaderStyles>
      {/* <Logo className="logo" /> */}
      <Nav className="nav" />
    </HeaderStyles>
  );
}
