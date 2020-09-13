import React from "react";

const Form = ({ setInput, setTodos, input }) => {
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== "") {
      setTodos((todos) => [...todos, input]);
      setInput("");
    } else {
      alert("Type in something!");
    }
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Add a todo here..'
          className='add-task-input'
          onChange={handleChange}
          value={input}
        />
        <button type='submit' className='add-btn'>
          +
        </button>
      </form>
    </div>
  );
};

export default Form;
