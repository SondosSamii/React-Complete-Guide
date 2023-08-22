import React from "react";
import globalClasses from "../../Global.module.css";

const Card = ({ children }) => {
  return <div className={globalClasses.card}>{children}</div>;
};

export default Card;
