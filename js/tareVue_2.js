Vue.component('ComponenteModal', {
    props: ['modalTitle'],

    data() {
        return {
        }
    },

    methods: {
        OcultarModalHijoClick() {
            console.log('cambio modal - hijo')
            this.$emit('ocultar-modal')
        }
    },

    template: `
        <div class='modalForm'>
            <div class='f-title'>
                {{ modalTitle }}
            </div>
            <div class='f-body'>
                <slot name="cuerpo"></slot>
            <div>
            <div class='f-footer'>
                <button v-on:click="OcultarModalHijoClick">Cerrar</button>
            </div>
        </div>
    `
})


new Vue({
    el: '#app',
    data() {
        return {
            appTitle: 'Practica 2 de VUE',
            modalTitle: 'Titulo Modal',
            modalCuerpo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus necessitatibus iusto velit veritatis voluptas, eius explicabo dolore ut dolorem dignissimos hic quibusdam quos consectetur placeat quae harum iste ducimus temporibus!',
            mostrarModal: false
        }
    },

    computed: {
    },

    watch: {
    },

    methods: {
        MostrarModalPadre() {
            console.log('mostrar modal - padre')
            this.mostrarModal = true
        },

        OcultarModalPadre() {
            console.log('ocultar modal - padre')
            this.mostrarModal = false
        }
    }
})