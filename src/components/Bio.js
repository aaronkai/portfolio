import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const BioStyles = styled.div`
  display: grid;
  grid-gap: 2rem;
  img {
    border-radius: 50%;
  }
  p {
    font-weight: 500;
  }
`;
export default function Bio({ selfie }) {
  return (
    <BioStyles>
      <Img fluid={selfie.childImageSharp.fluid} />
      <p>
        Hi! I'm Aaron Hubbard, a family-man and web-developer based in
        Asheville, NC. By day, I'm an application administrator for NOAA's CLASS
        project. In my free-time, I'm staying home, staying safe, and learning
        more and more about making modern websites.
      </p>
      <p>To see some examples of my work, check out my projects.</p>
      <p>Drop me a line using the contact link</p>
    </BioStyles>
  );
}
