<template>
  <div class="bg-white p-6 rounded-xl shadow-lg max-w-lg w-full flex items-center space-x-6">
    <img src="/src/components/icons/favi.png" class="w-24 h-24 object-contain" />

    <div class="text-left space-y-2">
      <p>
        {{ quote }}
      </p>
      <p>❤️ {{ author }}</p>
    </div>

    <div class="relative w-32 h-32 sm:w-40 sm:h-40 p-4">
      <span
        @click="copybtn"
        class="material-symbols-outlined absolute top-0 right-10 text-gray-600 p-2 cursor-pointer hover:text-black"
      >
        content_copy
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quote: String,
    author: String,
  },
  methods: {
    copybtn() {
      const quoteText = `${this.quote} - ${this.author}`
      navigator.clipboard
        .writeText(quoteText)
        .then(() => {
          alert('Quote copied to clipboard!')
        })
        .catch((error) => {
          console.error('Failed to copy quote:', error)
        })
    },
  },
}
</script>
