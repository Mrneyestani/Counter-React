import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
background-color: #dbdbdb;
 }
  html, body, #root {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-width: 100vw;
    min-height: 100vh;
  };

  *{
    box-sizing: border-box;
  }
`;
