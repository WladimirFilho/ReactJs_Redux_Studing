import { FormEvent, useState } from "react";

export function AddNewTodo() {
  const [newTodo, setNewTodo] = useState("");

  function handleNewTodo(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <>
      <form action="" onSubmit={handleNewTodo}>
        <input
          type="text"
          placeholder="todo list"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button type="submit">Add new todo</button>
      </form>
    </>
  );
}
