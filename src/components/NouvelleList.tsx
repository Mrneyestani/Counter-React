import { useStore } from "@nanostores/react";
import { Navigate } from "react-router";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  addNewList,
  changeNewList,
  SuperStore,
} from "../stores/SuperStore.store";
import { DivInput } from "../styles/TodoList.style";

/**
 * Dislay the task list on the screen
 */
export default function NouvelleList() {
  // Retrieve the state
  const { newList, changerPage } = useStore(SuperStore);

  return (
    <>
      <h1>Nouvelle liste</h1>
      <p>user</p>
      <DivInput>
        <input type="text" value={newList} onChange={changeNewList} />
        <Link to="/" onClick={addNewList}>
          Créer
        </Link>
      </DivInput>
    </>
  );
}
