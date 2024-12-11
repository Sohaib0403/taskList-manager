
import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskTable from "./components/TaskTable";
import { ToastContainer } from "react-toastify"; // Import the ToastContainer

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the placeholder API
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        const formattedTasks = data.slice(0, 20).map((task) => ({
          id: task.id,
          title: task.title,
          description: "Sample description", // Add a sample description
          status: task.completed ? "Done" : "To Do", // Map 'completed' to status
        }));
        setTasks(formattedTasks);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 ">
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 ">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Task List Manager</h1>
       <TaskForm setTasks={setTasks} />
      <TaskTable tasks={tasks} setTasks={setTasks} />
      <ToastContainer /> {/* Add the ToastContainer here */}
    </div>
    </div>
  );
};

export default App;
