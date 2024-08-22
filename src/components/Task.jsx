import React from "react";
import Button from "../components/Form/Button";

const Task = ({ task, onComplete, onDelete }) => {
  return (
    <tr className={`${task.completed ? "bg-slate-100" : "bg-white"}`}>
      <td className={`p-4 ${task.completed ? "line-through text-gray-500" : ""}`}>{task.title}</td>
      <td className='p-4'>{task.completed ? "done" : "doing it"}</td>
      <td className='p-4 flex gap-2'>
        {!task.completed && (
          <Button
            label='Complete'
            onClick={onComplete}
            className='bg-green-500 hover:bg-green-600'
          />
        )}

        <Button
          label='Delete'
          onClick={onDelete}
          className='bg-red-500 hover:bg-red-600'
        />
      </td>
    </tr>
  );
};

export default Task;
