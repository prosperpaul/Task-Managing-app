import React from "react";  
import useTaskStore from "../store/taskStore";

export default function Header(){
   // Get search query and the function to update it
const searchQuery = useTaskStore((state)=> state.searchQuery);
const setSearchQuery = useTaskStore((state) => state.setSearchQuery)


return(
  <header className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
       
        {/* App Title */}
        <div className=" p-4 text-center">
          <h1 className="text-5xl font-bold text-white">Task Manager</h1>
          <p className="text-blue-100 text-xl mt-2 ">Stay organised, get things done</p>
        </div>

          {/* Search Bar */}
          <div className="flex-1 md:max-w-md mb-2">
            <input type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
            className= "w-full px-4 py-2 rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/20 transition "
            />
          </div>
    </div>

  </header>
)

}