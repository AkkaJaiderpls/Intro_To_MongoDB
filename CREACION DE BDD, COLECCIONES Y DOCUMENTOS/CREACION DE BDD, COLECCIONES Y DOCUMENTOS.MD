# CREACION DE BASE DE DATOS, DOCUMENTOS Y COLECCIONES #

## USAR BASE DE DATOS O CREARLA SI NO EXISTE ##

    use database

## MOSTRAR BASE DE DATOS ##

    show dbs

## CREAR COLECCION ##

    db.createCollection(nameCollection)

## MOSTRAR COLECCIONES ##

    show collections

## ELIMINAR COLECCION ##

    db.nameCollection.crop()

## ELIMINAR BASE DE DATOS EN USO ##

    db.dropDatabase()

## MOSTRAR DOCUMENTOS DE UNA COLECCION ##

    db.nameCollection.find()

## INSERTAR UN DOCUMENTO EN UNA COLECCION ##

    db.nameCollection.insert({
        "nombre" : "Juan",
        "apellido" : "Perez",
        "edad" : 25
    })

## ACTUALIZAR UN DOCUMENTO EN UNA COLECCION ##

Primero le indicamos la condicion y luego el valor a actualizar.

    db.nameCollection.update({
        "_id" : ObjectId("45c48897e456")
    },
    {
        $set {
            "edad" : 16
        }
    })

