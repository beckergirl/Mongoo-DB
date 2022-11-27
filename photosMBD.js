// reto 2 MONGO DB (modulo 5)

/* Crear un nuevo modelo y esquema denominado photos que incluya el nombre del usuario, la url de la foto,
su titulo y una descripción. */

//ESQUEMAS Y MODELOS:

const mongoose = require("mongoose");


// VALIDACIÓN:

const PhotosSchema = new mongoose.Schema({

    user_name: String,
    url_photo: String,
    title: String,
    description: String,

 
})

module.exports = mongoose.model( "Photos", PhotosSchema ); 
/* 
// MIDDELEWARE: (pre y tambien vale el post)

PhotosSchema.pre("save", function(next){

    console.log("Middlelware de entrada");
    if(this.name > 2){

        console.log("Has introducido un nombre muy corto")
        next();

    }else{

        console.log("Solo nombres mayores de 2 letras");
    }
});
 */
