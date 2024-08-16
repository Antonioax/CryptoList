<script setup>
const route = useRoute();
const { data } = await useFetch("/api/ticker/?id=" + route.params.id);
const coin = data.value[0];
</script>

<template>
  <main class="flex flex-col justify-center items-center mt-20">
    <h1 class="text-4xl">{{ coin.name }}</h1>

    <div class="flex flex-col gap-1 mt-10 w-full max-w-[90%]">
      <div class="flex justify-between gap-3">
        <div class="flex-1 text-right font-semibold">Symbol:</div>
        <div class="flex-1 text-left">{{ coin.symbol }}</div>
      </div>
      <div class="flex justify-between gap-3">
        <div class="flex-1 text-right font-semibold">Rank:</div>
        <div class="flex-1 text-left">
          {{
            coin.rank +
            (+coin.rank % 10 === 1
              ? "st"
              : +coin.rank % 10 === 2
              ? "nd"
              : +coin.rank % 10 === 3
              ? "rd"
              : "th")
          }}
        </div>
      </div>
      <div class="flex justify-between gap-3">
        <div class="flex-1 text-right font-semibold">USD currency:</div>
        <div class="flex-1 text-left">{{ coin.price_usd }}$</div>
      </div>
      <div
        class="flex justify-between gap-3"
        :class="
          coin.percent_change_24h >= 0 ? 'text-emerald-600' : 'text-red-500'
        "
      >
        <div class="flex-1 text-right font-semibold">Last 24h:</div>
        <div class="flex-1 text-left">{{ coin.percent_change_24h }}%</div>
      </div>
      <div
        class="flex justify-between gap-3"
        :class="
          coin.percent_change_1h >= 0 ? 'text-emerald-600' : 'text-red-500'
        "
      >
        <div class="flex-1 text-right font-semibold">Last 1h:</div>
        <div class="flex-1 text-left">{{ coin.percent_change_1h }}%</div>
      </div>
      <div
        class="flex justify-between gap-3"
        :class="
          coin.percent_change_7d >= 0 ? 'text-emerald-600' : 'text-red-500'
        "
      >
        <div class="flex-1 text-right font-semibold">Last 7d:</div>
        <div class="flex-1 text-left">{{ coin.percent_change_7d }}%</div>
      </div>
      <div class="flex justify-between gap-3">
        <div class="flex-1 text-right font-semibold">BTC:</div>
        <div class="flex-1 text-left">{{ coin.price_btc }}BTC</div>
      </div>
    </div>
  </main>
</template>
