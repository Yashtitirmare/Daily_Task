import React, { useState } from "react";

const Task = ({ title, description, index, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    editTask(index, editedTitle, editedDescription);
    setIsEditing(false);
  };

  return (
    <div className="task">
      {isEditing ? (
        <div>
          <p>{editedTitle}</p>
          <hr />
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
        </div>
      ) : (
        <div>
          <p>{title}</p>
          <hr />
          <span>{description}</span>
        </div>
      )}
      <button onClick={isEditing ? handleUpdate : handleEdit}>
        {isEditing ? "✏" : "🖋"}
      </button>
      <button onClick={() => deleteTask(index)}>-</button>
    </div>
  );
};

export default Task;
