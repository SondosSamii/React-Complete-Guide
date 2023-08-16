import React, { useState } from "react";

const Concept = (props) => {
  const data = props.concept;
  const [title, setTitle] = useState(data.title);

  const clickHandler = () => {
    console.log("Clicked!");
    setTitle(title + " Updated!!");
  };

  return (
    <li className="concept">
      <img src={data.image} alt={title} />
      <h2>{title}</h2>
      <p>{data.description}</p>
      <button onClick={clickHandler}>Change Title</button>
    </li>
  );
};

export default Concept;
