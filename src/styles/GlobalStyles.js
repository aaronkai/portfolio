import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --maxWidth: 1000px;
  }

/* Force padding inside box size */
  *,*:before, *after{
    box-sizing: inherit;
  }

  button {
    background: var(--aqua);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }}

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--darkmelon);
  }
  body::-webkit-scrollbar-track {
    background: var(--gray);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--darkmelon) ;
    border-radius: 6px;
    border: 3px solid var(--gray);
  }

  hr {
    border: 0;
    height: 8px;
    background-size: 1500px;
  }

  img {
    max-width: 100%;
  }
  li {
    list-style: none;
  }


`;

export default GlobalStyles;
