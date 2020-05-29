# 05-Vue.js - Exchange 📈
Ejercicio de Platzi para entender mejor el funcionamiento y la creación de un proyecto más profesional usando NODE y VUE

## Componentes y herramientas 🛠
* **[NODE.js](https://nodejs.org/es/)**
* **[Vs Code](https://code.visualstudio.com/)**

Herramientas recomendadas para mejorar la experiencia
* **[VETUR](https://github.com/vuejs/vetur)** - Ayuda para la sintaxis dentro de Vs Code
* **[VS Code ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)**  - Ayuda a detectar errores de código
* **[Prettier](https://prettier.io/)** - "Enchula" el código para sea más legible (Ctrl + K + D en Visual Studio)
* **[Vue Dev Tools](https://github.com/vuejs/vue-devtools)** - Extensión para debbugear aplicaciones de VUE

## Comandos básicos del VUE-CLI
* Instalación del cliente de VUE para NODE
```
npm install -g @vue/cli
npm install vue
```
* Crea una nueva instancia para un proyecto de VUE basado en NODE
```
vue create nombre-del-proyecto
```
* Iniciar una instancia de un servidor local que hostea el proyecto
```
npm run serve
```
* Corre una revisión del código para evitar posibles errores
```
npm run lint
```
* Compila el proyecto, junta los componentes y crea una versión para subir a producción. Estos datos se crean dentro de la carpeta ***dist*** del proyecto creado
```
npm run build
```
* Instala una instancia de un servidor local, para poder probar la versión de producción generada de forma local. Equivalente a abrir la carpeta ***dist*** con el ***Vs Code*** y usar el ***Live Server***
```
npm i -g serve
serve -s dist
```
* Crea una isntancia que permite gestionar los proyectos de VUE. Me recordó a *php my admin* para mysql
```
vue ui
```
* Comando que permite agregar plugins al proyecto
```
vue add @NombreDelProyecto
vue add @ianaya89/tailwind
```

##  Conceptos nuevos
* ***Single File Component*** - Archivos con extensión .VUE. Son los componentes vistos de una forma separada.
* ***Presets*** - Son las configuras guardadas al momento de generar un proyecto. Son reutilizables.


## Tailwind CSS
[Tailwind CSS](https://tailwindcss.com/)
Es un framework que nos permite generar CSS, basado en clases. Despuéd de agregar el plug in crea/actualiza los siguietnes archivos:
* ***tailwind.js*** - Configuración de tailwind
* ***tailwind.css*** - Este archivo se crea directamten so bre la carpeta ***dist***
* ***package.json*** - Actualiza la referencia para agregar a tailwind dentro de la lista de componentes
