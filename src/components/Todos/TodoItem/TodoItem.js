import React from "react";

import "./TodoItem.css";

const TodoItem = (props) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="todo-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default TodoItem;
