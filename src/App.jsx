import React from "react"
import { useState, useEffect } from "react"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import FilterButtons from "./components/FilterButtons"  
     

export default function App() {

   //useState is how React stores data inside a component
const[tasks, setTasks]= useState([]);
const [filter, setFilter] = useState("all");

//Load saved tasks from localStorage when app starts
useEffect(()=>{
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  setTasks(savedTasks);
}, []);

//Save tasks to localStorage anytime they change
useEffect(()=>{
  localStorage.setItem("tasks", JSON.stringify(tasks))
}, [tasks])

 //Add a new task
const addTask = (newTask) =>{
  setTasks([...tasks, newTask]);
}

// Delete a task
const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id !==id))
}

// Edit a task

const editTask = (id, updatedTask) =>{
  setTasks(tasks.map((task)=> (task.id === id ? updatedTask : task)))
}

//Toggle completed / uncompleted
const toggleComplete  = (id) => {
  setTasks(
    tasks.map((task) => task.id === id ? {...task, completed: !task.completed} : task)
  )
}


 //Filter the tasks before showing them
const filteredTasks = tasks.filter((task)=>{
  if(filter === "active") return !task.completed
  if (filter === "completed") return task.completed;return true;
})

return(
   <div className ="min-h-screen bg-gray-900 text-gray-100 p-6">
    <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-2xl shadow-lg">
      <h1 className='text-3xl font-bold text-center mb-6 text-cyan-400'>Task Manager</h1>
      
    {/* Task form component */}
      <TaskForm addTask={addTask} />
       
      {/* Filter buttons */}
      <FilterButtons setFilter ={setFilter} activeFilter ={filter} />

      {/* Task list */}
      <TaskList
      task={filteredTasks}
      deleteTask={deleteTask}
      editTask ={editTask}
      toggleComplete = {toggleComplete}
      />
    </div>
   </div>
)
















}

