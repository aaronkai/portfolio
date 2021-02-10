import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Nav from './Nav';
import Socials from './Socials';

export default function Header() {
  const HeaderStyles = styled.header`
    padding: 1rem;
    display: grid;
    grid-gap: 5px;
    grid-template-rows: auto auto 1fr;
    align-items: start;
    background-color: rgb(0, 0, 0, 0.3);
    ul {
      margin: 0;
      padding: 0;
    }
  `;

  return (
    <HeaderStyles>
      <Logo className="logo" />
      <Nav className="nav" />
      <Socials className="socials" />
    </HeaderStyles>
  );
}
