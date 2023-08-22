/* eslint-disable @typescript-eslint/no-unused-vars */

import { AddNewTodo } from "./components/AddNewTodo";
import { TodoList } from "./components/TodoList";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";

export function App() {
  return (
    <ReduxProvider store={store}>
      <TodoList />
      <AddNewTodo />
    </ReduxProvider>
  );
}
