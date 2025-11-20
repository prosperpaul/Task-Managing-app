
import React from "react";
import { useState } from "react";
import useTaskStore from "../store/taskStore";
import Modal from "./Modal";  // Import the modal

export default function TaskItem({ task }) {
  const [expanded, setExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);  // Add this

  const toggleComplete = useTaskStore((state) => state.toggleComplete);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  const priorityColor = {
    low: "bg-green-200 text-green-700",
    medium: "bg-yellow-200 text-yellow-700",
    high: "bg-red-200 text-red-700",
  };

  return (
    <>
      <div
        className={`p-4 bg-white rounded-xl shadow flex flex-col gap-3 border-l-4 ${
          task.completed ? "border-green-500 opacity-70" : "border-blue-500"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
              className="w-5 h-5 cursor-pointer"
            />

            <h3
              className={`text-lg font-medium ${
                task.completed ? "line-through text-gray-400" : "text-gray-700"
              }`}
            >
              {task.title}
            </h3>
          </div>

          <span
            className={`px-3 py-1 text-sm rounded-full ${
              priorityColor[task.priority]
            }`}
          >
            {task.priority}
          </span>
        </div>

        {task.dueDate && (
          <p className="text-sm text-gray-500">
            Due: <span className="font-medium">{task.dueDate}</span>
          </p>
        )}

        {task.notes && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-blue-600 text-sm underline w-fit"
          >
            {expanded ? "Hide notes" : "Show notes"}
          </button>
        )}

        {expanded && task.notes && (
          <p className="text-gray-600 bg-gray-50 p-3 rounded-lg border text-sm">
            {task.notes}
          </p>
        )}

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setIsModalOpen(true)}  // Open modal
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-3 rounded-lg"
          >
            Edit
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="bg-red-500 hover:bg-red-600 text-white text-sm py-1 px-3 rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        task={task}
      />
    </>
  );
}