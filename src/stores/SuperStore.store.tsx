import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { action, map } from "nanostores";
import { ChangeEvent } from "react";
import { firebaseDb } from "../lib/Firebase";

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
  save();
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
    save();
  }
);
/**
 * Active ou désactive une tache
 */
export const toggleTask = action(
  SuperStore,
  "toggleTask",
  (store, listIndex: number, taskIndex: number) => {
    // Je récupére toutes les todo lists
    const { lists } = store.get();

    // Je modifie les listes
    const newLists = lists.map((list, i) => {
      if (i !== listIndex) {
        return list;
      }

      const newTasks = list.todos.map((todo, i2) => {
        if (i2 !== taskIndex) {
          return todo;
        }

        return { ...todo, done: !todo.isdone };
      });

      return { ...list, todos: newTasks };
    });

    store.setKey("lists", newLists);

    save();
  }
);

export const removeTodo = action(
  SuperStore,
  "remove a todo",
  (store, listIndex: number, taskIndex: number) => {
    // Retrieve the todo list
    const { lists } = store.get();

    // Creates a new todo list without the todo at
    // the given index
    const newLists = lists.map((list, i) => {
      if (i !== listIndex) {
        return list;
      }
      const newTasks = list.todos.filter((todo, i2) => i2 !== taskIndex);

      return { ...list, todos: newTasks };
    });

    store.setKey("lists", newLists);

    save();
  }
);

export const TODOLIST_COLLECTION = "todoList";

export const save = action(SuperStore, "save", async (store) => {
  const { lists } = store.get();
  const col = collection(firebaseDb, TODOLIST_COLLECTION);

  const reference = await setDoc(doc(firebaseDb), { lists });

  // const id = reference.id;
  // const snap = await getDoc(doc(firebaseDb, TODOLIST_COLLECTION, id));
  // const newTodolist = snap.data();
  // return {
  //   id: id,
  //   ...newTodolist,
  // } as Identifiable<Todolist>;
});
