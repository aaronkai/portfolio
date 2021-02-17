import { createGlobalStyle } from 'styled-components';
import '@fontsource/big-shoulders-display';

const Typography = createGlobalStyle`

  /* Typography system from https://medium.com/codyhouse/create-your-design-system-part-1-typography-7c630d9092bd */
  :root {
      --font-primary: 'Big Shoulders Display', 'Open Sans', 'Helvetica Neue', sans-serif;
      --font-secondary: 'Big Shoulders Display', 'Open Sans', 'Helvetica Neue', sans-serif;


      /* set base values */
      --text-base-size: 2em;
      --text-scale-ratio: 1.2;

      /* type scale */
      --text-xs: calc(1em / (var(--text-scale-ratio) * var(--text-scale-ratio)));
      --text-sm: calc(1em / var(--text-scale-ratio));
      --text-md: calc(1em * var(--text-scale-ratio));
      --text-lg: calc(1em * var(--text-scale-ratio) * var(--text-scale-ratio));
      --text-xl: calc(1em * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio));
      --text-xxl: calc(1em * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio));
      --text-xxxl: calc(1em * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio));
  }

  body {
      font-size: var(--text-base-size);
      font-family: var(--font-primary);
      color: var(--color-text);
  }

  h1, h2, h3, h4, h5 form legend {
      color: var(--color-text-heading);
      margin-bottom: var(--space-xxs);
      letter-spacing: 1px;
  }

  /* text size */
  .text--xxxl {
      font-size: var(--text-xxxl);
  }

  h1, .text--xxl {
      font-size: var(--text-xxl);
  }

  h2, .text--xl {
      font-size: var(--text-xl);
  }

  h3, .text--lg {
      font-size: var(--text-lg);
  }

  h4, .text--md {
      font-size: var(--text-md);
  }

  .text--sm, small {
      font-size: var(--text-sm);
  }

  .text--xs {
      font-size: var(--text-xs);
  }

  p {
      line-height: var(--body-line-height);
  }
  /*End font system */

  html {
    color: var(--white);
  }

  a {
    color: var(--white);
    text-decoration-color: var(--aqua);
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
