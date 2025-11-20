import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTaskStore = create(
  persist(
    (set, get) => ({
      tasks: [],

      // Add a new task
      addTask: (task) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: Date.now(),
              title: task.title,
              notes: task.notes || "",
              priority: task.priority,
              dueDate: task.dueDate || "",
              completed: false,
              createdAt: new Date().toISOString(),
            },
          ],
        })),

      // Toggle task completion
      toggleComplete: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        })),

      // Delete a task
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      // Edit task
      editTask: (id, updatedFields) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, ...updatedFields } : task
          ),
        })),

      // Search tasks
      searchQuery: "",
      setSearchQuery: (query) => set({ searchQuery: query }),

      // Filter tasks by priority, status
      filter: {
        status: "all",
        priority: "all",
      },

      setFilter: (filterUpdate) =>
        set((state) => ({
          filter: { ...state.filter, ...filterUpdate },
        })),
    }),
    {
      name: "task-storage",
    }
  )
);

export default useTaskStore;