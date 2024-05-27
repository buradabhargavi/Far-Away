import React from "react";
interface initial {
  item: {
    id: number;
    item: string;
    number: number;
    packed: boolean;
  };
  onDelete: (id: number) => void;
  onUpdate: (id: number) => void;
}

function Items(props: initial) {
  const val = props.item.packed.toString();
  return (
    <li>
      <input
        type="checkbox"
        //  value="false"
        value={val}
        onChange={() => props.onUpdate(props.item.id)}
      />
      <span
        style={
          props.item.packed
            ? { textDecoration: "line-through", textDecorationColor: "red" }
            : {}
        }
      >
        {props.item.number} - {props.item.item}
      </span>
      <button className="cross" onClick={() => props.onDelete(props.item.id)}>
        ❌
      </button>
    </li>
  );
}

export default Items;
