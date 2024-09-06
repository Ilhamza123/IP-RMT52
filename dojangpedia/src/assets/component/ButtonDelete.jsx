import React from 'react';

const ButtonDelete = ({ id, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <button onClick={handleDelete} className="btn btn-danger btn-sm">
      Hapus
    </button>
  );
};

export default ButtonDelete;