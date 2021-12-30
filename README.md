# Evaluacion tecnica "Sondeos"
### CRUD de libros

### Permite crear, leer, actualizar y borras un libro tanto del lado del frontend como a traves de las APIS por Postman


### Descripcion:
Aplicación web de libros, permite publicar un libro, editarlo y/o borrarlo. Toda la información del libro es guardada en una base de datos SQL llamada "sondeos_libro", contiene solamente una tabla llamada "libros" por lo cual no es relacional.


### Tecnologias:
Se utilizaron tecnologias tanto del frontend como del backend, en frontend se utilizo: ejs en html, bootstrap y css.
En backend se utilizó: Node.js, Express, Sequelize ORM.
En base de datos se utilizó MySQL.


### Iniciar proyecto:
Para iniciar el proyecto se debe abrir una terminal nueva, descargar las dependencias con "npm install" y posteriormente escribir el comando "node src/app.js" y a continuacion escribir, en el navegador, la url "localhost:3000".


**Base de datos**
La base de datos está alojada en la nube, en una plataforma llamada "AlwaysData" por lo que no es necesario tener activado un servidor remoto como "XAMPP" para hacer funcionar la base de datos. Si se desea usar "XAMPP" y hacer consultas con un editor de SQL de manera local se debe ir a "Database/models/index.js" y cambiar, en la linea 7, la palabra "production" por "development", a continuacion tenes que ir a "database/config/config.js" y descomentar el "development" y comentar el "production", el "production" es el que hace referencia a "AlwaysData" y el "development" es el de "XAMPP".