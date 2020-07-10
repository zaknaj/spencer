<script>
  import Navbar from "../components/Navbar.svelte";
  import Recap from "../components/Recap.svelte";
  import Expenses from "../components/Expenses.svelte";
</script>

<style>
  .main {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>

<div class="main">
  <Navbar />
  <Recap />
  <Expenses />
</div>
