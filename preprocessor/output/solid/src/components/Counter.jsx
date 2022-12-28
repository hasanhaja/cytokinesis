import { createSignal } from "solid-js";

function Counter(props) {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <p>
        Count:
        {count()}
      </p>
      <button onClick={(event) => setCount(count() + 1)}>Increment</button>
      <button onClick={(event) => setCount(count() - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
