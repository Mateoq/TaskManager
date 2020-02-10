/**
 * Module with the Global App styles.
 * @module src/styles/GlobalStyles
 */
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   html {
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    &,
    *,
    *::after,
    *::before {
      box-sizing: border-box;
      clear: both;
      font-family: inherit;
      margin: 0;
      padding: 0;
    }
  }
`;

export default GlobalStyles;
