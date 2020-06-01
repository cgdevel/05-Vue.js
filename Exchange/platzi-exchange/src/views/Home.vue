<template>
  <div>
    <bounce-loader
      :loading="isLoading"
      :color="'#68d391'"
      :size="100"
    ></bounce-loader>
    <px-assets-table :assets="assets" v-if="!isLoading"></px-assets-table>
  </div>
</template>
<script>
import pxAssetsTable from '@/components/pxAssetsTable'
import api from '@/api'

export default {
  name: 'Home',

  components: {
    pxAssetsTable
  },

  data() {
    return {
      isLoading: false,
      assets: []
    }
  },

  created() {
    this.isLoading = true
    api
      .getAssets()
      .then(assets => (this.assets = assets))
      .finally(() => (this.isLoading = false))
  }
}
</script>
