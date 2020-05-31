<template>
  <div>
    <px-assets-table :assets="assets"></px-assets-table>
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
      assets: []
    }
  },

  created() {
    api.getAssets().then(assets => (this.assets = assets))
  }
}
</script>
