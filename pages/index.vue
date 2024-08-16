<script setup>
const { data } = await useFetch("/api/tickers/?limit=10");
</script>

<template>
  <main class="flex flex-col justify-center items-center mt-20">
    <h1 class="text-4xl">Crypto List</h1>

    <div class="flex flex-col gap-1 mt-10 w-[500px] max-w-[90%]">
      <div
        v-for="(currency, index) in data.data"
        :key="data.data.id"
      >
        <NuxtLink :to="'/currency/' + currency.id" class="flex hover:bg-emerald-200 py-2 sm:px-4 rounded-lg hover:shadow-xl">
          <div class="w-6 text-right mr-2">{{ index + 1 }}.</div>
          <div class="flex-1">{{ currency.name }}</div>
          <div class="flex-1 text-center">{{ currency.symbol }}</div>
          <div class="flex-1 text-right">${{ currency.price_usd }}</div>
        </NuxtLink>
      </div>
    </div>
  </main>
</template>
