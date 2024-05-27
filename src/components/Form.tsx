import React, { useState } from "react";

import "./Trip.css";

function Form(props: any) {
  const [number, setNumber] = useState<number>(1);
  const [item, setItem] = useState<string>("");
  const array = Array.from({ length: 20 }, (_, i) => i + 1);
  // console.log(array);
  const addItem = (event: React.FormEvent) => {
    event.preventDefault();
    if (!item) return alert("please add the item field");
    const newItem = {
      item,
      number,
      packed: false,
      id: Date.now(),
    };
    props.onsubmit(newItem);

    // console.log(newItem);
    //  console.log(items);
    setItem("");
    setNumber(1);
  };

  return (
    <>
      <form className="form" onSubmit={addItem}>
        <h3>what do you need for your 😍 trip?</h3>
        <select
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        >
          {array.map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        {/*  <input
          type="number"
          value={number}
          onChange={numHandler}
          placeholder="num of items"
        ></input> */}
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="items"
        ></input>
        <button className="addbtn">Add</button>
      </form>
    </>
  );
}

export default Form;
