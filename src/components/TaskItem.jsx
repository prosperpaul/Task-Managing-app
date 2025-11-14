
import { useState } from "react";
import useTaskStore from "../store/taskStore";

export default function TaskItem({ task }) {
  // Expand state for showing/hiding notes
  const [expanded, setExpanded] = useState(false);

  // Zustand functions
  const toggleComplete = useTaskStore((state) => state.toggleComplete);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  // Priority color styling
  const priorityColor = {
    low: "bg-green-200 text-green-700",
    medium: "bg-yellow-200 text-yellow-700",
    high: "bg-red-200 text-red-700",
  };

  return (
    <div
      className={`p-4 bg-white rounded-xl shadow flex flex-col gap-3 border-l-4 ${
        task.completed ? "border-green-500 opacity-70" : "border-blue-500"
      }`}
    >
      {/* Top row: checkbox + title + priority */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Mark complete */}
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
            className="w-5 h-5 cursor-pointer"
          />

          {/* Title */}
          <h3
            className={`text-lg font-medium ${
              task.completed ? "line-through text-gray-400" : "text-gray-700"
            }`}
          >
            {task.title}
          </h3>
        </div>

        {/* Priority badge */}
        <span
          className={`px-3 py-1 text-sm rounded-full ${
            priorityColor[task.priority]
          }`}
        >
          {task.priority}
        </span>
      </div>

      {/* Due date */}
      {task.dueDate && (
        <p className="text-sm text-gray-500">
          Due: <span className="font-medium">{task.dueDate}</span>
        </p>
      )}

      {/* Notes toggle */}
      {task.notes && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-600 text-sm underline w-fit"
        >
          {expanded ? "Hide notes" : "Show notes"}
        </button>
      )}

      {/* Notes content */}
      {expanded && task.notes && (
        <p className="text-gray-600 bg-gray-50 p-3 rounded-lg border text-sm">
          {task.notes}
        </p>
      )}

      {/* Delete button */}
      <button
        onClick={() => deleteTask(task.id)}
        className="bg-red-500 hover:bg-red-600 text-white text-sm py-1 px-3 rounded-lg w-fit"
      >
        Delete
      </button>
    </div>
  );
}
