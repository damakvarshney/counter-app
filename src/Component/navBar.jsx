import React, { Component } from "react";

class NavBar extends Component {
  render() {
    console.log("Mount-NavBar-Rendered");
    let countValueOfProducts = 0;
    for (let index = 0; index < this.props.counters.length; index++) {
      countValueOfProducts =
        countValueOfProducts + this.props.counters[index].value;
    }

    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          NavBar
          <span
            className="badge badge-pill badge-secondary"
            style={{ marginRight: 20, marginLeft: 20 }}
          >
            {countValueOfProducts}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
