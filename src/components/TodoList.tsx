import { useStore } from "@nanostores/react";
import { useParams } from "react-router-dom";
import { task } from "nanostores";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  addNewTodo,
  changeNewTodo,
  removeTodo,
  SuperStore,
  toggleTask,
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
  const { index }: any = useParams();
  const position = parseFloat(index);
  const list = lists[position];

  // useEffect(() => {
  //   resetchangerPage();
  // }, []);

  return (
    <>
      <h1>{lists[position].name}</h1>
      <DivInput>
        <input
          type="text"
          value={nameNewTodo}
          onChange={(event) => changeNewTodo(event)}
        />
        <button
          onClick={() => {
            addNewTodo(position);
          }}
        >
          <i className="fa-solid fa-circle-plus"></i>
        </button>
      </DivInput>
      {list.todos.map((task, i) => (
        <div onClick={() => toggleTask(position, i)} key={index}>
          <p>
            {task.name} ({task.isdone ? "Fait" : "À faire"})
          </p>
          <i
            className="fa-solid fa-trash"
            onClick={() => removeTodo(position, i)}
          ></i>
        </div>
      ))}
    </>
  );
}
