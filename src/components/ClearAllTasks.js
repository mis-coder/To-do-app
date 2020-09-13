import React from "react";

const ClearAllTasks = ({ clearTodos }) => {
  return (
    <button className='clear-btn' onClick={clearTodos}>
      Clear All Tasks
    </button>
  );
};

export default ClearAllTasks;
