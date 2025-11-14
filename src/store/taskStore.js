import { create } from "zustand";
import { persist } from "zustand/middleware";

export default function taskStore() {create(
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
              description: task.description,
              priority: task.priority,
              category: task.category,
              completed: false,
              createdAt: new Date().toISOString(),
            },
          ],
        })),

      // Toggle task completion
      toggleTask: (id) =>
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

      // Filter tasks by category, priority, status
      filter: {
        status: "all",
        priority: "all",
        category: "all",
      },

      setFilter: (filter) =>
        set((state) => ({
          filter: { ...state.filter, ...filter },
        })),

      // Computed filtered tasks
      filteredTasks: () => {
        const { tasks, searchQuery, filter } = get();

        return tasks
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
          })
          .filter((task) => {
            if (filter.category === "all") return true;
            return task.category === filter.category;
          });
      },
    }),
    {
      name: "task-storage", // store name in localStorage
    }
  )
)};
