
import React from "react";import useTaskStore from "../store/taskStore";
import TaskItem from "./TaskItem";

export default function TaskList() {
  // Get all the data we need from the store separately
  const tasks = useTaskStore((state) => state.tasks);
  const searchQuery = useTaskStore((state) => state.searchQuery);
  const filter = useTaskStore((state) => state.filter);

  // Do the filtering here in the component
  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((task) => {
      if (filter.status === "completed") return task.completed;
      if (filter.status === "pending") return !task.completed;
      return true;
    })
    .filter((task) => {
      if (filter.priority === "all") return true;
      return task.priority === filter.priority;
    });

  // Empty state
  if (filteredTasks.length === 0) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-md text-center">
        <p className="text-gray-500 text-lg">No tasks found. Add one to get started!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}