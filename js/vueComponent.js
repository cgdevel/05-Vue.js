Vue.component('DetalleMoneda', {
    // props: ['coinChangePercent',
    //         'coinTitle',
    //         'coinImg',
    //         'coinName',
    //         'coinCurrentPrice'],
    props: ['coin'],

    data() {
        return {
            showPrices: false,
            coinValue: 0,
        }
    },

    computed: {
        coinTitle() {
            return `${this.coin.Name} - ${this.coin.Symbol}`
        },

        coinConvertedValue(oldVal, newVal) {
            console.log(oldVal, newVal)

            if (!this.coinValue) {
                return 0
            }

            return this.Value / this.coin.CurrentPrice
        }
    },

    methods: {
        toggleShowPrices() {
            this.showPrices = !this.showPrices

            this.$emit('change-color',
                        this.showPrices ? 'FF96C8' : '3D3D3D')
        },


    },

    template: `
    <div>
        <img
            v-bind:src="coin.Img" 
            v-bind:alt="coin.Name" 
            width="100px" 
            v-on:mouseover="toggleShowPrices"
            v-on:mouseout="toggleShowPrices">
        <h1 v-bind:class="coin.ChangePercent > 0 ? 'green' : 'red'">
            {{ coinTitle }}
            <span v-if="coin.ChangePercent > 0">👍</span>
            <span v-else-if="coin.ChangePercent < 0">👎</span>
            <span v-else>🤞</span>
            <span v-on:click="toggleShowPrices">
                {{showPrices ? '🐵' : '🙈'}}
            </span>
        </h1>

        <input type="number" v-model="coinValue">
        <span>{{ coinConvertedValue }}</span>

        <ul v-show="showPrices">
            <li 
                class="uppercase"
                v-for="(p, index) in coin.PricesDay" 
                v-bind:key="p"
                v-bind:class="{ blue: p.value === coin.CurrentPrice, red: p.value < coin.CurrentPrice, green: p.value > coin.CurrentPrice }">
                {{ index }} - {{ p.day + ' - ' + p.value }}
            </li>
        </ul>
    </div>
    `
})

Vue.component('contador', {
    data() {
        return {
            counter: 0
        }
    },

    methods: {
        Incrementar() {
            this.counter += 1
        }
    },

    template: `
    <div>
        <button v-on:click="Incrementar">Clickeame!</button>
        <span>{{ counter }}</span>
    </div>
    `
})


new Vue({
    el: '#app',
    data() {
        return {
            appTitle: 'Ejemplo de componentes de VUE',
            color:'f4f4f4',
            btc: {
                Name: 'Bitcoin',
                Symbol: 'BTC',
                Img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
                ChangePercent: 0,
                CurrentPrice: 11000,
                PricesDay: [
                    { day: 'Lunes', value: 8000 },
                    { day: 'Martes', value: 9000 },
                    { day: 'Miercoles', value: 10000 },
                    { day: 'Jueves', value: 11000 },
                    { day: 'Viernes', value: 12000 },
                    { day: 'Sábado', value: 13000 },
                    { day: 'Domingo', value: 14000 }
                ],
            }
        }
    },

    methods: {
        updateColor (color) {
            this.color = color || this.color.split('').reverse().join('')
        }
    }
})