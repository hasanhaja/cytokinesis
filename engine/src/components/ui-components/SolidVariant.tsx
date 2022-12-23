import { createSignal } from "solid-js";

const SolidComponent  = () => {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <p>Solid count: {count()}</p>
      <button onClick={() => setCount(count() + 1)}>Solid click me</button>
    </div>
  );
};

export default SolidComponent;
