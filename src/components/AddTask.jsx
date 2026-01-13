import React from "react";

function AddTask({ input, setInput, addTodo }) {
  return (
    <div className="flex mb-6">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
        onKeyPress={(e) => e.key === "Enter" && addTodo()}
        className="flex-1 h-12 px-4 text-white bg-transparent border-2 border-white/20 rounded-l-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-white/70"
      />
      <button
        onClick={addTodo}
        className="h-12 px-4 sm:px-6 ml-2 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-r-lg transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg">
        ➕
      </button>
    </div>
  );
}

export default AddTask;
