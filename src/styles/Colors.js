import { createGlobalStyle } from 'styled-components';

const Colors = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #c8c7bf;
    --gray: #272524;
    --melon: #FFA273;
    --darkmelon: #DB7C4D;
    --aqua: #4DDBD1;
    --darkaqua: #158F86;
    --funerealaqua: #1c2928;

    --color-text: var(--white);
    --color-text-heading: var(--white);
  }

  body {
    background-color: var(--gray);
  }
`;

export default Colors;
