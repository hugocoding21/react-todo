import React from "react";
import Task from "../components/Task";

const Home = ({ tasks, onComplete, onDelete }) => {
  return (
    <div>
      <h1 className='text-2xl font-semibold mb-4'>Tasks</h1>
      <ul className='list-none p-0'>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onComplete={() => onComplete(task.id)}
            onDelete={() => onDelete(task.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;
