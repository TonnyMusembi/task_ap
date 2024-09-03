<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useGenerateStore } from "../stores/generate.js";
// import { solution } from "../src/utils/format.js";
const { genearteRecords } = useGenerateStore();
const { records } = storeToRefs(useGenerateStore());
console.log(records.value);
const date = new Date().toLocaleDateString();
console.log(date);

const dates = ref("2024-07-10");
const startDate = ref(date);
console.log(startDate.value);
const fetch = async () => {
  await genearteRecords(dates.value);
};
fetch();
// task 3
function solution(S, C) {
  let total_cost = 0;
  let n = S.length;

  for (let i = 0; i < n - 1; i++) {
    if (S[i] === S[i + 1]) {
      if (C[i] < C[i + 1]) {
        total_cost += C[i];
      } else {
        total_cost += C[i + 1];
        C[i + 1] = C[i];
      }
    }
  }

  return total_cost;
}

console.log(solution("abccbd", [0, 1, 2, 3, 4, 5]));

// task 4
function solutions(N) {
  const memo = {};

  function calculate(n) {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];

    const prev1 = calculate(n - 1);
    const prev2 = calculate(n - 2);

    const sumOfDigits = String(prev1 + prev2)
      .split("")
      .reduce((acc, digit) => acc + Number(digit), 0);
    memo[n] = sumOfDigits;
    return sumOfDigits;
  }

  return calculate(N);
}
console.log(solutions(6));
</script>
<template>
  <div
    class="cursor-pointer text-lg flex space-x-2 hover:bg-white/50 hover:text-teal-50 p-1 rounded-lg"
  >
    <RouterLink to="/tasktwo" class="text-teal-700 rounded-md">
      Click TaskTwo</RouterLink
    >
  </div>
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
                <div
                  class="details p-6 bg-white rounded shadow-md hover:bg-gray-100 hover:shadow-lg hover:text-black cursor-pointer transition duration-300"
                >
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
  top: 50%;
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
