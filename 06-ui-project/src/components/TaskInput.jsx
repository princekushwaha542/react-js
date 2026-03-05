import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    addTask(task);
    setTask("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 justify-center mb-6"
    >
      <input
        type="text"
        placeholder="Enter task..."
        className="border p-2 rounded w-64"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add
      </button>
    </form>
  );
};

export default TaskInput;