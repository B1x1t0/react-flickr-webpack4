# React Flickr Component with Webpack 4

* [Demo] - Demo en github pages.
* [Notas] - Notas durante el desarrollo

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