import React from 'react';
import styled from 'styled-components';

const BannerStyles = styled.main`
  display: grid;
  grid-gap: 1rem;
  h1 {
    font-weight: 600;
  }
  h2 {
    margin: 0;
  }
  .banner__subtitle {
    color: var(--darkmelon);
    margin: 0;
  }
  .banner__tagline {
    color: var(--aqua);
    margin: 0;
  }
`;

export default function Banner() {
  return (
    <BannerStyles>
      <h1 className="banner banner__title">Aaron Hubbard</h1>
      <h2 className="banner banner__subtitle">JAMStack Developer</h2>
      <p className="banner banner__tagline">
        Building fast and functional things for the web
      </p>
    </BannerStyles>
  );
}
