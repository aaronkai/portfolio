import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Opossum from '../assets/opossum.svg';

// Change color of SVG using CSS filter
const LogoImageStyles = styled.div`
  .logo-image {
    filter: invert(81%) sepia(9%) saturate(2429%) hue-rotate(122deg)
      brightness(95%) contrast(89%);
    width: 100%;
    height: 100%;
  }
`;
export default function Logo() {
  return (
    <LogoImageStyles>
      <Link to="/">
        <Opossum className="logo-image" />
      </Link>
    </LogoImageStyles>
  );
}
