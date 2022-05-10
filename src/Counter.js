import React from "react";

const Counter = (props) => {
  return (
    <div className="d-inline d-flex align-items-center justify-content-center">
      <button
        type="button"
        onClick={() => props.decrement(props.item.id)}
        className="btn btn-primary counter_btn fw-bolder"
      >
        -
      </button>
      <span className="mx-3 fs-4">{props.item.count}</span>
      <button
        type="button"
        onClick={() => props.increment(props.item.id)}
        className="btn btn-primary counter_btn fw-bolder"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
