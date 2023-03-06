import { useStore } from "@nanostores/react";
import { useState } from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import {
  changeEmail,
  changePassword,
  connexion,
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

export default function Connexion() {
  const { email, password, isPasswordValid, isEmailValid, user } =
    useStore(SubscribeStore);
  //si je suis connécté
  if (user) {
    //on redirige vers la page d'accueil
    return <Navigate to="/"></Navigate>;
  }

  return (
    <>
      <Main>
        <div>
          <Title> Connexion</Title>
        </div>
        <DivInput>
          <Div>
            <input
              className="Input"
              value={email}
              type="email"
              onChange={(e) => {
                changeEmail(e.currentTarget.value);
                //console.log(e.currentTarget.value)
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
              value={password}
              onChange={changePassword}
            />
            {isPasswordValid === null ? null : isPasswordValid ? (
              <i className="fa-solid fa-circle-check"></i>
            ) : (
              // <p>Valide</p>
              <i className="fa-solid fa-circle-xmark"></i>
              // <p>Non Valide</p>
            )}
          </Div>
        </DivInput>
        <div>
          <Button onClick={connexion}>Envoyer</Button>
        </div>
        <DivLink>
          <Link className="link" to="/inscription">
            <p>Vous n’avez pas de compte ? </p>
            <p>Inscrivez vous</p>
          </Link>
        </DivLink>
      </Main>
    </>
  );
}
