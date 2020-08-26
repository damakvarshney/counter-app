import React, { Component } from "react";
import Counters from "./Component/counters";
import NavBar from "./Component/navBar";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
