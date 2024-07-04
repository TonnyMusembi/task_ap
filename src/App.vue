<script setup>
import { ref } from "vue";
import { useGenerateStore } from "../src/stores/generate"
const { genearteRecords } = useGenerateStore();
const startDate = ref('2024-07-04')
const fetch = async () =>{

  await genearteRecords(startDate.value);
}
fetch();
</script>

<template>
  <div class="text-teal-500">
    test
  </div>

  <div class="flex justify-center items-center min-h-screen bg-gray-100 ">
    <div class="relative p-10 w-72 h-36 border-4 border-gray-200 rounded-t-full overflow-hidden">
      <div
        class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-52 h-26 bg-gray-300 rounded-t-full flex items-center justify-center text-center">
        Upload <br />Photo
      </div>
    </div>
  </div>
</template>

