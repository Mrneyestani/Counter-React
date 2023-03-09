import { async } from "@firebase/util";
import { useStore } from "@nanostores/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { action, map } from "nanostores";
import { ChangeEvent } from "react";
import { firebaseAuth } from "../lib/Firebase";
import { SubscribeStore } from "./Subscribe.store";

/**
 * Contains a todo item
 */
export type Todo = {
  reponsable?: string;
  labelTodo: string;
  doneTodo: boolean;
  isLabelTodoValide?: boolean;
};
export type Task = {
  reponsable?: string;
  labelTask: string;
  doneTask: boolean;
  isLabelTaskValide?: boolean;
};

/**
 * Contains all fields of the todo list state
 */
export type TodoListState = {
  newTodo: string;
  todoList: Todo[];
};

/**
 * Contains all fields of the task list state
 */
export type TaskListState = {
  newTask: string;
  taskList: Task[];
};

/**
 * Store containing the state
 */
export const TodoListStore = map<TodoListState>({
  newTodo: "",
  todoList: [],
});

/*
superSotre = map({
  newList: '',
  lists: [
    {
      name: 'Courses du dimanche',
      user: 'Rose',
      active: true,
      newTask: '',
      tasks: [],
    },
    {
      user: 'Rose',
      name: 'Petites courses'
      active: false,
    },
    {
      user: 'Rose',
      name: 'Ménage',
      active: false,
      newTask: '',
      tasks: [
        { name: 'Acheter du pain', done: false },
        { name: 'Acheter du pain', done: false },
      ]
    },
    {
      user: 'Rose',
      name: 'Test',
      active: false,
    }
  ]
})
*/

export const TaskListStore = map<TaskListState>({
  newTask: "",
  taskList: [],
});

/**
 * Action allowing to modify the new todo
 */
export const changeNewTodo = action(
  TodoListStore,
  "change new todo",
  (store, e: ChangeEvent<HTMLInputElement>) => {
    store.setKey("newTodo", e.currentTarget.value);
  }
);
/**
 * Action allowing to modify the new task
 */
export const changeNewTask = action(
  TaskListStore,
  "change new task",
  (store, e: ChangeEvent<HTMLInputElement>) => {
    store.setKey("newTask", e.currentTarget.value);
  }
);

/**
 * Add a new todo into the list
 */
export const addNewTodo = action(TodoListStore, "add new todo", (store) => {
  // Retrieve the new todo
  const { newTodo, todoList } = store.get();

  // Check if the todo is empty
  if (!newTodo.length) {
    return;
  }

  // Create the todo
  const todo: Todo = { labelTodo: newTodo, doneTodo: false };

  // Creates a new list from the todoList and
  // prepend the todo
  const newTodoList = [todo, ...todoList];

  // Place the newList into the store
  store.setKey("todoList", newTodoList);
  store.setKey("newTodo", "");
});

/**
 * Add a new task into the list
 */
export const addNewTask = action(TaskListStore, "add new task", (store) => {
  // Retrieve the new task
  const { newTask, taskList } = store.get();

  // Check if the task is empty
  if (!newTask.length) {
    return;
  }

  // Create the task
  const task: Task = { labelTask: newTask, doneTask: false };

  // Creates a new list from the taskList and
  // prepend the task
  const newTaskList = [task, ...taskList];

  // Place the newList into the store
  store.setKey("taskList", newTaskList);
  store.setKey("newTask", "");
});

/**
 * Toggle a todo in the list
 */
export const toggleTodo = action(
  TodoListStore,
  "toggle a todo",
  (store, index: number) => {
    // Retrieve the todo list
    const { todoList } = store.get();

    // Create a new todo list
    const newTodoList = todoList.map((todo, i) => {
      // If the index is not the position
      if (i !== index) {
        return todo;
      }

      // Return the modified todo
      return {
        ...todo,
        doneTodo: !todo.doneTodo,
      };
    });

    // we set the new list
    store.setKey("todoList", newTodoList);
  }
);

/**
 * Toggle a todo in the list
 */
export const toggleTask = action(
  TaskListStore,
  "toggle a task",
  (store, index: number) => {
    // Retrieve the task list
    const { taskList } = store.get();

    // Create a new task list
    const newTaskList = taskList.map((task, i) => {
      // If the index is not the position
      if (i !== index) {
        return task;
      }

      // Return the modified todo
      return {
        ...task,
        doneTask: !task.doneTask,
      };
    });

    // we set the new list
    store.setKey("taskList", newTaskList);
  }
);

/**
 * Remove a todo from the list
 */
export const removeTodo = action(
  TodoListStore,
  "remove a todo",
  (store, index: number) => {
    // Retrieve the todo list
    const { todoList } = store.get();

    // Creates a new todo list without the todo at
    // the given index
    const newTodoList = todoList.filter((todo, i) => i !== index);

    // e set the new filtered list
    store.setKey("todoList", newTodoList);
  }
);
