import { createGlobalStyle } from 'styled-components';

const fontPath = process.env.REACT_APP_CLOUDFRONT_FONTS;

const GlobalStyles = createGlobalStyle`
/* Ubuntu Regular */
@font-face {
  font-family: 'Ubuntu-Regular';
  src: url('${fontPath}Ubuntu/Ubuntu-Regular.woff2') format('woff2'),
       url('${fontPath}Ubuntu/Ubuntu-Regular.woff') format('woff'),
       url('${fontPath}Ubuntu/Ubuntu-Regular.ttf') format('truetype'),
       url('${fontPath}Ubuntu/Ubuntu-Regular.svg') format('svg'),
       url('${fontPath}Ubuntu/Ubuntu-Regular.eot');
}

@font-face {
  font-family: 'Ubuntu-Medium';
  src: url('${fontPath}Ubuntu/Ubuntu-Medium.woff2') format('woff2'),
       url('${fontPath}Ubuntu/Ubuntu-Medium.woff') format('woff'),
       url('${fontPath}Ubuntu/Ubuntu-Medium.ttf') format('truetype'),
       url('${fontPath}Ubuntu/Ubuntu-Medium.svg') format('svg'),
       url('${fontPath}Ubuntu/Ubuntu-Medium.eot');
}

/* Ubuntu Italic */
@font-face {
  font-family: 'Ubuntu-Italic';
  src: url('${fontPath}Ubuntu/Ubuntu-Italic.woff2') format('woff2'),
       url('${fontPath}Ubuntu/Ubuntu-Italic.woff') format('woff'),
       url('${fontPath}Ubuntu/Ubuntu-Italic.ttf') format('truetype'),
       url('${fontPath}Ubuntu/Ubuntu-Italic.svg') format('svg'),
       url('${fontPath}Ubuntu/Ubuntu-Italic.eot');
}

/* Ubuntu 700 */
@font-face {
  font-family: 'Ubuntu-Bold';
  src: url('${fontPath}Ubuntu/Ubuntu-Bold.woff2') format('woff2'),
       url('${fontPath}Ubuntu/Ubuntu-Bold.woff') format('woff'),
       url('${fontPath}Ubuntu/Ubuntu-Bold.ttf') format('truetype'),
       url('${fontPath}Ubuntu/Ubuntu-Bold.svg') format('svg'),
       url('${fontPath}Ubuntu/Ubuntu-Bold.eot');
}

/* Ubuntu Italic */
@font-face {
  font-family: 'Ubuntu-BoldItalic';
  src: url('${fontPath}Ubuntu/Ubuntu-BoldItalic.woff2') format('woff2'),
       url('${fontPath}Ubuntu/Ubuntu-BoldItalic.woff') format('woff'),
       url('${fontPath}Ubuntu/Ubuntu-BoldItalic.ttf') format('truetype'),
       url('${fontPath}Ubuntu/Ubuntu-BoldItalic.svg') format('svg'),
       url('${fontPath}Ubuntu/Ubuntu-BoldItalic.eot');
}

`;

export default GlobalStyles;
