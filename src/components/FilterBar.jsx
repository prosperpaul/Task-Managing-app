import React from 'react';
import useTaskStore from '../store/taskStore';


export default function FilterBar(){
   // Get current filter from store
  const filter = useTaskStore((state) => state.filter)

   // Get the function to update filters
  const setFilter = useTaskStore((state) => state.setFilter)

  return(
<div className="bg-blue-50 p-5 rounded-xl shadow-md border border-blue-200 flex flex-col md:flex-row gap-4">
      <h3 className='text-lg font-semibold text-gray-700'>Filters:</h3>

            {/* Status Filter */}
      <div className='flex flex-col gap-2'>
        <label className="text-sm font-medium text-gray-600">Status</label>
        <select value ={filter.status}
        onChange = {(e) => setFilter({status: e.target.value})} className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" >
          <option value="all">All Tasks</option>
            <option value="Pending">Pending </option>
              <option value="completed">Completed </option>        
        </select>
      </div>

      {/* Priority Filter */}
      <div className='flex flex-col gap-2'>
        <label className="text-sm font-meduim text-gray-600">Priority</label>
       <select value={filter.priority}
       onChange={(e) => setFilter({ priority: e.target.value})}
       className='border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
       >
        <option value="all">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
       </select>
      </div>

    </div>
  )
}