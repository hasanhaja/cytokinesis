import { createSignal, ParentProps } from "solid-js";

const App = (props: ParentProps) => {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <div>{props.children}</div> 
      <p>Count: {count()}</p>
      <button onClick={() => setCount(count() + 1)}>Click me</button>
    </div>
  );
};

export default App;
