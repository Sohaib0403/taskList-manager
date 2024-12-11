import React, { useState } from "react";
import { toast } from "react-toastify"; // Import the toast function
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast notifications

const TaskTable = ({ tasks, setTasks }) => {
  // State to handle selected filter status
  const [filterStatus, setFilterStatus] = useState("All");

  // Function to handle status change
  const handleStatusChange = (id, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
    toast.success("Task status updated!"); // Show success notification
  };

  // Function to handle deletion
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    toast.error("Task deleted!"); // Show error notification on task deletion
  };

  // Function to handle filter status change
  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  // Filter tasks based on selected status
  const filteredTasks = filterStatus === "All" ? tasks : tasks.filter(task => task.status === filterStatus);

  return (
    <div>
      {/* Filter dropdown */}
      <div className="mb-4 mt-4">
        <label htmlFor="filterStatus" className="mr-2">Filter by Status:</label>
        <select
          id="filterStatus"
          className="px-2 py-1 border rounded"
          value={filterStatus}
          onChange={handleFilterChange}
        >
          <option value="All">All</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>

      {/* Task Table */}
      <table className="min-w-full table-auto border-collapse border border-gray-200 shadow-lg">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Task ID</th>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task) => (
            <tr key={task.id} className="text-gray-700 hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 text-center">{task.id}</td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  className="w-full px-2 py-1 border rounded"
                  defaultValue={task.title}
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  className="w-full px-2 py-1 border rounded"
                  defaultValue={task.description}
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <select
                  className="w-full px-2 py-1 border rounded"
                  value={task.status} // Ensure the value is tied to the task's status
                  onChange={(e) => handleStatusChange(task.id, e.target.value)} // Handle status change
                >
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
