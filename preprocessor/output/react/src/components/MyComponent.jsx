import * as React from "react";
import { useState } from "react";

export default function MyBasicComponent(props) {
  const [name, setName] = useState(() => "Hasan");

  const [count, setCount] = useState(() => 0);

  return (
    <div>
      <p>
        {props.message || "Hello"}
        {name}! I can run in React, Vue, Solid or Svelte!
      </p>

      <button onClick={(event) => setName("Ali")}>Click me</button>

      <p>
        Count:
        {count}
      </p>

      <button onClick={(event) => setCount(count + 1)}>Increment</button>
    </div>
  );
}
