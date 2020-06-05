# Claro Video Web

Este proyecto es una plataforma web basada en WebComponents con fines de Prueba de Concepto arquitectónicas de monorepositorio.

## Objetivos

* Usar las mejores prácticas en el desarrollo de aplicaciones Web.
* Utilizar tecnologías en convivencia: LitElement, componentes en un monorepositorio Lerna y pruebas unitarias.
* Sitio Web responsivo.

### Pre-requisitos

```
node >= 10.13.8
npm >= 6.12.0
yarn 1.21.1
Permisos de nivel y acceso escritura, lectura para el usuario o grupo del S.O. a ejecutar (drwxr-xr-x) recomendada.
```
### Explicación del monorepositorio

Un monorepostorio contiene todos los módulos (paquetes NPM) que comprenden la totalidad del proyecto, en este caso incluyo dos paquetes NPM.

El primero es `claro-app` que es  el proyecto de la aplicación SPA en cuestión del ejercicio, mientas que el segundo es un componente standalone `search-view` que tiene coomo propósito filtrar el catálogo de películas o series una vez que se ha seleccionado el género.

### Instalación

```shell script
# Lo primero que tenemos que hacer es configurar el monorepositorio de Lerna
$ yarn install
$ yarn sync
  lerna info Removing the following directories:
  lerna info clean packages/claro-app/node_modules
  lerna info clean packages/search-nav/node_modules
  ? Proceed? (ynH)
$ y
```

`yarn sync` lo que hace, es generar los enlaces simbólicos entre los paquetes del monorepo (en este caso acotados por el namespace `@claro` así como sus dependencias)

Posteriormente, debemos dirigirnos a la ubicación del proyecto

```shell script
$ cd packages/claro-app
# Ejecutar la aplicación en modo desarrollo
$ yarn serve:prod
# Construye un empaquetado de los módulos y los ejecuta
```

Para el componente standalone `search-nav` se tienen los siguientes comandos

```shell script
$ yarn sync
  lerna info Removing the following directories:
  lerna info clean packages/claro-app/node_modules
  lerna info clean packages/search-nav/node_modules
  ? Proceed? (ynH)
$ y
$ cd packages/search-nav
$ yarn test 
# Para ejecutar las pruebas unitarias. Están configuradas como T.D.D. (chai/karma) con @open-wc/testing 
$ yarn serve
```

### Despliegue

V1.0.0 https://clarovideo-bba70.firebaseapp.com

La app está desplegada en Firebase Hosting, en la URL anterior.

### Construido con amor y con las siguientes tecnologías

* [LitElement](https://lit-element.polymer-project.org/) - Librería web usada
* [Redux](https://redux.js.org/) - Librería para construir un árbol de estados centralizado para la transición de páginas
* [Redux-Thunk](https://github.com/reduxjs/redux-thunk/) - Librería que permite realizar cambios asíncronos al store de Redux
* [Yarn](https://yarnpkg.com/) - Manejador de paquetes
* [Lerna](https://lerna.js.org/) - Manejador de proyectos JavaScript con múltiples paquetes como único repositorio
* [Rollup](https://rollupjs.org/guide/en/) - Herramienta para empaquetar JavaScript (LitElement)
* [Open WC](https://open-wc.org/) - Conjunto de recomendaciones, buenas prácticas y herramientas para trabajar WebComponents
* [WebComponents](https://www.webcomponents.org/) - Plataforma de webcomponents basados en LitElement, y Polymer
* [Karma](https://karma-runner.github.io/latest/index.html) - Herramienta para ejecutar las pruebas unitarias
* [Chai](https://www.chaijs.com/) - Librería de assertions para TDD

## Versioning

Se usa [SemVer](http://semver.org/) para controlar versiones. Para las versiones disponibles, ver el apartado [etiquetas del repositorio](https://github.com/alfonsorios96/claro-web/tags). 

## Authors

* **Alfonso Rios** - *Candidato web* - [GitHub](https://github.com/alfonsorios96)

## Licencia

Este proyecto está licenciado bajo MIT License - leer el archivo [LICENSE.md](LICENSE.md) para más detalle.

## Agradecimientos

* Gracias Jaqui, por ser un motor de motivación en estas noches de desvelo buscando empleo y apoyarme en esta etapa de mi vida. Te quiero mucho y te dedico una interfaz gráfica web que quizá no vayas a comprender técnicamente pero créeme que es algo valioso dado el tiempo requerido.