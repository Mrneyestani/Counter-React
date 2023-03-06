import { async } from "@firebase/util";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { action, map } from "nanostores";
import { ChangeEvent } from "react";
import { firebaseAuth } from "../lib/Firebase";

/**
 * @module Subscribe.store
 *
 * @description
 *  This file contains states and actions of the subscribe
 *  screen.
 */

/**
 * This is what contains the state of the subscribe
 * screen
 */
export type SubscribeState = {
  email: string;
  password: string;
  isEmailValid: boolean | null;
  isPasswordValid: boolean | null;
  user?: {
    uid: string;
    email: string | null;
    goto?: boolean | null;
  };
};

/**
 * Store containing the subscribe state
 */
export const SubscribeStore = map<SubscribeState>({
  email: "",
  password: "",
  isPasswordValid: null,
  isEmailValid: null,
  user: undefined,
  //goto: null,
});

/**
 * Action allowing to change the store email
 */
export const changeEmail = action(
  SubscribeStore,
  "changeEmail",
  (store, lettreEntree: string) => {
    store.setKey("email", lettreEntree);
    validateEmail();
  }
);
/*
export const changeEmail = action(
  // Store on wich we want to execute the action
  SubscribeStore,
  // Name if the action used for debugging
  'change email',
  // Function of the action ! This one is the code
  // thta actually change the email in the store
  (store, e: ChangeEvent<HTMLInputElement>) => {
    // We can change a box content
    store.setKey('email', e.currentTarget.value)
    // On lance la validation de l'email
    validateEmail()
  },
)
*/

/**
 * Action allowing to change the password
 */
export const changePassword = action(
  SubscribeStore,
  "change password",
  (store, e: ChangeEvent<HTMLInputElement>) => {
    // We can change a box content
    store.setKey("password", e.currentTarget.value);
    // We validate the password
    validatePassword();
  }
);

/**
 * Action that validates the email of the store
 */
export const validateEmail = action(
  SubscribeStore,
  "validate email",
  (store) => {
    // Retrieve the email in the store
    const { email } = store.get();

    if (email === "") {
      store.setKey("isEmailValid", null);

      return;
    }

    if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
      store.setKey("isEmailValid", true);

      return;
    }

    store.setKey("isEmailValid", false);
  }
);

/**
 * Action permettant de valider le mot de passe
 */
export const validatePassword = action(
  SubscribeStore,
  "validate password",
  (store) => {
    // Retrieve the password in the store
    const { password } = store.get();

    if (password === "") {
      store.setKey("isPasswordValid", null);

      return;
    }

    if (password.length < 6) {
      store.setKey("isPasswordValid", false);

      return;
    }

    store.setKey("isPasswordValid", true);
  }
);

export const subscribe = action(SubscribeStore, "subscribe", async (store) => {
  // 1. Je récupére les valeurs contenue dans mon état
  const { email, password, isPasswordValid, isEmailValid } = store.get();

  // 2. J'envoie à firebase l'email et le mot de passe pour créer un compte
  const result = await createUserWithEmailAndPassword(
    firebaseAuth,
    email,
    password
  );

  // J'enregistre l'utilisateur dans le store
  store.setKey("user", result.user);
});

export const connexion = action(SubscribeStore, "connexion", async (store) => {
  // 1. Je récupére les valeurs contenue dans mon état
  const { email, password, isPasswordValid, isEmailValid } = store.get();

  // 2. Je recupere de firebase l'email et le mot de passe pour connecter à un compte
  const result = await signInWithEmailAndPassword(
    firebaseAuth,
    email,
    password
  );

  // Je recupere  l'utilisateur dans le store
  store.setKey("user", result.user);
});
