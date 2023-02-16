import { useState } from "react";
import { GlobalStyle } from "../styles/App.style";
import Counter from "./Counter";
export default function App() {
  return (
    <>
      <GlobalStyle />
      <Counter />
    </>
  );
}
