import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 6 },
      { id: 3, value: 9 },
      { id: 4, value: 0 },
    ],
  };

  render() {
    let countValueOfProducts = 0;
    for (let index = 0; index < this.state.counters.length; index++) {
      countValueOfProducts =
        countValueOfProducts + this.state.counters[index].value;
    }
    console.log(countValueOfProducts);
    return (
      <div>
        <p style={{ margin: 20 }}>
          Total Number of products in cart : {countValueOfProducts}
        </p>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.onResetCounter()}
          style={{ margin: 20 }}
        >
          Reset
        </button>

        {/* mapping for single counter component */}

        {this.state.counters.map((counter) => (
          <Counter
            // data being sent on further through props

            key={counter.id} //for internal react usage no implementation is done here
            counter={counter} //single array value being sent from arrayList
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          >
            <h2>{counter.id}</h2>
          </Counter>
        ))}
      </div>
    );
  }

  //Note : Here implementation is done on arrayList not on single array for ex: Reset.

  //Increment
  handleIncrement = (counter) => {
    console.log(counter);
    const counters = [...this.state.counters]; //getting counters arrayList for usage by spread Operator
    const index = counters.indexOf(counter); //find which array value to change in arrayList
    counters[index] = { ...counter }; //cloning
    counters[index].value++;
    this.setState({ counters });
  };

  //Delete
  //showing filtered result and showing
  handleDelete = (counterId) => {
    const countersAfterDelete = this.state.counters.filter(
      (idAskedToDelete) => idAskedToDelete.id !== counterId
    );
    this.setState({ counters: countersAfterDelete });
  };

  //Reset
  onResetCounter = () => {
    const countersAfterReset = this.state.counters.map((afterReset) => {
      afterReset.value = 0;
      return afterReset;
    });
    this.setState({ counters: countersAfterReset });
  };
}

export default Counters;
