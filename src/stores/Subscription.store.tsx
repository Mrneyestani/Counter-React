import { useStore } from "@nanostores/react";
import { map } from "nanostores";

export const InscriptionStore = map({
  email: "",
  password: "",
});
/**
 *
 */
export default function Subscriptionstore() {
  const [email, setEmail] = useStore("john@mail.com");
  const [password, setPassword] = useStore("0");
}
