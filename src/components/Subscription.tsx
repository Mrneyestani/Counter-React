import { useStore } from "@nanostores/react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

import {
  changeEmail,
  changePassword,
  connexion,
  subscribe,
  SubscribeStore,
} from "../stores/Subscribe.store";
import {
  Button,
  Div,
  DivInput,
  DivLink,
  Main,
  Title,
} from "../styles/SubscriptionConnexion.style";

export default function Subscribe() {
  // Retrieve the state of the subscribe store
  const { email, password, isPasswordValid, isEmailValid, user } =
    useStore(SubscribeStore);

  // Si je suis connécté
  if (user) {
    // On redirige vers la page d'accueil
    return <Navigate to="/connexion"></Navigate>;
  }

  return (
    <>
      <Main>
        <div>
          <Title>Inscription</Title>
        </div>
        <DivInput>
          <Div>
            <input
              className="Input"
              value={email}
              type="email"
              placeholder="Email"
              onChange={(e) => {
                changeEmail(e.currentTarget.value);
              }}
            />
            {isEmailValid === null ? null : isEmailValid ? (
              <i className="fa-solid fa-circle-check"></i>
            ) : (
              // <p>Valide</p>
              <i className="fa-solid fa-circle-xmark"></i>
              // <p>Non Valide</p>
            )}
          </Div>
          <Div>
            <input
              className="Input"
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={changePassword}
            />
            {isPasswordValid === null ? null : isPasswordValid ? (
              <i className="fa-solid fa-circle-check"></i>
            ) : (
              // <p>Valide</p>
              // <p>Non Valide</p>
              <i className="fa-solid fa-circle-xmark"></i>
            )}
          </Div>
        </DivInput>
        <div>
          <Button onClick={subscribe}>S'inscrire</Button>
        </div>
        <DivLink>
          <p>Vous avez dèja un compte ?</p>
          <Link className="link" to="/connexion">
            <p>Connéctez-vous</p>
          </Link>
        </DivLink>
      </Main>
    </>
  );
}
