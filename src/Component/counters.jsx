import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Mount-Counters-rendered");
    return (
      <div>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.props.onReset}
          style={{ margin: 20 }}
        >
          Reset
        </button>

        {/* mapping for single counter component */}

        {this.props.counters.map((counter) => (
          <Counter
            // data being sent on further through props

            key={counter.id} //for internal react usage no implementation is done here
            counter={counter} //single array value being sent from arrayList
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
