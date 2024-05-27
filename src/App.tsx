import React, { useEffect, useState } from "react";
import "./components/Trip.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import ItemsList from "./components/ItemsList";
import Footer from "./components/Footer";

function App() {
  interface Item {
    item: string;
    number: number;
    packed: boolean;
    id: number;
  }
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (newItem: Item) => {
    setItems((items) => [...items, newItem]);
    // console.log(items);
  };

  const deleteItem = (id: number) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const updateItem = (id: number) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
    console.log(id);
  };
  return (
    <div className="app">
      <Logo />
      <Form onsubmit={addItem} />
      <ItemsList
        listItems={items}
        onDelete={deleteItem}
        onUpdate={updateItem}
      />
      <Footer items={items}></Footer>
    </div>
  );
}

export default App;
