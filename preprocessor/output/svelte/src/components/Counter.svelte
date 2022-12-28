<script>
  let count = 0;
</script>

<div>
  <p>Count: {count}</p>
  <button
    on:click={(event) => {
      count = count + 1;
    }}>Increment</button
  >
  <button
    on:click={(event) => {
      count = count - 1;
    }}>Decrement</button
  >
</div>