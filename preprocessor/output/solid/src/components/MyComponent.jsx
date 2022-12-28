import { createSignal } from "solid-js";

function MyBasicComponent(props) {
  const [name, setName] = createSignal("Hasan");

  const [count, setCount] = createSignal(0);

  return (
    <div>
      <p>
        {props.message || "Hello"}
        {name()}! I can run in React, Vue, Solid or Svelte!
      </p>
      <button onClick={(event) => setName("Ali")}>Click me</button>
      <p>
        Count:
        {count()}
      </p>
      <button onClick={(event) => setCount(count() + 1)}>Increment</button>
    </div>
  );
}

export default MyBasicComponent;
