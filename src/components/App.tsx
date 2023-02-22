import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppGlobalStyle } from "../styles/App.style";
import Subscription from "./Subscription";

/**
 * Composant affichant l'application
 *
 * @link https://www.figma.com/file/bwQ0R9kNPCcCVPqpaySbpE/Todo-App?node-id=0%3A1&t=cbRxYmUjqOpfpAD7-1
 */
export default function App() {
  return (
    <StrictMode>
      <AppGlobalStyle />
      <BrowserRouter>
        <Subscription />
      </BrowserRouter>
    </StrictMode>
  );
}
