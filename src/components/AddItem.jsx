import React, { useState } from 'react';

const AddItem = ({ onAdd }) => {
  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.trim()) {
      onAdd(item);
      setItem('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Add an item"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddItem;
