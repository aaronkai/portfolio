import React from 'react';
import styled from 'styled-components';
import logo from '../images/opossum.svg';

// Change color of SVG using CSS filter
const LogoImageStyles = styled.div`
  .logo-image {
    max-height: 110px;
    filter: invert(81%) sepia(9%) saturate(2429%) hue-rotate(122deg)
      brightness(95%) contrast(89%);
  }
`;
export default function Logo() {
  return (
    <LogoImageStyles>
      {/* <Opossum className="logo-image" /> */}
      <img className="logo-image" src={logo} alt="logo" />
    </LogoImageStyles>
  );
}
