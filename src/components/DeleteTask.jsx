import React from "react";

function DeleteTask({ onDelete }) {
  return (
    <button
      onClick={onDelete}
      className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
      title="Delete">
      🗑️
    </button>
  );
}

export default DeleteTask;
