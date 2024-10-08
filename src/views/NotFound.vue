<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const handleError = () => {
  router.push("/tasktwo");
};
</script>
<template>
  <div class="mt-7 max-w-sm mx-auto text-center card">
    <p class="mt-7 text-7xl font-bold text-gray-500">404</p>
    <p class="mt-7 text-6xl text-gray-500">Oops!</p>
    <p class="mt-7 text-gray-500">Page Not Found</p>
    <button class="bg-yellow-500 rounded-md px-1 py-1" @click="handleError">
      Go Home...
    </button>
  </div>
</template>
