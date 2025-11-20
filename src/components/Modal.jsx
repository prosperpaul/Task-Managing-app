import React from "react";
import { useState, useEffect } from "react";
import useTaskStore from "../store/taskStore";

export default function Modal({ isOpen, onClose, task }) {
  // Local state for form fields
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");

  // Get editTask function from store
  const editTask = useTaskStore((state) => state.editTask);

  // Pre-fill form when task changes
  useEffect(() => {
    if (task) {
      setTitle(task.title || "");
      setPriority(task.priority || "medium");
      setDueDate(task.dueDate || "");
      setNotes(task.notes || "");
    }
  }, [task]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") return alert("Task title cannot be empty");

    // Update the task in the store
    editTask(task.id, {
      title,
      priority,
      dueDate,
      notes,
    });

    // Close the modal
    onClose();
  };

  // Don't render if modal is not open
  if (!isOpen) return null;

  return (
    // Backdrop (dark overlay)
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      {/* Modal Content */}
      <div
        className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Edit Task</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            rows="3"
          />

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 rounded-lg font-medium transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}