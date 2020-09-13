import React, { useRef } from "react";

const Item = ({ input, deleteItem, id, setTodos }) => {
  const inputRef = useRef();

  //when todo changes
  const handleChange = (e) => {
    updateTodo(e.target.value);
  };

  //when todo has been edited, update the todos
  const updateTodo = (value) => {
    setTodos((oldTodos) => {
      const itemIndex = oldTodos.findIndex((item, i) => i === id);
      let newTodos = [...oldTodos];
      newTodos[itemIndex] = value;

      return newTodos;
    });
  };

  //when user clicks edit icon, focus comes to the todo
  const editTask = () => {
    inputRef.current.focus();
  };

  return (
    <div className='task'>
      <div className='group1'>
        <textarea
          rows={1}
          ref={inputRef}
          type='text'
          value={input}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className='group2'>
        <i className='fa fa-edit' onClick={editTask}></i>
        <i className='fa fa-trash' onClick={() => deleteItem(id)}></i>
      </div>
    </div>
  );
};

export default Item;
