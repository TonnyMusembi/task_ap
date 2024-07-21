<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useGenerateStore } from "../src/stores/generate";

const { genearteRecords } = useGenerateStore();
const { records } = storeToRefs(useGenerateStore());
console.log(records.value);
const date = new Date().toLocaleDateString();
console.log(date);

const dates = ref("2024-07-10");
const startDate = ref(date);
const fetch = async () => {
  await genearteRecords(dates.value);
};
</script>
<template>
  <div class="bg-gray-200 flex items-center justify-center">
    <RouterLink to="/tasktwo" class="text-teal-700 rounded-md">
      Click TaskTwo</RouterLink
    >
  </div>
  <router-view></router-view>

  <div class="max-w-7xl mx-auto bg-gray-100">
    <div class="bg-white shadow-md rounded-md p-6 mb-6">
      <h2 class="text-xs font-semibold text-center mb-4">Contact Dates</h2>
      <div class="orbits-container">
        <div v-for="(day, index) in records" :key="index" class="orbit-wrapper">
          <h3 class="text-lg font-semibold text-center mb-2">
            {{ day.contact_date }}
          </h3>
          <div class="orbit">
            <div v-for="(data, id) in day.array" :key="id">
              <div class="orbit-item" :class="`item-${id + 1}`">
                <img
                  :src="data.img"
                  alt=" h-4 w-4"
                  class="w-4 h-4 rounded-full mx-auto"
                />
                <div class="details">
                  <h3 class="text-xs font-semibold">{{ data.name }}</h3>
                  <p class="text-gray-600">{{ data.position }}</p>
                  <p class="text-gray-600">{{ data.city }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.orbit {
  position: relative;
  width: 600px;
  height: 150px;
  margin: 0 auto;
  border-top-left-radius: 150px;
  border-top-right-radius: 150px;
  border: 2px solid #e5e7eb;
  /* Tailwind gray-200 */
  border-bottom: none;
}

.orbit-item {
  position: absolute;
  width: 200px;
  height: 100px;
  text-align: center;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.item-1 {
  top: 0%;
  left: 50%;
}

.item-2 {
  top: 50%;
  left: 100%;
}

.item-3 {
  top: 50%;
  left: 0%;
}

.item-4 {
  top: 100%;
  left: 50%;
}

.orbit-item img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 0.5rem;
}

.details {
  position: absolute;
  top: 110%;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  background: #f9fafb;
  /* Tailwind gray-50 */
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
