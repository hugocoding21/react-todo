import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputText from "../components/Form/InputText";
import Button from "../components/Form/Button";

const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title) {
      const newTask = {
        id: Date.now(),
        title: title,
        completed: false,
      };
      addTask(newTask);
      setTitle("");
      navigate("/");
    }
  };

  return (
    <form
      className='flex items-end gap-4'
      onSubmit={handleSubmit}>
      <InputText
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button
        type='submit'
        label='Add Task'
        className='mb-2'
      />
    </form>
  );
};

export default AddTask;
