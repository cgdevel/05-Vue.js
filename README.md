# 05-Vue.js
Ejercicios de VUE, del curso de Plazti

## index.html / index_2.html
Introducción a la estructura de VUE.

## tareaVue.html
Primer ejercicio práctico de forma individual.

## VueComponent
Creación y manejo de componentes de vue

```javascript
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
```