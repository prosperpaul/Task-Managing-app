import React from 'react'
import TaskForm from './components/TaskForm.jsx'
// import TaskList from './components/TaskList.jsx'    
import TaskItem from './components/TaskItem'
// import StatsBar from './components/StatsBar.jsx'
// import Modal from './components/Modal.jsx'
// import FilterBar from './components/FilterBar.jsx'
import  UseTaskStore  from './store/taskStore.js'
const App = () => {
  return (
    <div>
      <TaskForm/>
      {/* <FilterBar/>
      <StatsBar/>
      <TaskList/>
      <Modal/> */}
      < UseTaskStore/>
    </div>
  )
}

export default App
