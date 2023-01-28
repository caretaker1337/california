import { css } from "~/theme";

const base = css`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  html {
    font-size: ${({ theme: { fonts } }): number => fonts.initialFontSize}px;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: "Inter";
    margin: 0;
  }

  svg {
    height: 100%;
    width: 100%;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
  }

  button {
    cursor: pointer;
    background-color: transparent;
  }

  input:focus {
    outline: none;
  }
`;

export { base };
