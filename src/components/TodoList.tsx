/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSelector } from "react-redux";

export function TodoList() {
  const todos = useSelector((store) => {
    return store.todo;
  });

  console.log(todos);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}
