import React from "react";
import Items from "./Items";
interface initial {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}
const initialItems: initial[] = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "charger", quantity: 12, packed: true },
];

function ItemsList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((value) => (
          <Items key={value.id} item={value}></Items>
        ))}
      </ul>
    </div>
  );
}

export default ItemsList;
