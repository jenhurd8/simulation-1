import React, { Component } from "react";
import axios from "axios";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      price: 0,
      img: ""
    };
    this.formHandler = this.formHandler.bind(this);
    this.cancelHandler = this.cancelHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onChangeHandler1 = this.onChangeHandler1.bind(this);
    this.onChangeHandler2 = this.onChangeHandler2.bind(this);
  }

  onChangeHandler = e => {
    // this.setState({ img: `" ${e.target.value} "` });
    this.setState({ img: e.target.value });
  };
  onChangeHandler1 = e => {
    this.setState({ name: e.target.value });
  };
  onChangeHandler2 = e => {
    this.setState({ price: e.target.value });
  };

  formHandler = e => {
    console.log("test");
    console.log(this.state);
    axios
      .post("http://localhost:3001/api/products/", {
        name: this.state.name,
        price: this.state.price,
        img: this.state.img
      })
      .then(response => {
        //console.log(response.data);
        this.setState({
          name: this.state.name,
          price: this.state.price,
          img: this.state.img
        });
        console.log(this.state.id);
      });
  };

  cancelHandler = () => {
    this.setState({
      name: "",
      price: 0,
      img: ""
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="form">
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
          <button>Add to Inventory</button>
        </form>
        <br />
        <br />
        <button onClick={this.cancelHandler}>Cancel</button>
      </div>
    );
  }
}

export default Form;
