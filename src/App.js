import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import Navbar from "./components/Navbar";
import tasksData from "./tasks.json"; // Import the JSON data

export default function App() {
  const [tasks, setTasks] = useState([]);

  // Initialize tasks from JSON
  useEffect(() => {
    setTasks(tasksData);
  }, []);

  // Add a task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Complete a task
  const completeTask = (taskId) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, completed: true } : task)));
  };

  // Delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <Router>
      <div className='flex flex-col items-center h-screen w-screen'>
        <Navbar />
        <div className='w-11/12 mt-12'>
          <Routes>
            <Route
              path='/'
              element={
                <Home
                  tasks={tasks}
                  onComplete={completeTask}
                  onDelete={deleteTask}
                />
              }
            />
            <Route
              path='/add'
              element={<AddTask addTask={addTask} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
