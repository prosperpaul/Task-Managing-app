import React from 'react'
import TaskForm from './components/TaskForm.jsx'
import TaskList from './components/TaskList.jsx'    
// import TaskItem from './components/TaskItem' // You don't need this here
import StatsBar from './components/StatsBar.jsx'
// import Modal from './components/Modal.jsx'
import FilterBar from './components/FilterBar.jsx'
import Header from './components/Header.jsx'
// Remove this line - you don't import the store in App
// import  UseTaskStore  from './store/taskStore.js'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <Header/>
        <StatsBar/>
        <TaskForm/>
        <FilterBar/>
        <TaskList/>
        
        {/* <Modal/> */}
      </div>
    </div>
  )
}

export default App