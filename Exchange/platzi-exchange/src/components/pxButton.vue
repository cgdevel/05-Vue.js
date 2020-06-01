<template>
  <button
    @click="buttonClick"
    class="bg-transparent hover:bg-green-500 text-green-700font-semibold hover:text-white py-2 px-2borderborder-green-500 hover:border-transparent rounded"
  >
    <beat-loader :loading="isLoading" :color="'#68d391'" :size="8" />
    <slot v-show="isLoading"></slot>
  </button>
</template>

<script>
export default {
  name: 'pxButton',

  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    buttonClick() {
      this.$emit('custom-click')
    }
  }
}
</script>
