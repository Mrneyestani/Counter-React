import { text } from "@fortawesome/fontawesome-svg-core";
import bikeImg from "../assets/bek1.png";
import { ButtonInscrire, ConnectLink } from "../styles/Subscription.style";
import { map } from "nanostores";
import {
  changeEmail,
  changePassword,
  InscriptionStore,
} from "../stores/Subscription.store";
import { useStore } from "@nanostores/react";

/**
 * Composant affichant l'écran Subscription
 */
export default function Subscription() {
  const { email, password, isPasswordValid, isEmailValid } =
    useStore(InscriptionStore);

  return (
    <>
      <h1>Inscription</h1>
      <input
        type="email"
        value={email}
        // onChange={(e) => changeEmail(e.currentTarget.value)}
        // onChange={(e) => changeEmail(e)}
        onChange={changeEmail}
      />
      {isEmailValid === null ? null : isEmailValid ? (
        <p>Valide</p>
      ) : (
        <p>Non Valide</p>
      )}
      <input
        type="password"
        value={password}
        onChange={changePassword}
        // onChange={(e) => setPassword(e.currentTarget.value)}
        // onChange={(e) => setPassword(e)}
      ></input>
      {isPasswordValid === null ? null : isPasswordValid ? (
        <p>Valide</p>
      ) : (
        <p>Non Valide</p>
      )}
      <ButtonInscrire>
        <button>S'inscrire</button>
      </ButtonInscrire>
      <ConnectLink>
        Vous avez déja un compte ? <br />
        Connéctez-vous
      </ConnectLink>
    </>
  );
}
