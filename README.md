# 05-Vue.js
Ejercicios de VUE, del curso de Plazti

## index.html / index_2.html
Introducción a la estructura de VUE.

## tareaVue.html
Primer ejercicio práctico de forma individual.

## VueComponent
Creación y manejo de componentes de vue

```javascript
Vue.component('Nombre del componentes', {
    data() {
        return {
            Variables del componente    
        }
    },

    methods: {
        Métodos del componente
    },

    template: `
    Template del componente
    `
})
```