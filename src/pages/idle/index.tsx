import React, { useRef } from "react";
import { createRoute } from "atomic-router";

export const Idle = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  let iterations = 100000;
  let value = 0;

  const req = requestIdleCallback;

  const handleCalculate = (deadline: IdleDeadline) => {
    while (iterations > 1 && deadline.timeRemaining() > 1) {
      console.log(iterations);
      value =
        Math.random() < 0.5 ? Math.random() + value : Math.random() + value;

      iterations -= 1;
    }

    req(handleCalculate);
  };

  const handleClick = () => {
    if (!ref.current) {
      return;
    }

    ref.current.style.backgroundColor = 'green';
  };

  return (
    <div>
      <div
        className="playground"
        ref={ref}
        style={{ width: '400px', height: '200px', backgroundColor: 'white' }}
      />
      <button onClick={handleClick}>Interface manipulation</button>
      {/* @ts-ignore */}
      <button onClick={req(handleCalculate)}>Calculate</button>
    </div>
  );
};

export const idleRoute = createRoute();
export const IdlePage = {
  view: Idle,
  route: idleRoute,
};
