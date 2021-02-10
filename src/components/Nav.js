import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.div`
  padding-bottom: 8px;
  ul {
    display: grid;
    justify-items: end;
    justify-content: end;
  }
  li {
    padding-top: 3px;
  }
  a {
    text-decoration: none;
    font-size: 3rem;
  }
  a[aria-current] {
    text-decoration: underline;
    text-decoration-color: var(--aqua);
  }
  a:hover {
    color: var(--melon);
  }
  z-index: 1;
  @media (max-width: 630px) {
    ul {
      grid-template-columns: repeat(auto-fit, minmax(75px, auto));
      grid-gap: 1rem;
    }
  }
`;

export default function Logo() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        {/* <li>
          <Link to="/about">About</Link>
        </li> */}
        <li>
          <a href="mailto:hotel.kilo.alpha@gmail.com">Contact</a>
        </li>
      </ul>
    </NavStyles>
  );
}
