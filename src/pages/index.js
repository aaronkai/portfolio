import * as React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import SEO from "../components/SEO";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function IndexPage({ data }) {
  console.log({ data });
  const selfie = getImage(data.selfie);
  console.log(selfie);
  return (
    <>
      <SEO title="Home" image={selfie} />
      <main className="grid px-6 max-w-xl m-auto">
        <aside className="mt-10 grid m-auto justify-items-center">
          <GatsbyImage
            image={selfie}
            alt="selfie"
            title="selfie"
            className="rounded-full border-2 border-gray-800 "
          />
          <header className="grid gap-2 mt-10">
            <h1 className="text-5xl text-gray-800 font-sans text-center">
              Aaron Hubbard
            </h1>
            <h3 className="text-3xl text-gray-800 text-center">
              JAMStack Developer
            </h3>
            <h5 className="text-lg text-gray-800 text-center uppercase">
              Building fast and functional things for the web
            </h5>
          </header>
        </aside>
        <section className="mt-10">
          <p className="mb-6">
            Hi! I'm Aaron Hubbard, a family-man and web-developer based in
            Asheville, NC. By day, I'm an application administrator for NOAA's
            CLASS project. In my free-time, I'm staying home, staying safe, and
            learning more and more about making modern websites.
          </p>
          <p className="mb-6">
            To see some examples of my work, check out my projects.
          </p>
          <p className="mb-6">Drop me a line using the contact link.</p>
        </section>
      </main>
    </>
  );
}

export const newquery = graphql`
  query NewSelfieQuery {
    selfie: file(relativePath: { eq: "selfie.jpg" }) {
      id
      childImageSharp {
        gatsbyImageData(
          width: 400
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;
