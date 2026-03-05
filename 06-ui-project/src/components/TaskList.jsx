import React from "react";

const TaskList = ({ tasks, deleteTask, toggleTask }) => {
  return (
    <div className="max-w-md mx-auto">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex justify-between items-center bg-white p-3 rounded shadow mb-2"
        >
          <span
            onClick={() => toggleTask(task.id)}
            className={`cursor-pointer ${
              task.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {task.text}
          </span>

          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-500"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;