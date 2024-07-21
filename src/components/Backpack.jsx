import React from 'react';

const Backpack = ({ items, onDelete }) => {
  return (
    <div>
      <h2>My Backpack</h2>
      
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Backpack;
