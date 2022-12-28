<script>
  export let message;

  let name = "Hasan";
  let count = 0;
</script>

<div>
  <p>{message || "Hello"} {name}! I can run in React, Vue, Solid or Svelte!</p>
  <button
    on:click={(event) => {
      name = "Ali";
    }}>Click me</button
  >
  <p>Count: {count}</p>
  <button
    on:click={(event) => {
      count = count + 1;
    }}>Increment</button
  >
</div>