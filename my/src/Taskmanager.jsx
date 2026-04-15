import React, { useState } from "react";

export default function TaskList() {

  const [tasks, setTasks] = useState([
    { name: "Task 1", status: "done" },
    { name: "Task 2", status: "not done" },
    { name: "Task 3", status: "done" }
  ]);

  // Function to toggle status
  const toggleStatus = (index) => {
    const updatedTasks = [...tasks];

    updatedTasks[index].status =
      updatedTasks[index].status === "done" ? "not done" : "done";

    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Employee Task Management</h1>

      {tasks.map((task, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <span>
            {task.name} - <b>{task.status}</b>
          </span>

          <button
            onClick={() => toggleStatus(index)}
            style={{ marginLeft: "10px" }}
          >
            Toggle Status
          </button>
        </div>
      ))}
    </div>
  );
}