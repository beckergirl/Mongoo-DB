// APUNTES DE CLASE

//ESQUEMAS Y MODELOS:

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    name: String,
    email: String,
    role: String, 
    verified: Boolean
})

module.exports = mongoose.model("User", UserSchema);

//USO DEL MODELO:

let mongoose = require("mongoose");
let User = require("./userMDB");

mongoose.conect("mongodb://localhost: 27017/codenotch",
               {userNewUrlParser: false, useUnifiedTopology: false });

let userDocument = new User({

    name: "Juan",
    email: "mipepepepepepe@gmail.com",
    role: "admin",
    verified: false
});

//USO DEL MODELO:

userDocument.save(checkRespuesta)

function checkRespuesta(err, res){

    if(err){

        console.log("Error: " + err);

    }else{

        console.log("Documento guardado correctamente");
        mongoose.disconnect();

    }
}

// EJEMPLO DE VALIDACIÓN:

const UserSchema2 = new mongoose.Schema({

    name: {
            type: String,
            enum: ["Pepe", "Pepa", "Pepito"]

          },
    email: String,
    password: {

        type: String,
        validate: [
            function(password){

                return password.lenght >= 6;
            },
            "El password debería ser más largo"],
            select: false
    },
    role: {

        type: String,
        required: true
    },
    verified: Boolean,
    age: {

        type: Number,
        min: 18,
        max: 65
    }
})

// EJEMPLOS DE MIDDELEWARE: (pre y tambien vale el post)

UserSchema.pre("save", function(next){

    console.log("Middlelware de entrada");
    if(this.age > 20){

        console.log("Has introducido una edad mayor")
        next();

    }else{

        console.log("Solo edades mayores que 20");
    }
});