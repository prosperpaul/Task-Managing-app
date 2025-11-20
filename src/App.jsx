import React from 'react'
import TaskForm from './components/TaskForm.jsx'
import TaskList from './components/TaskList.jsx'    
// import TaskItem from './components/TaskItem' // You don't need this here
import StatsBar from './components/StatsBar.jsx'
// import Modal from './components/Modal.jsx'
import FilterBar from './components/FilterBar.jsx'
// Remove this line - you don't import the store in App
// import  UseTaskStore  from './store/taskStore.js'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Task Manager</h1>
        <TaskForm/>
        <FilterBar/>
        <StatsBar/>
        <TaskList/>
        {/* <Modal/> */}
      </div>
    </div>
  )
}

export default App