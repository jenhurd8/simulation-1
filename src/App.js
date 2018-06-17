import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";

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
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventory} />
        <Form />
      </div>
    );
  }
}

export default App;
