import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [
        {
          name: "dog",
          price: 500,
          img: "later"
        },
        {
          name: "dog2",
          price: 1500,
          img: "later2"
        }
      ]
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/api/products").then(response => {
      console.log("response.data: ", response.data);
      this.setState({
        inventory: response.data
      });
    });
  }

  // continuous loop when added
  // componentDidUpdate() {
  //   axios.get("http://localhost:3001/api/products").then(response => {
  //     console.log("response.data: ", response.data);
  //     this.setState({
  //       inventory: response.data
  //     });
  //   });
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="dashboard">
          <Dashboard inventory={this.state.inventory} />
        </div>
        <div className="form">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
