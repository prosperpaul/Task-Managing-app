import React from 'react'
import TaskForm from '../components/TaskForm.jsx'
import TaskList from '../components/TaskList.jsx'    
import FilterBar from '../components/FilterBar.jsx'
import StatsBar from '../components/StatsBar.jsx'
import Header from '../components/Header.jsx'

export default function Dashboard() {
  return (
    // In App.jsx (or Dashboard.jsx):
<div className="min-h-screen bg-gray-900-100 via-purple-50 to-pink-50 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <Header/>
        <StatsBar/>
        <TaskForm/>
        <FilterBar/>
        <TaskList/>
      </div>
    </div>
  )
}