import * as React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import SEO from "../components/SEO";

const ProjectStyles = styled.div`
  display: grid;
  justify-content: center;
`;

const SingleProjectStyles = styled.section`
  display: grid;
  background: rgb(360, 360, 360, 0.1);
  padding: 2rem;
  grid-template-rows: auto 1fr auto;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
  grid-template-areas:
    "title"
    "image"
    "description";
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
        gatsbyImageData(
          width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    aikikai: file(relativePath: { eq: "asheville_aikikai_screencap.png" }) {
      id
      childImageSharp {
        gatsbyImageData(
          width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    bacchus: file(relativePath: { eq: "bacchus_atlas_screencap.png" }) {
      id
      childImageSharp {
        gatsbyImageData(
          width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;

export default function ProjectsPage({ data }) {
  const bauccus = getImage(data.bauccus);
  const aikikai = getImage(data.aikikai);
  const bacchus = getImage(data.bacchus);

  return (
    <>
      <SEO title="Projects" image={bauccus} />
      <main className="grid justify-center bg-green-50 px-6">
        <h1 className="text-5xl text-gray-800 font-sans text-center my-10 ">
          My Projects
        </h1>
        <section className=" border-4 border-gray-700 mb-6 p-6 bg-gray-200 rounded shadow">
          <h2 className="mt-12 text-4xl text-gray-800 font-sans text-center border-b-2 pb-4 border-gray-700 uppercase">
            <a className="hover:text-green-600" href="https://bauccus-atlas.netlify.app/">Bauccus Atlas</a>
          </h2>
          <div className="mt-12 border-2 border-gray-700 shadow">
            <GatsbyImage
              image={bauccus}
              alt="Bauccus Atlas"
              title="Bauccus Atlas"
            />
          </div>
          <p className="mt-4 bg-gray-50 border-2 border-gray-700 px-4 py-12 md:p-12 text-lg shadow">
            Bauccus Atlas is a static page generated with Gatsby with a Sanity
            backend CMS. Based on, but not identical to, a tutorial given by Wes
            Bos.
          </p>
        </section>

        <section className=" border-4 border-gray-700 my-6 p-6 bg-gray-200 rounded shadow">
          <h2 className="mt-12 text-4xl text-gray-800 font-sans text-center border-b-2 pb-4 border-gray-700 uppercase">
            <a className="hover:text-green-600" href="https://asheville-aikikai-refresh.netlify.app/">Asheville Aikikai</a>
          </h2>
          <div className="mt-12 border-2 border-gray-700 shadow">
            <GatsbyImage
              image={aikikai}
              alt="Asheville Aikikai"
              title="Asheville Aikikai"
            />
          </div>
          <p className="mt-4 bg-gray-50 border-2 border-gray-700 px-4 py-12 md:p-12 text-lg shadow">
            Asheville Aikikai is a brochure page developed for an Aikido Dojo in Asheville NC. It was build in SvelteKit.
          </p>
        </section>

        <section className=" border-4 border-gray-700 my-6 p-6 bg-gray-200 rounded shadow">
          <h2 className="mt-12 text-4xl text-gray-800 font-sans text-center border-b-2 pb-4 border-gray-700 uppercase">
            <a className="hover:text-green-600" href="https://www.bacchusatlas.com/">Bacchus Atlas Refresh</a>
          </h2>
          <div className="mt-12 border-2 border-gray-700 shadow">
            <GatsbyImage
              image={bacchus}
              alt="Bacchus Atlas landing page"
              title="Bacchus Atlas"
            />
          </div>
          <p className="mt-4 bg-gray-50 border-2 border-gray-700 px-4 py-12 md:p-12 text-lg shadow">
            Bacchus Atlas was a rework of the original page I built in Gatsby, after learning the limitations of the Sanity backend. This site is build in NextJS. It utilizes Apollo and GQL. It runs KeystoneJS on the backend to handle authentication, and runs postgres for its database. It is still a work in progress, but essential functionality is in place. A user can log in, add wines to the database, geolocate them on a map, and rate them.  
          </p>
        </section>
      </main>
    </>
  );
}
