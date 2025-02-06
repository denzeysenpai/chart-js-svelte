<script lang="ts">
  import PieChart from "$lib/components/PieChart/PieChart.svelte";
  import StackedChart from "$lib/components/StackedChart/StackedChart.svelte";
  import { monthsData } from "$lib/data/data";
</script>

<PieChart Data={monthsData} />
<StackedChart />
