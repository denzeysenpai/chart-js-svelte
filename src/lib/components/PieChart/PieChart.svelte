<script lang="ts">
  import { Chart, type ChartConfiguration } from "chart.js/auto";
  import { onMount } from "svelte";
  import { chartRender } from "../chartRender.svelte";
  import type { ChartData } from "$lib/data/model";
  let xValues: any[] = [];
  let yValues: any[] = [];
  let barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];
  let { Data } = $props();
  let config: ChartConfiguration = {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      responsive: true,
      // title: {
      //   display: true,
      // }
    },
  };
  let chart: any = $state();
  onMount(() => {
    chart = chartRender("pieChart", config);
  });

  $effect(() => {
    if (Data) {
      for (let i = 0; i < Data.data.length; i++) {
        xValues.push(Data.data[i].label);
        yValues.push(Data.data[i].value);
        console.log(Data.data[i].value);
      }
      chart.updateDraw();
    }
  });
</script>

<div style="display: flex;">
  <canvas
    id="pieChart"
    style="flex-grow: 1; width: 100%; height: 100%; object-fit:contain;"
  ></canvas>
</div>
