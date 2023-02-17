import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const AppTheme = {
  colors: {
    darkViolet: "#8a2be2",
    violet: "#a775ec",
    lightViolet: "rgb(214, 185, 241)",
  },
  font: {
    family: `'Sora', sans-serif`,
    size: "18px",
  },
};

export const GlobalStyle = createGlobalStyle`
:root {
    font-size: ${AppTheme.font.size};
    font-family: ${AppTheme.font.family};
    background-color: ${AppTheme.colors.darkViolet};
 }
  html, body, #root {
    margin: 0;
    padding: 0;
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
  };

  *{
    box-sizing: border-box;
  }
`;
