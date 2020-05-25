import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, counters, onDecrement } = this.props;
    return (
      <div>
        <div>
          <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
            Reset
          </button>
        </div>
        {counters.map((counter) => {
          return (
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          );
        })}
      </div>
    );
  }
}

export default Counters;
