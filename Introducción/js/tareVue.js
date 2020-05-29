new Vue({
    el:'#app',
    data () {
      return {
          appTitle: 'Mis Cursos de Platzi💚',
          totalTime: 0,
          cursosTomados: [],
          mostrarListaCursos: false,
          
          CursoTitulo: '',
          CursoHoras: 0

      }
    },

    computed: {
    },

    watch:{
        cursosTomados(newVal) {
            console.log(newVal)

            if(newVal.length > 0){
                this.mostrarListaCursos = true
                return
            }

            this.mostrarListaCursos = false
        }
    },

    methods: {
        AgregarNuevoCurso() {
            if(this.CursoTitulo === '')
                return
           
            this.cursosTomados.push({
                cursoTitulo: this.CursoTitulo,
                cursoHoras: this.CursoHoras
            });

            console.log(this.cursosTomados)
            
            this.totalTime = this.totalTime + parseInt(this.CursoHoras)

            this.CursoTitulo = ''
            this.CursoHoras = 0
        }
    }
  })