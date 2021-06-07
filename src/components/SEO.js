import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import appleIcon from "../images/apple-touch-icon.png";
import favIconSmall from "../images/favicon-16x16.png";
import favIconLarge from "../images/favicon-32x32.png";

export default function SEO({ children, location, description, title, image }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  return (
    <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
      <html lang="en" />
      <title>{title}</title>
      {/* Fav Icons */}
      <link rel="apple-touch-icon" sizes="180x180" href={appleIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={favIconLarge} />
      <link rel="icon" type="image/png" sizes="16x16" href={favIconSmall} />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

      {/* Meta Tags */}
      <meta name="msapplication-TileColor" content="#00a300" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />
      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || "/logo.svg"} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        propery="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta property="og:description" content={description} key="ogdesc" />
      {children}
    </Helmet>
  );
}
