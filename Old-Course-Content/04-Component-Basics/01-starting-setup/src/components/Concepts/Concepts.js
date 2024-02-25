import React from "react";
import Concept from "./Concept";

const Concepts = (props) => {
  return (
    <ul id="concepts">
      {props.concepts.map((concept, index) => {
        return <Concept concept={concept} key={index} />;
      })}
    </ul>
  );
};

export default Concepts;
