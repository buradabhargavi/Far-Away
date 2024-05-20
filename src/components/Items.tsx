import React from "react";
interface initial {
  item: {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
  };
}

function Items({ item }: initial) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description}
      </span>
      <button className="cross">❌</button>
    </li>
  );
}

export default Items;
