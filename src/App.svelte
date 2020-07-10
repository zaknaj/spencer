<script>
  import Router, { nav } from "./Router.svelte";

  import Home from "./pages/Home.svelte";
  import Add from "./pages/Add.svelte";

  nav("/", Home);
  nav("/add", Add);
</script>

<style>
  .main {
    max-width: 420px;
    background: #f2f2f2;
    margin: auto;
    height: 100%;
  }
</style>

<div class="main">
  <Router />
</div>
