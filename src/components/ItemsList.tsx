import React from "react";
import Items from "./Items";

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
}

/* const initialItems: initial[] = {[
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "charger", quantity: 12, packed: true },
]; }*/

function ItemsList(props: Props) {
  // console.log(listItems);
  return (
    <div className="list">
      <ul>
        {props.listItems.map((item: any) => (
          <Items
            key={item.id}
            item={item}
            onDelete={props.onDelete}
            onUpdate={props.onUpdate}
          ></Items>
        ))}
      </ul>
    </div>
  );
}

export default ItemsList;
