import React from "react";
import { observer } from "mobx-react-lite";
import Todos from "./components/todo/Todos";
const App = () => {
  return (
    <div className="container d-flex justify-content-center flex-column">
      <h1>Todo</h1>
      <div>
        <Todos />
      </div>
    </div>
  );
};

export default observer(App);
