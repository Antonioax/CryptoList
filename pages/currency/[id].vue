<script setup>
const route = useRoute();
const { data } = await useFetch("/api/ticker/?id=" + route.params.id);
const coin = data.value[0];
</script>

<template>
  <div>
    <div>Detail page</div>
    <div>{{ coin.symbol }}</div>
    <div>{{ coin.rank }}</div>
    <div>{{ coin.price_usd }}</div>
    <div>{{ coin.market_cap_usd }}</div>
  </div>
</template>
