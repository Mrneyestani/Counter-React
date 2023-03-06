import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SubscribeStore } from "../stores/Subscribe.store";
import { AppGlobalStyle } from "../styles/App.style";
import Connexion from "./Connexion";
import Home from "./Home";
import Subscribe from "./Subscription";
import TodoList from "./TodoList";

/**
 * Main component displaying the entire super todo
 * app. You'll find there the routes and screens of
 * the application
 */
export default function App() {
  return (
    <StrictMode>
      <AppGlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscription" element={<Subscribe />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/todo-list" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}
