<script lang="ts">
  import { chartRender } from "$lib/components/chartRender.svelte";
  import PieChart from "$lib/components/PieChart/PieChart.svelte";
  import StackedChart from "$lib/components/StackedChart/StackedChart.svelte";
  import { monthsData, purchasesData } from "$lib/data/data";
  let display = $state(monthsData);
</script>

<button
  onclick={() => {
    display = monthsData;
    chartRender.updateOptions(monthsData);
  }}>Months</button
>
<button
  onclick={() => {
    display = purchasesData;
    chartRender.updateOptions(purchasesData);
  }}>Purchases</button
>

<PieChart Data={display} />

<StackedChart />
