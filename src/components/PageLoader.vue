<template>
  <div class="border shadow-md rounded-md w-full">
    <header class="bg-gray-300 py-3"></header>
    <div
      class="overflow-scroll max-h-[40rem] relative shadow-md sm:rounded-lg border-b"
    >
      <table class="animate-pulse w-full text-left text-gray-500">
        <thead>
          <tr class="divide-x py-4 divide-gray-300">
            <!-- Add 7 table headers for the 7 columns -->
            <th
              v-for="n in 7"
              :key="n"
              class="px-4 py-3 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
            >
              <div class="h-4 bg-gray-300 rounded"></div>
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200 border-b">
          <tr
            v-for="i in 20"
            :key="i"
            class="bg-white border-b divide-x p-1 hover:bg-teal-100 cursor-pointer"
          >
            <!-- Add 7 table cells for the 7 columns -->
            <td v-for="n in 7" :key="n" class="px-4 py-4 whitespace-nowrap">
              <div class="h-4 bg-gray-300 rounded"></div>
            </td>
          </tr>
        </tbody>
      </table>
      <footer class="bg-white py-3">
        <div class="animate-pulse flex items-center justify-between space-x-4">
          <div class="h-4 w-20 bg-gray-400/60 rounded"></div>
          <div class="h-4 w-1/2 bg-gray-400/60 rounded"></div>
          <div class="h-4 w-20 bg-gray-400/60 rounded"></div>
        </div>
      </footer>
    </div>
  </div>
</template>
