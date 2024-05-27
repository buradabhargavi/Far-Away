import React, { useState } from "react";
import Items from "./Items";
import "./Trip.css";

interface Item {
  id: number;
  item: string;
  number: number;
  packed: boolean;
}

interface Props {
  listItems: Item[];
  onDelete: (id: number) => void;
  onUpdate: (id: number) => void;
  onReset: any;
}

/* const initialItems: initial[] = {[
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "charger", quantity: 12, packed: true },
]; }*/

function ItemsList(props: Props) {
  // console.log(listItems);
  const [sort, setSort] = useState("input");
  let items: Item[] = props.listItems;

  if (sort === "input") {
    items = props.listItems;
  }
  if (sort === "description") {
    items = items.slice().sort((a, b) => a.item.localeCompare(b.item));
  }
  if (sort === "packed") {
    items = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {items.map((item: any) => (
          <Items
            key={item.id}
            item={item}
            onDelete={props.onDelete}
            onUpdate={props.onUpdate}
          ></Items>
        ))}
      </ul>
      <div className="actions">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description </option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={props.onReset}>Clear list</button>
      </div>
    </div>
  );
}

export default ItemsList;
