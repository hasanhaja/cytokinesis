import { useState } from "react";

const ReactComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>React count: {count}</p>
      <button onClick={() => setCount(count + 1)}>React click me</button>
    </div>
  );
};

export default ReactComponent;
