import { observer } from "mobx-react-lite";
import React from "react";
import todos from "../../store/todoStore";

const Todo = () => {
  return (
    <ul className="list-unstyle w-25">
      {todos?.todos?.map((item, index) => {
        return (
          <li className="d-flex align-items-center justify-content-between" key={index}>
            <input
              type="checkbox"
              checked={item?.isChecked}
              onChange={() => todos?.completed(item.id)}
            />
            <p
              className={item?.isChecked ? "text-decoration-line-through m-0" : "m-0"}
            >
              {item?.name}
            </p>

            <button className="btn btn-danger" onClick={() => todos?.delete(item?.id)}>delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default observer(Todo);
