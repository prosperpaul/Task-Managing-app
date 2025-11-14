import React, {useState} from "react"

export default function TaskForm ({ addTask }){
   //Local state for the form fields
   const[title, setTitle] = useState('')
   const[priority, setPriority] = useState('meduim')
   const[deadline, setDeadline] = useState('')

   //Helper to reset the form after adding
   function clearForm(){
    setTitle('')
    setPriority("meduim")
    setDeadline("")
   }

   // Called when user submits the form (click button or press Enter)
function handleSubmit(e){
  e.preventDafault()   // prevent page reload (default form behaviour)

  const trimmed = title.trim()
  if(!trimmed){
     // simple validation: require a non-empty title
      // you could show an error message instead of alert
      alert("Please enter a task name.")
      return
  }
  
  //Build the task object shape expected by App.jsx
const newTask = {
  id: Date.now().toString(36),
  title: trimmed,
  priority,
  deadline: deadline || null,
  completed: false,
  createAt: new Date().toISOString()
}

 // Call parent-provided function to add the task to app state
  addTask(newTask)

  // Clear the inputs and focus the title for faster entry
  clearForm()

  // move focus back to title input for convenience:
  const el = document.getElementById("task-title-input")
  if (el) el.focus()
}

return (
<form onSubmit={handleSubmit} className="mb-4">
      <div className="flex gap-2">
        {/* Title input */}
        <input
          id="task-title-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-3 py-2 rounded-lg bg-gray-700 placeholder-gray-400 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        {/* Priority select */}
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="px-3 py-2 rounded-lg bg-gray-700 text-gray-100"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        {/* Deadline */}
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="px-3 py-2 rounded-lg bg-gray-700 text-gray-100"
        />

        {/* Submit button */}
        <button
          type="submit"
          className="bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2 rounded-lg font-semibold hover:opacity-95"
        >
          Add
        </button>
      </div>
    </form>
  );
}