<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "#app";

const route = useRoute();
const router = useRouter();

const coins = ref([]);
const limit = ref(Number(route.query.limit) || 10);
const isLoading = ref(true);

async function fetchCoins() {
  isLoading.value = true;
  try {
    const { data } = await $fetch(`/api/tickers/?limit=${limit.value}`);
    console.log(data);
    coins.value = data;
  } catch (error) {
    console.error("Error fetching coins:", error);
  } finally {
    isLoading.value = false;
  }
}

watch(
  () => route.query.limit,
  (newLimit) => {
    limit.value = Number(newLimit) || 10;
    fetchCoins();
  },
  { immediate: true } // Fetch immediately on component mount
);

watch(limit, (newLimit) => {
  if (newLimit !== Number(route.query.limit)) {
    router.push({
      path: route.path,
      query: { ...route.query, limit: newLimit },
    });
  }
});

fetchCoins();
</script>

<template>
  <main class="flex flex-col justify-center items-center mt-20">
    <h1 class="text-4xl">Crypto List</h1>

    <div class="flex flex-col gap-1 mt-10 mb-20 w-[500px] max-w-[90%]">
      <div class="mb-10 self-end">
        TOP
        <select v-model="limit" class="bg-emerald-50">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>

      <div v-if="isLoading" class="mt-20 text-center">Loading...</div>

      <div
        v-if="!isLoading"
        v-for="(currency, index) in coins"
        :key="currency.id"
      >
        <NuxtLink
          :to="'/currency/' + currency.id"
          class="flex hover:bg-emerald-200 py-2 sm:px-4 rounded-lg hover:shadow-xl"
        >
          <div class="w-6 text-right mr-2">{{ index + 1 }}.</div>
          <div class="flex-1">{{ currency.name }}</div>
          <div class="flex-1 text-center">{{ currency.symbol }}</div>
          <div class="flex-1 text-right">${{ currency.price_usd }}</div>
        </NuxtLink>
      </div>
    </div>
  </main>
</template>
