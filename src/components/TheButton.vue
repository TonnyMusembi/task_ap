<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },

  buttonType: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <button
    :type="buttonType"
    class="select-none inline-flex items-center gap-1 disabled:cursor-not-allowed transform leading-none transition duration-100 ease-in-out focus:outline-none focus:ring-0 text-xs px-2.5 rounded-md w-1/4"
  >
    <slot />
    <span class="hidden font-semibold uppercase sm:inline"> {{ text }} </span>
  </button>
</template>
