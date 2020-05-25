import React, { Component } from "react";
import "./App.css";
// import Paginator from "./components/paginator";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    console.log("the delete button was clicked!", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = this.state.counters.slice();
    counters[counter.id - 1].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = this.state.counters.slice();
    counters[counter.id - 1].value--;
    this.setState({ counters });
  }
  handleReset = () => {
    const counters = this.state.counters.slice();
    counters.map((counter) => (counter.value = 0));
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar totalNumberCounters={this.state.counters.length} />
        <main role="main" class="container"></main>
        <Counters
          counters={this.state.counters}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onReset={this.handleReset}
        />
      </React.Fragment>
    );
  }
}

export default App;
