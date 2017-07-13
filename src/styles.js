export const colors = {
  white: '#fff',
  black: '#000',
  blue: '#02b7e2',
  orange: '#ebac57',
  green: '#3bb268',
  dark: '#404041',
  light: '#8c8c8e',
  lineColour: '#d8d9d9'
};

export const fonts = {
  small: '12px',
  medium: '14px',
  large: '16px',
  h1: '30px',
  h2: '28px',
  h3: '24px',
  h4: '18px',
  h5: '16px'
};

export const transitions = {
  short: 'all 0.1s ease-in-out',
  base: 'all 0.2s ease-in-out',
  long: 'all 0.3s ease-in-out'
};

export const globalStyles = `
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');

  html, body {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Lato, sans-serif;
    font-weight: 400;
    font-size: ${fonts.medium};
    color: ${colors.dark};
    position: relative;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box !important;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border-style: none;
    line-height: 1em;
  }

  button:active,
  button:focus,
  button.active {
    background-image: none;
    outline: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
  }
`;
