import { useStore } from "@nanostores/react";
import { useParams } from "react-router-dom";
import { task } from "nanostores";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  addNewTodo,
  changeNewTodo,
  resetchangerPage,
  SuperStore,
} from "../stores/SuperStore.store";
import {
  DivIcon,
  DivInput,
  DivList,
  DivLists,
  ListAfaire,
} from "../styles/TodoList.style";

/**
 * Dislay the todo list on the screen
 */
export default function TodoList() {
  // Retrieve the state
  // Comment je récupére la liste sur lequel je viens de cliquer ou que j'ai créé ????
  const { lists, nameNewTodo } = useStore(SuperStore);
  // const activeIndex = lists.findIndex((elem) => elem.active);
  // const table = lists[activeIndex];
  const { index } = useParams();
  const newIndex: number = index ? parseInt(index, 10) : 0;
  // useEffect(() => {
  //   resetchangerPage();
  // }, []);

  return (
    <>
      <h1>{lists[newIndex].name}</h1>
      <DivInput>
        <input
          type="text"
          value={nameNewTodo}
          onChange={(event) => changeNewTodo(event)}
        />
        <button
          onClick={() => {
            addNewTodo(newIndex);
          }}
        >
          <i className="fa-solid fa-circle-plus"></i>
        </button>
      </DivInput>
      <div>
        <ul>
          {lists[newIndex].todos.map((item, index) => (
            <li key={index}> {item.name}</li>
          ))}
        </ul>
      </div>
      {/* <DivLists>
        {todoList.map((todo, index) => (
          <DivList>
            <ListAfaire onClick={() => toggleTodo(index)}>
              {todo.labelTodo} ({todo.doneTodo ? "Fait" : "À Faire"})
            </ListAfaire>
            <DivIcon onClick={() => removeTodo(index)}>
              <i className="fa-solid fa-trash"></i>
            </DivIcon>
          </DivList>
        ))}
      </DivLists> */}
    </>
  );
}
