import * as React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import SEO from "../components/SEO";
import Map from "../assets/svg/southeast.svg";

export default function IndexPage({ data: { selfie } }) {
  return (
    <>
      <SEO title="Home" image={selfie} />
      <main className="grid px-6 max-w-xl m-auto">
        <aside className="mt-10 ">
          <Img
            fluid={selfie.childImageSharp.fluid}
            alt="selfie"
            title="selfie"
            className="rounded-full border-2 border-gray-800 m-auto"
          />{" "}
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
          {/* <Map
              alt="states"
              className="border-2 border-gray-800 rounded-full overflow-hidden bg-gray-200"
            /> */}
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
          <p>Drop me a line using the contact link.</p>
        </section>
      </main>
    </>
  );
}

export const query = graphql`
  query SelfieQuery {
    selfie: file(relativePath: { eq: "selfie.jpg" }) {
      id
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`;
