import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const AppTheme = {
  colors: {
    darkViolet: "#8a2be2",
    violet: "#a775ec",
    lightViolet: "rgb(214, 185, 241)",
  },
};

export const GlobalStyle = createGlobalStyle`
:root {
background-color: #dbdbdb;
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
    background-color: ${AppTheme.colors.darkViolet};
  };

  *{
    box-sizing: border-box;
  }
`;
