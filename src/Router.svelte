<script context="module">
  import page from "page";

  import { writable } from "svelte/store";
  const routes = {};
  export const activeRoute = writable({});
  export const nav = (path, component, middleware = []) => {
    if (!component & (middleware.length === 0)) {
      return page(path);
    }
    routes[path] = { component, middleware };
  };
</script>

<script>
  import { onMount, onDestroy } from "svelte";

  const setupPage = () => {
    for (let [path, { component, middleware }] of Object.entries(routes)) {
      page(path, ...middleware, ctx => {
        $activeRoute = { component, path, params: ctx.params };
      });
    }
    page.start();
  };
  onMount(setupPage);
  onDestroy(page.stop);
</script>

<svelte:component this={$activeRoute.component} params={$activeRoute.params} />
