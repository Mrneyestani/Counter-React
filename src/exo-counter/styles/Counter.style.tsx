import styled from "styled-components";
import { AppTheme } from "./App.style";

export const CounterPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: ${AppTheme.colors.violet};
  border-radius: 10px;
  padding: 4rem;
`;
export const CounterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.button`
  background-color: ${AppTheme.colors.lightViolet};
  border-radius: 10px;
  border: none;
  padding: 1.5rem;
  margin: 1rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  font-size: 1.5rem;
  font-family: ${AppTheme.font.family};
`;
export const Display = styled.div`
  background-color: ${AppTheme.colors.lightViolet};
  border-radius: 100%;
  border: none;
  padding: 2rem;
  margin: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const ResetDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ValueDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
`;
