import React, { useRef } from "react";
import classes from './NewTodo.module.css'

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredTodo = todoInputRef.current!.value;

    if (enteredTodo.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredTodo);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
