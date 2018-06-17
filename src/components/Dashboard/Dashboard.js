import React, { Component } from "react";
import Product from "../Product/Product";

class Dashboard extends Component {
  render(props) {
    console.log("dashboard", this.props.inventory);
    let list = this.props.inventory.map((element, index) => {
      return (
        <div>
          <Product />
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
