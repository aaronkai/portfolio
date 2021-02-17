import React from 'react';
import styled from 'styled-components';

const BannerStyles = styled.main`
  .banner__title {
    margin-top: 0;
  }
  .banner__subtitle {
    color: var(--darkmelon);
  }
  .banner__tagline {
    color: var(--aqua);
    /* font-size: var(--text-sm); */
  }
`;

export default function Banner() {
  return (
    <BannerStyles>
      <h1 className="banner banner__title">Aaron Hubbard</h1>
      <h3 className="banner banner__subtitle">JAMStack Developer</h3>
      <h5 className="banner banner__tagline">
        Building fast and functional things for the web
      </h5>
    </BannerStyles>
  );
}
