import React from "react";
import "./Trip.css";

interface Props {
  items: arr[];
}
interface arr {
  item: string;
  number: number;
  packed: boolean;
  id: number;
}
function Footer(props: Props) {
  const numOfItems = props.items.length;
  if (!numOfItems) {
    return (
      <div className="footer">
        <em>Start adding some items to your packing list 🚀</em>
      </div>
    );
  }
  const packed = props.items.filter((item) => item.packed).length;

  const percent = Math.round((packed / numOfItems) * 100);
  return (
    <div className="footer">
      {percent === 100
        ? "you got everything, Ready to go ✈️ "
        : `👜 You have ${numOfItems} items in your list, and you already packed ${packed}(${percent}%)`}
    </div>
  );
}

export default Footer;
