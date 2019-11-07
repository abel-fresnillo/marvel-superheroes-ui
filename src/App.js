import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import "./App.css";
import HeroesDashboard from "./containers/HeroesDashboard/HeroesDashboard";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <HeroesDashboard />
        </Layout>
      </div>
    );
  }
}

export default App;
