import { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Title from "../components/Title";
import AddTask from "../components/AddTask";
import Task from "./Task";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: input.trim(), completed: false },
      ]);
      setInput("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEdit = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  };

  const saveEdit = () => {
    if (editingText.trim()) {
      setTodos(
        todos.map((todo) =>
          todo.id === editingId ? { ...todo, text: editingText.trim() } : todo
        )
      );
      setEditingId(null);
      setEditingText("");
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingText("");
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setTodos((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <>
      <Title />
      <div className="w-full max-w-lg p-4 sm:p-6 bg-gradient-to-br bg-slate-900 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
        <AddTask
          input={input}
          setInput={setInput}
          addTodo={addTodo}
        />
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}>
          <SortableContext
            items={todos.map((todo) => todo.id)}
            strategy={verticalListSortingStrategy}>
            <div className="space-y-2">
              {todos.length === 0 ? (
                <div className="text-center py-8 text-white">
                  <div className="text-3xl sm:text-4xl mb-2">📋</div>
                  <p>No tasks yet. Add one above!</p>
                </div>
              ) : (
                todos.map((todo) => (
                  <Task
                    key={todo.id}
                    todo={todo}
                    editingId={editingId}
                    editingText={editingText}
                    setEditingText={setEditingText}
                    saveEdit={saveEdit}
                    cancelEdit={cancelEdit}
                    startEdit={startEdit}
                    deleteTodo={deleteTodo}
                    toggleComplete={toggleComplete}
                  />
                ))
              )}
            </div>
          </SortableContext>
        </DndContext>
        {todos.length > 0 && (
          <div className="mt-6 text-center text-sm text-white">
            {todos.filter((t) => t.completed).length} of {todos.length} tasks
            completed
          </div>
        )}
      </div>
    </>
  );
}

export default Todo;
