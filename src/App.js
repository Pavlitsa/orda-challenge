import React, { Component } from "react";
import "./App.css";
import EmailForm from "./components/EmailForm";
import data from "./orders.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allData: data
    };
  }

  render() {
    
    return (
      <div className="App">
        <h3>Email Form</h3>
        <EmailForm />
      </div>
    );
  }
}

export default App;
