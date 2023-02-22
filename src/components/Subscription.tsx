import { text } from "@fortawesome/fontawesome-svg-core";
import bikeImg from "../assets/bek1.png";
import { ButtonInscrire, ConnectLink } from "../styles/Subscription.style";
import { map } from "nanostores";

export const SubscriptionStore = map({
  email: "",
  pass: "",
});

/**
 * Composant affichant l'écran Subscription
 */
export default function Subscription() {
  const { email, setEmail } = useStore(SubscriptionStore);
  const { password, setPassword } = useStore(SubscriptionStore);
  return (
    <>
      <h1>Inscription</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      ></input>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      ></input>
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
