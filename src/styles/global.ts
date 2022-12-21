import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
  }

  body {
    background-color: ${(props) => props.theme["blue-900"]};
    color: ${(props) => props.theme.white}
  }

  body, input, button {
    font-family: 'Space Mono', monospace;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
  }
`;
