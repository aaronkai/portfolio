import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Nav from './Nav';
import Socials from './Socials';

export default function Header() {
  const HeaderStyles = styled.header`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    /* grid-gap: 1rem;
    grid-template-rows: repeat(5, auto); */
    /* align-items: start;
    justify-content: start; */
    background-color: rgb(0, 0, 0, 0.3);
    ul {
      margin: 0;
      padding: 0;
    }
    @media (max-width: 630px) {
      grid-template-columns: 25% 1fr auto;
      align-items: center;
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
