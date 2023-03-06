import styled from "styled-components";
import { AppTheme } from "./App.style";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DivLink = styled.div`
  .link {
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: ${AppTheme.colors.blackDeepBlue};
    p {
      margin: 0;
    }
  }
`;
export const Title = styled.h1`
  font-family: ${AppTheme.font.lobster};
`;
export const Div = styled.div`
  display: flex;
  border-bottom: 2px solid;
  color: ${AppTheme.colors.gray};
  padding: 0.5rem;
  margin: 1rem;
  i {
    color: ${AppTheme.colors.validgreen};
    margin: 0.5rem;
    font-size: 1.5rem;
  }
  input {
    border: ${AppTheme.colors.lightGreen};
    background-color: ${AppTheme.colors.lightGreen};
    padding: 0.5rem;
    outline: none;
  }
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
`;

/**
 * Bouton
 */
export const Button = styled.button`
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  border-radius: 10px;
  background-color: ${AppTheme.colors.validgreen};
  color: ${AppTheme.colors.white};
  margin: 1rem;
  padding: 0.8rem 3rem;
  &:last-of-type {
    margin-bottom: 0;
  }
`;
