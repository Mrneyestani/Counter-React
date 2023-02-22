import { useStore } from "@nanostores/react";
import { action, map } from "nanostores";
import { ChangeEvent } from "react";

export type InscriptionStore = {
  email: string;
  password: string;
  isEmailValid: boolean | null;
  isPasswordValid: boolean | null;
};

export const InscriptionStore = map<InscriptionStore>({
  email: "",
  password: "",
  isPasswordValid: null,
  isEmailValid: null,
});
/**
 * Actions to change email in store
 */
export const changeEmail = action(
  InscriptionStore,
  "change email",
  (store, e: ChangeEvent<HTMLInputElement>) => {
    // const { email } = store.get();

    store.setKey("email", e.currentTarget.value);
    validateEmail();
  }
);

export const changePassword = action(
  InscriptionStore,
  "change password",
  (store, e: ChangeEvent<HTMLInputElement>) => {
    // const { password } = store.get();

    store.setKey("password", e.currentTarget.value);
    validatePassword();
  }
);

export const validateEmail = action(
  InscriptionStore,
  "validate email",
  (store) => {
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
export const validatePassword = action(
  InscriptionStore,
  "validate password",
  (store) => {
    // Retrieve the password in the store
    const { password } = store.get();

    if (password === "") {
      store.setKey("isPasswordValid", null);

      return;
    }

    if (password.length < 8) {
      store.setKey("isPasswordValid", false);

      return;
    }

    store.setKey("isPasswordValid", true);
  }
);
