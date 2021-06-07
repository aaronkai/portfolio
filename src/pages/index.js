import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Banner from '../components/Banner';
import SEO from '../components/SEO';
import Map from '../assets/svg/southeast.svg';

// TO DO
// 3. call to action like "request a quote"
// 4. Testimonials
// 8. sidebar is not long enough. maybe add footer? maybe add header?

const HomepageStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: var(--space-lg);
  max-width: 1000px;

  .image {
    align-self: center;
    justify-self: center;
    width: 100%;
    border-radius: 50%;
    border: 2px solid black;
  }
  .image img {
    border-radius: 50%;
  }

  .left {
    grid-row-start: 1;
    grid-row-end: span 2;
    align-self: center;
    background-image: url(../assets/svg/southeast.svg);
  }
  .bio {
  }
  .map {
    border: 2px solid black;
    border-radius: 50%;
    background-color: var(--darkmelon);
    opacity: 50%;
    overflow: hidden;
    width: 75%;
    height: 75%;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;

    .left {
      text-align: center;
    }
  }
`;

export default function IndexPage({ data: { selfie } }) {
  return (
    <>
      <SEO title="Home" image={selfie} />
      <HomepageStyles>
        <div className="left">
          <Banner className="left" />
          <div className="map">
            <Map alt="states" width="100%" height="100%" />
          </div>
        </div>
        <div className="image">
          <Img
            fluid={selfie.childImageSharp.fluid}
            alt="selfie"
            title="selfie"
            // style={{ height: '350px', width: '350px' }}
          />
        </div>
        <div className="bio">
          <p>
            Hi! I'm Aaron Hubbard, a family-man and web-developer based in
            Asheville, NC. By day, I'm an application administrator for NOAA's
            CLASS project. In my free-time, I'm staying home, staying safe, and
            learning more and more about making modern websites.
          </p>
          <p>To see some examples of my work, check out my projects.</p>
          <p>Drop me a line using the contact link</p>
        </div>
      </HomepageStyles>
    </>
  );
}

export const query = graphql`
  query SelfieQuery {
    selfie: file(relativePath: { eq: "selfie.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`;
