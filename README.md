# 05-Vue.js
Ejercicios de VUE, del curso de Plazti

## index.html / index_2.html
Introducción a la estructura de VUE.



## tareaVue.html
Primer ejercicio práctico de forma individual.

## VueComponent
Creación y manejo de componentes de vue

OJO: La comunicación de PADRES hacia hijos se da a travez de propiedades (props) y de hijos hacia padres es a travez de eventos

```javascript
Vue.component('Nombre del componentes', {
    /*
    Parámetros que son modificales desde el componente padre.
    Deben estar declarados dentro del componente padre.
    Todos los componentes solo deben tener un componente padre
    */
    props: [],

    /*
    Variables del componente
    */
    data() {
        return {
        }
    },

    /*
    Métodos del componente
    */
    methods: {    
    },

    /*
    Template del componente

    - <slot name="NombreSlot"></slot> / <template v-slor:NombreSlot>¨[Còdigo HTML]</template>
        Es un componente que permite que el componente paddre pueda inyectar código HTML dentro del componente
        Se puede tener más de un slot, diferenciandolor a traves del
        parametro name. Y para usarlos, se usan dentro de la etiqueta
        <template>
    */
    template: `
    `
})
```