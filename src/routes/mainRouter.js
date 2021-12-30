const express = require("express");
const router = express.Router();
const db = require("../../database/models");
const {sequelize, Sequelize} = require("../../database/models");
const Op = db.Sequelize.Op;


// ###  MUESTRA TODOS LOS LIBROS + API  ### //

router.get("/", (req, res) => {
    db.Libro.findAll()
        .then(function(libros){
            res.render("home", {libros})
        })
})


router.get("/librosApi", (req, res) => {
    db.Libro.findAll()
        .then(function(libros){
            res.status(200).json({
                total: libros.length,
                data: libros
            })
        })
})

// ###  BUSCADOR EN API  ### //

router.get("/search", (req, res) => {
    db.Libro.findAll({
        where: {
            titulo: {[Op.like]: "%" + req.query.keyword + "%"}
        }
    })
        .then(function(libro){
            if(libro.length > 0){
                return res.status(200).json(libro)
            }
            else{
                return res.status(200).json("No se ha encontrado el libro")
            }
        })
})

//  ### ENCONTRAR API POR ID ###  //

router.get("/libroApi/:id", (req, res) => {

        db.Libro.findByPk(req.params.id)
        .then(function(libro){
            if(libro){
                res.status(200).json({
                    libro: libro
                })
            }
            else{
                res.status(200).json({
                    error: "No se encontró el libro con id:" + req.params.id
                })
            }
        })
})

// ###  PUBLICAR NUEVO LIBRO EN FORMULARIO Y API  ### //

router.get("/publicarLibro", (req, res) => {
    res.render("nuevoLibro")
})

router.post("/publicarLibro", async(req, res) => {

    let nuevoLibro = {
        titulo: req.body.titulo,
        autor: req.body.autor,
        precio: req.body.precio,
        fechaLanzamiento: req.body.fecha
    }

    await db.Libro.create(nuevoLibro)

    res.redirect("/")
})



router.post("/publicarLibroApi", (req, res) => {
    db.Libro.create(req.body)
        .then(function(libro){
            res.status(200).json({
                data: libro,
                status: 200,
                created: "ok"
            })
        })
})


// ###  ELIMINACION DE LIBRO POR FORMULARIO + API  ### //

router.get("/eliminacionExitosa", (req, res) => {
    res.render("eliminacionExitosa")
})

router.post("/eliminarLibro/:id", (req, res) => {
    db.Libro.destroy({
        where:{
            id: req.params.id
        }
    })
    res.redirect("/eliminacionExitosa")
})

router.delete("/EliminarlibroApi/:id", (req, res) => {
    db.Libro.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(function(response){
            res.json({
                exito: "libro borrado"
            })
        })
})



// ###  EDICION DE LIBRO + API ### //

router.get("/edicionLibro/:id", (req, res) => {
    db.Libro.findByPk(req.params.id)
        .then(function(libro){
            res.render("edicionLibro", {libro})
        })
})

router.post("/edicionLibro/:id", async(req, res) => {

    let editarLibro = {
        titulo: req.body.titulo,
        autor: req.body.autor,
        precio: req.body.precio,
        fechaLanzamiento: req.body.fecha
    }

   await db.Libro.update(editarLibro, {
        where:{
            id: req.params.id
        }
    })

    res.redirect("/")
})

router.put("/edicionLibroApi/:id", (req, res) => {
    db.Libro.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(function(responde){
            res.json({
                exito: "Se ha editado el libro con id:" + req.params.id
            })
        })
})

module.exports = router;