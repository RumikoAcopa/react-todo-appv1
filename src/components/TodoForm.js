import React, { useState } from "react";

function TodoForm() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // props.onSubmit({
    //   id: Math.floor(Math.random() * 10000),
    //   text: input
    // });

    setInput('');
  };
  //using props because we want to pass
  //generates random number in a 10k range, chances of getting the same id will be less.
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add a todo'
        value={input}
        name='text'
        className='todo-input'
        onChange={handleChange}
      />
      <button className='todo-button'>Add todo</button>
    </form>
  );
}

export default TodoForm;
