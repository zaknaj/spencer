<script>
  export let values = [];
  export let onChange = () => {};
</script>

<style>
  .main {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: white;
    position: fixed;
    z-index: 999;
    overflow: auto;
  }
  .value {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid lightgray;
    font-size: 20px;
  }
</style>

<div class="main">
  {#each values as value}
    <div class="value" on:click={() => onChange(value)}>{value}</div>
  {/each}
</div>
