import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import Todo from "./Todo";
import todos from "../../store/todoStore";
import { v4 as uuidv4 } from "uuid";
const Todos = () => {
  const [addTodo, setAddTodo] = useState("");
  const handleAdd = (evt) => {
    if (evt.keyCode == 13) {
      let newID = uuidv4();
      todos.addTodo({
        name: addTodo,
        id: newID,
        isChecked: false,
      });

      setAddTodo("")
    }
  };
  return (
    <>
      <input
        type="text"
        value={addTodo}
        onKeyUp={handleAdd}
        onChange={(e) => setAddTodo(e.target.value)}
      />

      <Todo />
    </>
  );
};

export default observer(Todos);
