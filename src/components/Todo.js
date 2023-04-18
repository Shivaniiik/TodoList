import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../redux/todoapp/actions";

export default function Todo({ handleEditClick, editFormVisibility }) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationsReducer);

  return todos.map((todo) => (
      <div key={todo.id} >
        <div style={{display: "inline-block", borderBottomWidth: 2, borderBottomColor: 'black', margingTop: 10,}} >
          <text
            style={
              todo.completed === true
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            {todo.todo}
          </text>
          <button
            type="button"
            style={{backgroundColor: 'green', color: 'black',fontWeight: 'bold', marginLeft: 20}}
            onClick={() => handleEditClick(todo)}
          >
            EDIT
          </button>
          <button
            type="button"
            style={{backgroundColor: 'red', fontWeight: 'bold' ,margin: 10}}
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            X
          </button>
        </div>
      </div>
  ));
}
