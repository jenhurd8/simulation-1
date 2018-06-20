import React from "react";
import "./Product.css";

export default function Product(props) {
  return (
    <div className="product">
      <img id="image" src={props.img} alt="noPic" />
      {props.name}
      <br />$
      {props.price}
    </div>
  );
}
