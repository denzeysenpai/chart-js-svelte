<script lang="ts">
  import { onMount } from "svelte";
  import { chartRender, newConfig } from "../chartRender.svelte";

  let { Data } = $props();

  onMount(() => {
    if (Data) {
      const config = newConfig(Data);
      chartRender.initialize("pieChart", config);
      chartRender.updateDraw();
    }
  });

  $effect(() => {});
</script>

<div style="display: flex;">
  <canvas
    id="pieChart"
    style="flex-grow: 1; max-width: 600px; max-height: 600px; object-fit:contain;"
  ></canvas>
</div>
