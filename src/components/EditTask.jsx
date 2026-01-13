import React from "react";

function EditTask({ editingText, setEditingText, saveEdit, cancelEdit }) {
  return (
    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
      <input
        value={editingText}
        onChange={(e) => setEditingText(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && saveEdit()}
        className="flex-1 px-3 py-2 text-white bg-transparent border border-white/20 rounded focus:outline-none focus:border-blue-500"
      />
      <div className="flex space-x-2">
        <button
          onClick={saveEdit}
          className="px-3 sm:px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded transition-colors">
          💾
        </button>
        <button
          onClick={cancelEdit}
          className="px-3 sm:px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded transition-colors">
          ❌
        </button>
      </div>
    </div>
  );
}

export default EditTask;
