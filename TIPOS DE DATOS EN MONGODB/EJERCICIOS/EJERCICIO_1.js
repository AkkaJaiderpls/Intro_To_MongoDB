// CREAR BASE DE DATOS CON NOMBRE SIUDB
// use SIUDB;

// CREAR COLECCION DE ESTUDIANTES
db.createCollection("estudiantes");

// INSERTAR 5 REGISTROS EN LA COLECCION
db.Estudiantes.insertMany([{
    "nombre" : "Juan",
    "apellido" : "Perez",
    "ci" : "54564",
    "sexo" : "M",
    "fechDeNacimiento" : "1990-06-06",
    "estado" : true,
    "carrera" : "ISI"
},
{
    "nombre" : "Jaider",
    "apellido" : "Pinto",
    "ci" : "5456",
    "sexo" : "M",
    "fechDeNacimiento" : "1990-05-05",
    "estado" : true,
    "carrera" : "IBI"
},
{
    "nombre" : "Cristian",
    "apellido" : "Bueno",
    "ci" : "54654",
    "sexo" : "M",
    "fechDeNacimiento" : "1990-04-04",
    "estado" : true,
    "carrera" : "ICI"
},
{
    "nombre" : "Cristian",
    "apellido" : "Amaru",
    "ci" : "4654",
    "sexo" : "M",
    "fechDeNacimiento" : "1990-03-03",
    "estado" : true,
    "carrera" : "ISI"
},
{
    "nombre" : "Alicia",
    "apellido" : "Virreira",
    "ci" : "4564",
    "sexo" : "F",
    "fechDeNacimiento" : "1990-02-02",
    "estado" : true,
    "carrera" : "IBI"
}]);


// ACTUALIZAR DOS DATOS POR ID
db.nameCollection.update({
    "_id" : ObjectId("634d5d0d8dd513d135b40e88")
},
{
    $set: {
        "carrera" : "IBI"
    }
})

db.nameCollection.update({
    "_id" : ObjectId("634d5d0d8dd513d135b40e89")
},
{
    $set: {
        "carrera" : "ICI"
    }
})


// ELIMINAR UN DATO POR ID
db.nameCollection.deleteOne({
    "_id" : ObjectId("634d5d0d8dd513d135b40e8a")
})