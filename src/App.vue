<script>
import QuoteCard from './components/QuoteCard.vue'
import ButtonGen from './components/ButtonGen.vue'

export default {
  components: {
    QuoteCard,
    ButtonGen,
  },
  data() {
    return {
      message: {
        quote: '',
        author: '',
      },
    }
  },
  methods: {
    async generateBtn() {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
          headers: { 'X-Api-Key': 'mGGvMUqXPYJ/5gyC+lOVfQ==EEQW946KcsBAmzX8' },
        })
        const data = await response.json()
        this.message.quote = data[0].quote
        this.message.author = data[0].author
      } catch (error) {
        console.error('Error fetching quote:', error)
      }
    },
  },
  mounted() {
    this.generateBtn()
  },
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-yellow-100">
    <div class="grid grid-cols-1 gap-5">
      <QuoteCard :quote="message.quote" :author="message.author" />
      <ButtonGen @click="generateBtn" />
    </div>
  </div>
</template>

<style scoped></style>
