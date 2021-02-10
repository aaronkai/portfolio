import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.div`
  margin-top: -30px;
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
  }
  a[aria-current] {
    text-decoration: underline;
    text-decoration-color: var(--aqua);
  }
  a:hover {
    color: var(--melon);
  }
  z-index: 1;
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
