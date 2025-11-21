# Task Manager App 📝

A modern, responsive task management application built with React, Zustand, and Tailwind CSS. Manage your tasks efficiently with features like filtering, searching, and persistent storage.

![Task Manager App](/app.png)

## 🚀 Features

- ✅ **Add Tasks** - Create new tasks with title, priority, due date, and notes
- ✏️ **Edit Tasks** - Update task details using a modal interface
- 🗑️ **Delete Tasks** - Remove tasks you no longer need
- ✔️ **Mark Complete** - Toggle task completion status
- 🔍 **Search** - Real-time search through task titles
- 🎯 **Filter Tasks** - Filter by status (all/pending/completed) and priority (low/medium/high)
- 📊 **Statistics Dashboard** - View total, completed, pending tasks and completion percentage
- 💾 **Persistent Storage** - Tasks are saved to browser localStorage
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Beautiful gradient design with smooth animations

## 🛠️ Technologies Used

- **React** - Frontend library for building user interfaces
- **Zustand** - Lightweight state management solution
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Vite** - Fast build tool and development server
- **JavaScript (ES6+)** - Modern JavaScript features

## 📦 Installation

1. **Clone the repository**
```bash
   git clone https://github.com/prosperpaul/Task-Managing-app
   cd task-manager-app
```

2. **Install dependencies**
```bash
  pnpm install
```

3. **Start the development server**
```bash
  pnpm run dev
```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📂 Project Structure
```
task-manager-app/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # App header with search bar
│   │   ├── StatsBar.jsx        # Statistics dashboard
│   │   ├── TaskForm.jsx        # Form to add new tasks
│   │   ├── FilterBar.jsx       # Filter tasks by status/priority
│   │   ├── TaskList.jsx        # Display filtered tasks
│   │   ├── TaskItem.jsx        # Individual task card
│   │   └── Modal.jsx           # Modal for editing tasks
│   ├── store/
│   │   └── taskStore.js        # Zustand store for state management
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # Entry point
├── package.json
└── README.md
```

## 🎯 How to Use

### Adding a Task
1. Fill in the task details in the form (title is required)
2. Select priority level
3. Choose a due date (optional)
4. Add notes (optional)
5. Click "Add Task"

### Editing a Task
1. Click the "Edit" button on any task
2. Update the task details in the modal
3. Click "Save Changes"

### Filtering Tasks
- Use the **Status** dropdown to show all, pending, or completed tasks
- Use the **Priority** dropdown to filter by priority level
- Use the **Search bar** to find tasks by title

### Searching Tasks
- Type in the search bar at the top to filter tasks by title
- Clear the search bar to see all tasks again

### Completing Tasks
- Click the checkbox next to any task to mark it as complete/incomplete
- Completed tasks appear with a strikethrough and reduced opacity

### Deleting Tasks
- Click the "Delete" button on any task to remove it permanently

## 💡 Key Learnings

This project helped me learn:
- **State Management** with Zustand
- **React Hooks** (useState, useEffect)
- **Component Architecture** and reusability
- **Event Handling** and propagation
- **Local Storage** for data persistence
- **Responsive Design** with Tailwind CSS
- **Form Handling** and validation
- **Modal Implementation** and user interactions

## 🚧 Challenges Faced

- Understanding Zustand's state management pattern
- Implementing proper event propagation in modals
- Coordinating multiple filters (search, status, priority) working together
- Managing form state and pre-filling modal with task data
- Debugging search functionality with filter interactions

## 🔮 Future Enhancements

- [ ] Task categories/tags
- [ ] Drag and drop to reorder tasks
- [ ] Dark mode toggle
- [ ] Due date warnings and overdue indicators
- [ ] Sort tasks by date, priority, or alphabetically
- [ ] Export/import tasks
- [ ] Subtasks/checklists
- [ ] Keyboard shortcuts
- [ ] Task analytics and productivity charts
- [ ] User authentication

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/prosperpaul/task-manager-app/issues).


## 🙏 Acknowledgments

- Thanks to the React community for excellent documentation
- Zustand for making state management simple
- Tailwind CSS for beautiful, utility-first styling

