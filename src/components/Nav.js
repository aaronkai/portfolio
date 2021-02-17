import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const NavStyles = styled.div`
  padding-bottom: 8px;
  ul {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-gap: 2rem;
    justify-items: end;
    justify-content: end;
    align-items: center;
  }
  li {
    display: grid;
    justify-items: center;
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
  /* @media (max-width: 630px) {
    ul {
      grid-template-columns: repeat(auto-fit, minmax(75px, auto));
      grid-gap: 1rem;
    }
  } */
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
        <li>
          <a href="mailto:hotel.kilo.alpha@gmail.com">Contact</a>
        </li>
        <li>
          <a
            href="https://www.github.com/aaronkai"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/aaron-hubbard/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </li>
      </ul>
    </NavStyles>
  );
}
