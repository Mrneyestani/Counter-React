import { StrictMode } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { SubscribeStore } from "../stores/Subscribe.store";
import { AppGlobalStyle } from "../styles/App.style";
import Connexion from "./Connexion";
import Home from "./Home";
import Subscribe from "./Subscription";
import TodoList from "./TodoList";
import NewTask from "./NouvelleList";
import NouvelleList from "./NouvelleList";

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
        <nav>
          <Link to="/">Home</Link>
          <br />
          <Link to="/todo-list/:index">TodoList</Link>
          <br />
          <Link to="/nouvelle-task">NouvelleList</Link>
          <br />
          <Link to="/inscription">Subscribe</Link>
          <br />
          <Link to="/connexion">Connexion</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscription" element={<Subscribe />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/todo-list/:index" element={<TodoList />} />
          <Route path="/nouvelle-task" element={<NouvelleList />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}
