# Proyecto Node + NPM – Adrián Sudano

Este proyecto utiliza Node.js y NPM para levantar un servidor básico con Express y servir archivos estáticos desde la carpeta "public".  
Se eliminaron los CDN y todas las dependencias se cargan desde "node_modules", tal como solicita el trabajo práctico.

------------------------------------------------------------

## Instalación

Ejecutar el siguiente comando para instalar las dependencias:

npm install

------------------------------------------------------------

## Levantar el servidor

Opción 1:

node server.js

Opción 2:

npm start

El servidor se inicia en la dirección:

http://localhost:3001

------------------------------------------------------------

## Estructura del proyecto

proyecto-node-adrian/
│
├── public/              Archivos estáticos (HTML, CSS, imágenes)
├── server.js            Servidor Express
├── package.json         Dependencias y scripts
└── README.md            Documentación

------------------------------------------------------------

## Dependencias utilizadas

Estas dependencias se instalan automáticamente con "npm install":

- express
- dayjs
- bootstrap
- axios
- sweetalert2
- uuid
- nodemon (solo en desarrollo)

------------------------------------------------------------

## Notas

- No se utilizan CDN.
- Todos los recursos se cargan desde la carpeta "node_modules".
- La carpeta "public" se sirve automáticamente desde Express.

------------------------------------------------------------

## Autor

Adrián Sudano
Trabajo práctico de Node.js y NPM.
