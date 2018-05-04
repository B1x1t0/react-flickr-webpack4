# React Flickr Component with Webpack 4

* [Demo] (#Demo) - Demo en github pages.
* [Notas] (#Notas) - Notas durante el desarrollo
* [TODO] (#TODO) - Mejoras necesarias

** How to use
```sh
git clone git@github.com:B1x1t0/react-flickr-webpack4.git
cd react-flickr-webpack4
nom install
npm run start
```
Se lanzará en [http://localhost:3001/](http://localhost:3001/).

## Demo
url: https://b1x1t0.github.io/react-flickr-webpack4/

## Notas
- Creado el proyecto desde 'npm init -y'.
- Instaladas dependenias: webpack-cli, react, react-dom, babel...
- Añadido webpack.config.js, .babelrc, .gitignore.
- npm run start/build funcionando desde src/index.js
- Añadido stage-0 en babelrc para el uso de ciertas funcionalidades de ES7.
- Primera prueba de crear la galeria con flex-box para hacer un diseño responsive.
- Creado error en el state para comprobar el estado de la llamada.
- Para el css de las cards se ha utilizado flexbox.

```
react-flickr-webpack4
├── README.md
├── node_modules
├── package.json
├── .babelrc
├── .npmignore
├── webpack.config.js
├── .gitignore
├── build
│   └── ...
└── src
    └── App.css
    └── App.js
    └── index.js
    └── components
        └── ...
    └── config
        └── ...
    └── containers
        └── ...
```


## TODO
- Se podria añadir Redux para el estado de la aplicación (Fotos, paginación, estado del modal...).
- Mirar la forma de pedir imágenes de menor tamaño cuando se peticiona desde S/mobile.
    Asi ahorramos transferencia y la carga se agiliza.
- Unit test.
    Componentes.
    Navegación.
    Abrir/Cerrar Modal.
    Peticiones.
- Icono para cerrar el modal en vez del texto de close.
- Lazy loading para las imágenes.
