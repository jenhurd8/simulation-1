import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      price: 0,
      img: ""
    };
  }

  onChangeHandler = e => {
    this.setState({ img: e.target.value });
  };
  onChangeHandler1 = e => {
    this.setState({ name: e.target.value });
  };
  onChangeHandler2 = e => {
    this.setState({ price: e.target.value });
  };

  formHandler = e => {
    e.preventDefault();
    //console.log(this.state.id);
    axios
      .put(
        "http://localhost:3001/api/products/" +
          {
            name: this.state.name,
            price: this.state.price,
            img: this.state.img
          }
      )
      .then(response => {
        console.log(response.data);
        this.setState({
          name: this.state.name,
          price: this.state.price,
          img: this.state.img
        });
        console.log(this.state.id);
      });
  };

  cancelHandler = e => {
    e.preventDefault();
    this.setState({
      name: "",
      price: 0,
      img: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formHandler}>
          Image URL:
          <input
            type="text"
            value={this.state.img}
            onChange={this.onChangeHandler}
            placeholder="Enter the Image URL"
          />
          <br />
          Product Name:
          <input
            value={this.state.name}
            onChange={this.onChangeHandler1}
            type="text"
            placeholder="Enter the Product Name"
          />
          <br />
          Price:
          <input
            type="number"
            placeholder="Enter the price"
            value={this.state.price}
            onChange={this.onChangeHandler2}
          />
          <br />
          <button onClick={() => this.formHandler}>Add to Inventory</button>
          <button onClick={() => this.cancelHandler}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default Form;
