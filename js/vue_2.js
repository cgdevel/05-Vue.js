new Vue({
    el:'#app',
    data () {
      return {
        name:'Bitcoin',
        symbol: 'BTC',
        img:'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        changePercent: 0,
        currentPrice: 11000,

        color:'f4f4f4',
        value: 0,

        pricesDay: [
          {day:'Lunes', value:8000}, 
          {day:'Martes', value:9000}, 
          {day:'Miercoles', value:10000}, 
          {day:'Jueves', value:11000}, 
          {day:'Viernes', value:12000}, 
          {day:'Sábado', value:13000}, 
          {day:'Domingo', value:14000}
        ],

        showPrices: false
      }
    },

    computed: {
      title () {
        return `${this.name} - ${this.symbol}`
      },
      convertedValue(oldVal, newVal) {
        console.log(oldVal, newVal)

        if(!this.value) {
          return 0
        }

        return this.value/this.currentPrice
      }
    },

    watch:{
      showPrices (newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    },

    methods: {
      toggleShowPrices () {
        this.showPrices = !this.showPrices
        this.color = this.color.split('').reverse().join('')
      }
    }
  })