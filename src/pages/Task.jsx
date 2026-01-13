import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import EditTask from "../components/EditTask";
import DeleteTask from "../components/DeleteTask";

function Task({
  todo,
  editingId,
  editingText,
  setEditingText,
  saveEdit,
  cancelEdit,
  startEdit,
  deleteTodo,
  toggleComplete,
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: todo.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="bg-white/10 rounded-lg p-3 sm:p-2 border border-white/20 hover:shadow-md transition-all duration-200">
      {editingId === todo.id ? (
        <EditTask
          editingText={editingText}
          setEditingText={setEditingText}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
        />
      ) : (
        <div className="flex items-center space-x-3">
          <div
            {...listeners}
            className="cursor-grab">
            ☰
          </div>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <span
            className={`flex-1 text-base sm:text-lg ${
              todo.completed ? "line-through text-white/50" : "text-white"
            }`}>
            {todo.text}
          </span>
          <button
            onClick={() => startEdit(todo.id, todo.text)}
            className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-full transition-colors"
            title="Edit">
            ✏️
          </button>
          <DeleteTask onDelete={() => deleteTodo(todo.id)} />
        </div>
      )}
    </div>
  );
}

export default Task;
