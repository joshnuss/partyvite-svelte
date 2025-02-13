<script lang="ts">
  let count: number = $state(0)
  const increment = () => {
    count += 3
  }
</script>

<button onclick={increment}>
  count is {count}
</button>
