<script setup>
const { data } = await useFetch("/api/tickers/?limit=10");
</script>

<template>
  <main>
    <h1 class="bg-red-200">Index Page</h1>

    <div>
      <div v-for="currency in data.data" :key="data.data.id">
        {{ currency.name }}
        {{ currency.symbol }}
        {{ currency.price_usd }}
        <NuxtLink :to="'/currency/' + currency.id">{{ currency.id }}</NuxtLink>
        <br />
      </div>
    </div>
  </main>
</template>
