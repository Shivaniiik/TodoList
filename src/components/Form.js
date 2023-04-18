import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, handleEditSubmit } from "../redux/todoapp/actions";

export const Form = ({ editFormVisibility, editTodo }) => {
  const dispatch = useDispatch();

  const [todoValue, setTodoValue] = useState("");

  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    setEditValue(editTodo.todo);
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      todo: todoValue,
      completed: false,
    };
    setTodoValue("");
    dispatch(addTodo(todoObj));
  };

  const editSubmit = (e) => {
    e.preventDefault();
    let editedObj = {
      id: editTodo.id,
      todo: editValue,
      completed: false,
    };
    dispatch(handleEditSubmit(editedObj));
  };

  return (
    <>
      {editFormVisibility === false ? (
        <form onSubmit={handleSubmit}>
          <label style={{ alignItems: "center" }}>Add your todo-items</label>
          <div style={{ marginTop: 20 }}>
            <input
              style={{ borderColor: "black", padding: 5 }}
              type="text"
              required
              value={todoValue}
              onChange={(e) => setTodoValue(e.target.value)}
            />
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                fontWeight: "bold",
                margin: 10,
              }}
            >
              ADD
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={editSubmit}>
          <label>Update your todo-items</label>
          <div style={{ marginTop: 20 }}>
            <input
              type="text"
              required
              value={editValue || ""}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "black",
                color: "white",
                fontWeight: "bold",
                margin: 10,
              }}
            >
              UPDATE
            </button>
          </div>
        </form>
      )}
    </>
  );
};
