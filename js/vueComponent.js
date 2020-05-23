Vue.component('contador', {
    data() {
        return {
            counter: 0
        }
    },

    methods: {
        Incrementar () {
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
            appTitle: 'Ejemplo de componentes de VUE'
        }
    }
})