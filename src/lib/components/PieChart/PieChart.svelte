<script lang="ts">
  import { onMount } from "svelte";
  import { PieChartRenderer, newConfig } from "./renderer.svelte";

  let { Data } = $props();

  onMount(() => {
    if (Data) {
      const config = newConfig(Data);
      PieChartRenderer.initialize("pieChart", config);
      PieChartRenderer.updateDraw();
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
