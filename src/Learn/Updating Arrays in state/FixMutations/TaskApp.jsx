import { useState } from "react";
import AddTodo from "./AddTodo.jsx";
import TaskList from "./TaskList.jsx";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    /*  todos.push({
      id: nextId++,
      title: title,
      done: false,
    }); */
    setTodos([...todos, { id: nextId++, title: title, done: false }]);
  }

  function handleChangeTodo(nextTodo) {
    //nextTodo is the updated Todo
    /*     const todo = todos.find((t) => t.id === nextTodo.id);
    todo.title = nextTodo.title;
    todo.done = nextTodo.done; */
    setTodos(
      todos.map((todo) => {
        if (todo.id === nextTodo.id) {
          return nextTodo;
        } else {
          return todo;
        }
      })
    );
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
