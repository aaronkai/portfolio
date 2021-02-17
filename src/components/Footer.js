import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  display: grid;
  justify-content: center;
  align-content: center;
  background-color: rgb(0, 0, 0, 0.5);
  align-self: flex-end;
`;

export default function Footer() {
  return (
    <FooterStyles>
      <p>Aaron Hubbard&copy; 2021</p>
    </FooterStyles>
  );
}
