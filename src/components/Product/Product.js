import React from "react";
import "./Product.css";

export default function Product(props) {
  return (
    <div className="product">
      {props.image}

      {props.name}
      {props.price}
    </div>
  );
}
