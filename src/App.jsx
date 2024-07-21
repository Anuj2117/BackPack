import React, { useState, useEffect } from 'react';
import AddItem from './components/AddItem.jsx';
import Backpack from './components/Backpack.jsx';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('backpackItems'));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('backpackItems', JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    setItems([...items, item]);
    alert("New item added")
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
    alert("Item is deleted");
  };

  return (
    <div className="App">
      <h1>Backpack App</h1>
      <AddItem onAdd={addItem} />
      <Backpack items={items} onDelete={deleteItem} />
      <h3> Total Itmes in my bag: {items.length}</h3>
    </div>
  );
};

export default App;
