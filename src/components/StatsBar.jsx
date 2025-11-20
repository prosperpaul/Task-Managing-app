import React from "react";
import useTaskStore from "../store/taskStore";


export default function StatsBar(){

   // Get tasks from store
   const tasks = useTaskStore((state) => state.tasks);

   // Calculate statistics
   const totalTasks = tasks.length;
   const completedTasks = tasks.filter((task)=> task.completed).length;
   const pendingTasks = tasks.filter((task)=> !task.completed).length;
   const completionPercentage =totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) :0;

   return(
     <div className="bg-white p-5 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Task Statistics</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {/* Total Tasks */}
          <div className="bg-blue-100 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold tex-blue-600">{totalTasks}</p>
            <p className="text-sm text-gray-600">Total Tasks</p>
          </div>

              {/* Completed Tasks */}

              <div className="bg-green-100 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-green-600">{completedTasks}</p>
              </div>

                {/* Pending Tasks */}
                <div className="bg-yellow-100 p-4 round-lg text-center">
                  <p className="text-3xl font-bold text-yellow-600">{pendingTasks}</p>
                  <p className="text-sm text-gray-600">pending</p>
                </div>

                 {/* Completion Percentage */}
                 <div className="bg-purple-100 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-purple-600">{completionPercentage}</p>
                  <p className="text-sm text-gray-600">Completed</p>
                 </div>

      </div>
     </div>
   )
}