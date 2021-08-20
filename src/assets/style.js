import { createGlobalStyle } from 'styled-components';
import Manrope from './fonts/Manrope.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Manrope';
    src: url(${Manrope}) format('truetype');
  }

  :root {
    --color-primary: #ff9f9f;
    --color-light: #fab9b9;
    --color-lightest: #ffd9d9;
    --color-dark: #fa9191;
  }

  body {
    padding: 0px;
    margin: 0px;
  }
`;
