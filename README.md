# ToDo App

A simple and stylish ToDo list application built with React and Vite, featuring Tailwind CSS for responsive design and a modern dark gradient theme. The app is modularly structured with reusable components for better maintainability.

## Features

- ✅ Add new tasks
- ✏️ Edit existing tasks
- 🗑️ Delete tasks
- ☑️ Mark tasks as completed
- 📱 Responsive design with beautiful gradients and animations
- 🖱️ Drag and drop to reorder tasks
- 🌙 Modern dark gradient theme

## Project Structure

```
src/
├── components/
│   ├── AddTask.jsx       # Component for adding new tasks
│   ├── EditTask.jsx      # Component for editing tasks
│   ├── DeleteTask.jsx    # Component for deleting tasks
│   └── Title.jsx         # Header component
├── pages/
│   ├── Todo.jsx          # Main Todo page component
│   └── Task.jsx          # Individual task component with drag-and-drop
├── App.jsx               # Root component
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

## Usage

- Enter a task in the input field and click the ➕ button or press Enter to add it.
- Click the ✏️ icon to edit a task.
- Click the ☑️ checkbox to mark a task as completed.
- Click the 🗑️ icon to delete a task.
- Drag the ☰ handle to reorder tasks.

## Technologies Used

- **React** - For building the user interface
- **Vite** - For fast development and building
- **Tailwind CSS** - For styling and responsive design
- **@dnd-kit** - For drag-and-drop functionality

## Build for Production

To build the app for production:

```bash
npm run build
```

The built files will be in the `dist` folder, containing optimized HTML, CSS, and JavaScript files ready for deployment.

## Icons

The app features a custom todo icon (📝) in the browser tab for better branding.

## Contributing

Feel free to submit issues and pull requests!
