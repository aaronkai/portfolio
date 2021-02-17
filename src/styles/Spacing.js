import { createGlobalStyle } from 'styled-components';

const Spacing = createGlobalStyle`
:root {
    /* spacing values */
    --space-xxxs: 0.25em;
    --space-xxs:  0.375em;
    --space-xs:   0.5em;
    --space-sm:   0.75em;
    --space-md:   1.25em;
    --space-lg:   2em;
    --space-xl:   3.25em;
    --space-xxl:  5.25em;
    --space-xxxl: 8.5em;
}

h1, h2, h3, h4, h5 form legend {
    margin-bottom: var(--space-xxs);
}

.text-container {
    h2, h3, h4 {
        margin-top: var(--space-sm);
    }
    
    ul, ol, p {
        margin-bottom: var(--space-md);
    }
}
`;

export default Spacing;
