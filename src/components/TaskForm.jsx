import React from "react";
import { useState } from "react";
import useTaskStore from "../store/taskStore";

export default function TaskForm() {
  // Local state for form fields
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");

  // Add function from Zustand store
  const addTask = useTaskStore((state) => state.addTask);

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") return alert("Task title cannot be empty");

    addTask({
      title,
      priority,
      dueDate,
      notes,
    });

    // Reset form fields
    setTitle("");
    setPriority("medium");
    setDueDate("");
    setNotes("");
  };

  return (
<form
  onSubmit={handleSubmit}
  className="bg-gradient-to-br from-purple-50 to-blue-50 p-5 rounded-xl shadow-md border border-purple-100 flex flex-col gap-4"
>
      <h2 className="text-xl font-semibold text-gray-700">Add New Task</h2>

      {/* Task Title */}
      <input
        type="text"
        placeholder="Task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />

      {/* Priority Selector */}
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      >
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>

      {/* Due Date */}
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />

      {/* Notes */}
      <textarea
        placeholder="Add extra notes (optional)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
      >
        Add Task
      </button>
    </form>
  );
}
