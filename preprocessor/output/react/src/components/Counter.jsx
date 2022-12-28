import * as React from "react";
import { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(() => 0);

  return (
    <div>
      <p>
        Count:
        {count}
      </p>

      <button onClick={(event) => setCount(count + 1)}>Increment</button>

      <button onClick={(event) => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
