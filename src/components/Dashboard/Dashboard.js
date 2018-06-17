import React, { Component } from "react";
import Product from "../Product/Product";
import "./Dashboard.css";

class Dashboard extends Component {
  render(props) {
    console.log("dashboard", this.props.inventory);
    let list = this.props.inventory.map((element, index) => {
      return (
        <div key={index}>
          <Product
            image={this.props.inventory[index].image}
            name={this.props.inventory[index].name}
            price={this.props.inventory[index].price}
          />
        </div>
      );
    });

    return (
      <div>
        {list}
        <Product inventory={this.props.inventory} />
      </div>
    );
  }
}

export default Dashboard;

// Inside Dashboard you should map over the inventory list and render the Product component for each product.
//  At this point you should see the word 'Product' repeated the same number of times as you have products in
//   your dummy data.
