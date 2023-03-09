import { action, map } from "nanostores";
import { ChangeEvent } from "react";

export type List = {
  name: string;
  user: string;
  active: boolean;
  newTodo: string;
  todos: Todo[];
};

export type Todo = {
  name: string;
  isdone: boolean;
};

export type SuperListState = {
  newList: string;
  nameNewTodo: string;
  lists: List[];
  changerPage: boolean;
};

export const SuperStore = map<SuperListState>({
  newList: "",
  nameNewTodo: "",
  lists: [],
  changerPage: false,
});

/**
 * Action allowing to modify the new task
 */
export const changeNewList = action(
  SuperStore,
  "change new task",
  (store, e: ChangeEvent<HTMLInputElement>) => {
    store.setKey("newList", e.currentTarget.value);
  }
);

/**
 * Add a new task into the list
 */
export const addNewList = action(SuperStore, "add new task", (store) => {
  // Retrieve the new task
  const { newList, lists } = store.get();

  //   // Create the task
  // Désactivé tout les éléments de tableGlobal
  //   const task: tableGlobal = { nameTask: newListTask, active: false };
  const list: List = {
    name: newList,
    user: "Rose",
    active: true,
    newTodo: "",
    todos: [],
  };

  // Creates a new list from the taskList and
  // prepend the task
  const myNewLists = [list, ...lists];

  // Place the newList into the store
  store.setKey("lists", myNewLists);
});

/**
 * Action allowing to modify the new task
 */
export const changeNewTodo = action(
  SuperStore,
  "change new todo",
  (store, e: ChangeEvent<HTMLInputElement>) => {
    // const { nameNewTodo } = store.get();
    // const list = lists[index];
    // const newList = {
    //   name: list.name,
    //   user: list.user,
    //   active: list.active,
    //   nameNewTodo : e.currentTarget.value,
    //   todos: list.todos,
    // };
    // lists[index] = newList;
    // console.log(e.currentTarget.value);
    store.setKey("nameNewTodo", e.currentTarget.value);
  }
);

/**
 * Add a new todo into the list
 */
export const addNewTodo = action(
  SuperStore,
  "add new todo",
  (store, activeIndex) => {
    // Retrieve the new task

    const { lists, nameNewTodo } = store.get();
    console.log(activeIndex);
    console.log(nameNewTodo);
    const list = lists[activeIndex];
    const newTodo = {
      name: nameNewTodo,
      isdone: false,
    };
    const myNewTodo = [newTodo, ...list.todos];
    list.todos = myNewTodo;
    lists[activeIndex] = list;
    store.setKey("lists", lists);
    store.setKey("nameNewTodo", "");
    console.log(lists[activeIndex].todos);
    // const matable = lists.map((newTodo, i) => {
    //   if (!newTodo.active) {
    //     return newTodo;
    //   }

    //   newTodo;
    // });

    // Check if the task is empty
    // if (!newTodo.length) {
    //   return;
    // }
    // const todo: string = newTodo;
    // store.setKey("newTodo", todo);
    // //   // Create the task
    // //   const task: tableGlobal = { nameTask: newListTask, active: false };
    // const newtable: List = {
    //   name: newList,
    //   user: "Rose",
    //   active: true,
    //   newTodo: "",
    //   todo: [],
    // };
    // Creates a new list from the taskList and
    // prepend the task
    // const mynewtable = [List, ...lists];

    // // Place the newList into the store

    // store.setKey("changerPage", true);
  }
);
export const resetchangerPage = action(
  SuperStore,
  "reset ChangePAge",
  (store) => {
    store.setKey("changerPage", false);
  }
);
