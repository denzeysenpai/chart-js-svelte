<script lang="ts">
  import { onMount } from "svelte";
  import { StackedBarChartRenderer, newConfig } from "./renderer.svelte";

  let { Data } = $props();

  onMount(() => {
    if (Data) {
      const config = newConfig(Data);
      StackedBarChartRenderer.initialize("stackedChart", config);
      StackedBarChartRenderer.updateDraw();
    }
  });
</script>

<div style="display: flex;">
  <canvas
    id="stackedChart"
    style="flex-grow: 1; max-width: 600px; max-height: 600px; object-fit:contain;"
  ></canvas>
</div>
