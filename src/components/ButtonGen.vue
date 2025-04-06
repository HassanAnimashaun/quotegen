<template>
  <div
    class="bg-red-500 p-4 mx-auto rounded-xl shadow-lg max-w-xs w-full text-center cursor-pointer"
  >
    <button @click="$emit('click')" class="text-white text-xl bold">Generate Quote</button>
  </div>
</template>

<script>
export default {}
</script>
