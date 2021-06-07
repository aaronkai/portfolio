import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import styled from "styled-components";

const SocialStyles = styled.div`
  ul {
    display: grid;
    grid-template-columns: auto auto;
    justify-items: end;
    justify-content: end;
    grid-gap: 1rem;
  }

  a:hover {
    color: var(--melon);
  }
`;

export default function Socials() {
  return (
    <SocialStyles>
      <ul>
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
        {/* <li>
          <a href="www.twitter.com">
            <AiFillTwitterCircle />
          </a>
        </li> */}
      </ul>
    </SocialStyles>
  );
}
