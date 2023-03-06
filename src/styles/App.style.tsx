import { createGlobalStyle } from "styled-components";

/**
 * Création d'un theme contenant les couleurs, les polices
 * ainsi que les marges de bases
 */
export const AppTheme = {
  font: {
    poppins: `'Poppins', sans-serif`,
    lobster: `'Lobster', sans-serif`,

    size: "18px",
  },

  colors: {
    white: "#FFF",
    blue: "rgb(31, 84, 96)",
    transparentBlue: "rgba(31, 84, 96, .8)",
    black: "#0c2227",
    softblack: "#4F4F4F",
    yellow: "#FFCA42",
    green: "#A8C0A7",
    validgreen: "#557859",
    lightGreen: "#D5E7D4",
    gray: "#a6a2a2",
    blackDeepBlue: "#264F4A",
  },
};

/**
 * Création d'un style globale permettant de styliser les balises
 * élémentaire d'une page HTML ainsi que le :root
 */
export const AppGlobalStyle = createGlobalStyle`
  :root {
    font-size: 18px;
    font-family: ${AppTheme.font.poppins};
    color: ${AppTheme.colors.softblack};
    background-color: ${AppTheme.colors.lightGreen};
  }
  html, body, #root {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
`;
