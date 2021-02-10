import { createGlobalStyle } from 'styled-components';
import '@fontsource/big-shoulders-display';

const Typography = createGlobalStyle`
  /* @font-face {
    font-family: 'Big Shoulders Display' 'Open Sans', 'Helvetica Neue', sans-serif;
  }
   */
  html {
    font-family:  'Big Shoulders Display', 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--white);
  }
  p, li {
    letter-spacing: 0.5px;
    margin: 0;
    padding: 0;
    font-size: 3rem;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
    padding: 0;
  }
  h1 {
    font-size: 10rem;
    font-weight: 600;
  }
  h2 {
    font-size: 6rem;
    margin: 0;
  }

  a {
    color: var(--white);
    text-decoration-color: var(--aqua);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  mark, .mark {
    background: var(--darkmelon);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }
`;

export default Typography;
