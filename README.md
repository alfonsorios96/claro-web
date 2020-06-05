# Claro Video Web

Este proyecto es una plataforma web basada en WebComponents con fines de Prueba de Concepto arquitectónicas de monorepositorio.

## Objetivos

* Usar las mejores prácticas en el desarrollo de aplicaciones Web.
* Utilizar tecnologías en convivencia: LitElement, componentes en un monorepositorio Lerna y pruebas unitarias.
* Sitio Web responsivo.

### Pre-requisitos

```
node >= 8.11
npm >= 5.6
yarn 1.21.1
Permisos de nivel y acceso escritura, lectura para el usuario o grupo del S.O. a ejecutar (drwxr-xr-x) recomendada.
```
### Explicación del monorepositorio

Un monorepostorio contiene todos los módulos (paquetes NPM) que comprenden la totalidad del proyecto, en este caso incluyo dos paquetes NPM.

El primero es `claro-app` que es  el proyecto de la aplicación SPA en cuestión del ejercicio, mientas que el segundo es un componente standalone `search-view` que tiene coomo propósito filtrar el catálogo de películas o series una vez que se ha seleccionado el género.

### Instalación

```shell script
# Lo primero que tenemos que hacer es configurar el monorepositorio de Lerna
$ yarn
$ yarn sync
# Se puede usar npm en lugar de yarn
```

`yarn sync` lo que hace, es generar los enlaces simbólicos entre los paquetes del monorepo (en este caso acotados por el namespace `@claro` así como sus dependencias)

Posteriormente, debemos dirigirnos a la ubicación del proyecto

```shell script
$ cd packages/claro-app
# Ejecutar la aplicación en modo desarrollo
$ yarn start:build
```

## Versioning

Se usa [SemVer](http://semver.org/) para controlar versiones. Para las versiones disponibles, ver el apartado [etiquetas del repositorio](https://github.com/alfonsorios96/claro-web/tags). 

## Authors

* **Alfonso Rios** - *Candidato web* - [GitHub](https://github.com/alfonsorios96)

## Licencia

Este proyecto está licenciado bajo MIT License - leer el archivo [LICENSE.md](LICENSE.md) para más detalle.

## Agradecimientos

* Gracias Jaqui, por ser un motor de motivación en estas noches de desvelo buscando empleo y apoyarme en esta etapa de mi vida. Te quiero mucho y te dedico una interfaz gráfica web que quizá no vayas a comprender técnicamente pero créeme que es algo valioso dado el tiempo requerido.