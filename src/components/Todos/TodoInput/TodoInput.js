import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./TodoInput.css";

const TodoInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const todoInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddTodo(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Todo List</label>
        <input type="text" onChange={todoInputChangeHandler} />
      </div>
      <Button type="submit">Add Todo</Button>
    </form>
  );
};

export default TodoInput;
