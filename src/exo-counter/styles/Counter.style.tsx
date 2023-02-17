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
export const ButtonPlus = styled.button`
  background-color: ${AppTheme.colors.lightViolet};
  border-radius: 5px;
  border: none;
  padding: 2rem;
  margin: 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;
export const DisplayCounter = styled.div`
  background-color: ${AppTheme.colors.lightViolet};
  border-radius: 50%;
  border: none;
  padding: 2rem;
  margin: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
`;
export const ButtonMinus = styled.button`
  background-color: ${AppTheme.colors.lightViolet};
  border-radius: 5px;
  border: none;
  padding: 2rem;
  margin: 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;
export const ResetDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ButtonReset = styled.button`
  background-color: ${AppTheme.colors.lightViolet};
  border-radius: 5px;
  border: none;
  padding: 2rem;
  margin: 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;
export const ValueDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
`;
export const ButtonPlusIncrement = styled.button`
  background-color: ${AppTheme.colors.lightViolet};
  border-radius: 5px;
  border: none;
  padding: 2rem;
  margin: 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;
export const DisplayIncrement = styled.div`
  background-color: ${AppTheme.colors.lightViolet};
  border-radius: 100%;
  border: none;
  padding: 2rem;
  margin: 1rem;
`;
export const ButtonMinusIncrement = styled.button`
  background-color: ${AppTheme.colors.lightViolet};
  border-radius: 5px;
  border: none;
  padding: 2rem;
  margin: 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;
