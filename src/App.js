import React, { Component } from "react";
import Counters from "./Component/counters";
import NavBar from "./Component/navBar";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 6 },
      { id: 3, value: 9 },
      { id: 4, value: 0 },
    ],
  };

  constructor(props) {
    super(props);
    console.log("Mount-AppConstructor", this.props);
  }

  componentDidMount() {
    console.log("Mount-AppComponentDidMount");
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

  //Decrement
  handleDecrement = (counter) => {
    const counters = [...this.state.counters]; //getting counters arrayList for usage by spread Operator
    const index = counters.indexOf(counter); //find which array value to change in arrayList
    counters[index] = { ...counter }; //cloning
    if (counters[index].value < 1) {
      return;
    }
    counters[index].value--;
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

  render() {
    console.log("Mount-app-rendered");
    return (
      <React.Fragment>
        <NavBar counters={this.state.counters} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.onResetCounter}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
