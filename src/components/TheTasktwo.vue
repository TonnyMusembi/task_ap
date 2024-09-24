<script setup></script>
<template>
  <div
    class="cursor-pointer text-lg flex space-x-2 hover:bg-white/50 hover:text-teal-50 p-1 rounded-lg"
  >
    <RouterLink to="/" class="text-teal-700 rounded-md">
      <!-- <TheButton text="Click TaskTwo" button-type="button" /> -->
      Click TaskOne
    </RouterLink>
  </div>
  <!-- <PageLoader /> -->
  <div class="body">
    <div class="container flex justify-between">
      <div class="outer-centered flex items-center justify-center">
        <div class="inner flex items-center justify-center text-center">
          `outer-centered inner` elements (shown as red square boxes) should be
          horizontally and vertically centered inside the parent `outer` (shown
          as a white box). Their content (this text) should be also horizontally
          and vertically centered inside the parent (red square box).
        </div>
      </div>
      <div class="outer-centered flex items-center justify-center">
        <div class="inner flex items-center justify-center text-center">
          `outer-centered inner` elements (shown as red square boxes) should be
          horizontally and vertically centered inside the parent `outer` (shown
          as a white box). Their content (this text) should be also horizontally
          and vertically centered inside the parent (red square box).
        </div>
      </div>
    </div>
    <div class="container flex justify-between">
      <div class="outer-left relative">
        <div class="inner absolute bottom-0 left-0 flex items-end p-2">
          `outer-left inner` element (shown as a white square box) should be
          positioned on the left and bottom of the parent `outer` (shown as a
          purple box). Its content (this text) should be aligned to the left
          side and the bottom of the parent `inner` (white square box).
        </div>
      </div>
      <div class="outer-right relative">
        <div
          class="inner absolute bottom-0 right-0 flex items-end justify-end p-2"
        >
          `outer-right inner` element (shown as a yellow square box) should be
          positioned on the right and bottom of the parent `outer` (show as a
          green box). Its content (this text) should be aligned to the right
          side and the bottom of the parent `inner` (yellow square box).
        </div>
      </div>
    </div>
  </div>
  <!-- <DataTable /> -->
</template>
<style>
body {
  background: white;
  width: 100%;
  margin: 0;
}

.outer-centered {
  margin: 5%;
  height: 250px;
  box-sizing: border-box;
  background: #fff;
  text-align: left;
}

.outer-left {
  width: 45%;
  height: 250px;
  box-sizing: border-box;
  background: purple;
  text-align: left;
}

.outer-right {
  width: 35%;
  height: 250px;
  box-sizing: border-box;
  background: green;
  text-align: left;
}

.inner {
  width: 300px;
  height: 150px;
}
.outer-centered .inner {
  border: 2px solid red;
}
.outer-left .inner {
  border: 2px solid white;
}
.outer-right .inner {
  border: 2px solid yellow;
}
</style>
