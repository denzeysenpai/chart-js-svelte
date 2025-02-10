<script lang="ts">
  import PieChart from "$lib/components/PieChart/PieChart.svelte";
  import { PieChartRenderer } from "$lib/components/PieChart/renderer.svelte";
  import { StackedBarChartRenderer } from "$lib/components/StackedChart/renderer.svelte";
  import StackedChart from "$lib/components/StackedChart/StackedChart.svelte";
  import { monthsData, purchasesData } from "$lib/data/data";
  let display = $state(monthsData);
</script>

<button
  onclick={() => {
    PieChartRenderer.updateOptions(monthsData);
    StackedBarChartRenderer.updateOptions(monthsData);
  }}>Months</button
>
<button
  onclick={() => {
    PieChartRenderer.updateOptions(purchasesData);
    StackedBarChartRenderer.updateOptions(purchasesData);
  }}>Purchases</button
>

<PieChart Data={display} />

<StackedChart Data={display} />
