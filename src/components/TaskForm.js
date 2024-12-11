import React, { useState } from "react";
import { toast } from "react-toastify"; // Import toast for notifications
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

const TaskForm = ({ setTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To Do");

  const addTask = () => {
    if (title.trim() === "" || description.trim() === "") {
      toast.error("Both title and description are required!"); // Show error if fields are empty
      return;
    }

    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: prevTasks.length + 1,
        title,
        description,
        status,
      },
    ]);

    toast.success("Task added successfully!"); // Show success notification
    setTitle("");
    setDescription("");
  };

  return (
    <div className="w-[90%] mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add New Task</h2>
      <div className="w-full mx-auto bg-white flex justify-evenly">
        <input
          className="rounded h-9 w-[200px] border-[1px] shadow-lg pl-2 bg-white"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border-[1px] shadow-lg rounded h-9 w-[200px] pl-2 bg-white"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded h-9 bg-white border-[1px] shadow-lg pl-2"
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <button
          onClick={addTask}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
