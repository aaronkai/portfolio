import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import SEO from '../components/SEO';

const ProjectStyles = styled.div`
  display: grid;
  max-width: 800px;
  padding: 2rem;
  grid-gap: 2rem;
`;

const SingleProjectStyles = styled.section`
  display: grid;
  background: rgb(360, 360, 360, 0.1);
  padding: 2rem;
  grid-template-rows: auto 1fr auto;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
  grid-template-areas:
    'title'
    'image'
    'description';
  .project__title {
    grid-column: span 1;
    justify-self: center;
    text-transform: uppercase;
  }
  .project__title a {
    text-decoration-color: var(--melon);
  }
  border: 1px solid var(--black);

  .project__image {
    border: 3px solid var(--black);
  }
`;

export const query = graphql`
  query ProjectQuery {
    bauccus: file(relativePath: { eq: "bauccus_atlas_screencap.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default function ProjectsPage({ data: { bauccus } }) {
  return (
    <>
      <SEO title="Projects" image={bauccus.childImageSharp.fluid} />
      <ProjectStyles>
        <h1>My Projects</h1>
        <SingleProjectStyles>
          <h2 className="project__title">
            <a href="https://bauccus-atlas.netlify.app/">Bauccus Atlas</a>{' '}
          </h2>
          <Img
            className="project__image"
            fluid={bauccus.childImageSharp.fluid}
          />
          <p>
            Bauccus Atlas is a static page generated with Gatsby with a Sanity
            backend CMS. Based on but not identical to a tutorial given by Wes
            Bos.
          </p>
        </SingleProjectStyles>
      </ProjectStyles>
    </>
  );
}
