// DIA2 // reto 1 MONGO DB (modulo 5)

//USO DEL MODELO:

const mongoose = require("mongoose");
let Photos = require("./photosMBD");


mongoose.connect('mongodb+srv://Becker:Becker82@cluster0.ta8owdb.mongodb.net/codenotch',
               {useNewUrlParser: false, useUnifiedTopology: false });

/* • Subida de fotos:
Dado un usuario, url de foto, titulo y descripción se debe guardar en la colección ‘photos’. */

let photosDocument = new Photos({   /// perfecto

    user_name: "Serpiente",
    url_photo: "https://as01.epimg.net/meristation/imagenhttps://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2014/01/277437-cine-ciencia-ficcion-1997-rescate-nueva-york.jpg?itok=-YV4n8h2es/2021/10/27/reportajes/1635330682_620209_1635758038_noticia_normal.jpg",
    title: "1997, Rescate en Nueva York",
    description: " Kurt Russell interpretando a Snake Plissken."
   
});

//USO DEL MODELO:

photosDocument.save(checkRespuesta)

function checkRespuesta(err, res){

    if(err){

        console.log("Error: " + err);

    }else{

        console.log("Documento guardado correctamente");


    }
} 

let photosDocument2 = new Photos({   /// perfecto

    user_name: "Plissken",
    url_photo: "https://cdn.sincroguia.tv/uploads/programs/2/0/1/x2013-rescate-en-los-angeles-6760_SPA-95.jpg.pagespeed.ic.T_ZOQdEVsG.jpg",
    title: "2013, Rescate en L.A.", 
    description: "Plissken volando"
   
});

//USO DEL MODELO 2:

photosDocument2.save(checkRespuesta)

function checkRespuesta(err, res){

    if(err){

        console.log("Error: " + err);

    }else{

        console.log("Documento guardado correctamente");
    

    }
} 


/* • Obtener fotos:
Dado un usuario obtener todas sus fotos. */

Photos.find({}).where ("user_name").equals("Serpiente")  /// perfecto
      
.then(function(photos){

    console.log(photos);
    /* mongoose.disconnect(); */
})
.catch(function(){

    console.log("error");
})


/* • Modificar fotos:
Dado el titulo de una foto y una descripción modificar su descripción. */

/// perfecto!!!
Photos.findOneAndUpdate({title: "1997, Rescate en Nueva York"}, {description: " Kurt Russell interpretando a Snake Plissken y ESTÁ INMENSO."})
     
.then(function (des){

    console.log("Descripción de la fotografía actualizada");
    console.log(des);
})
.catch(function() 
{
    console.log("error");    
})

/* • Eliminar Foto:
Dado un usuario y un titulo de foto eliminar su foto. */

Photos.deleteOne({ user_name: "Plissken", title: "2013, Rescate en L.A." })

    .then(function (photo){

        console.log("Fotografía borrada");
        console.log(photo);
    })
    .catch(function() 
    {
        console.log("error");    
    }) 


/* • Eliminar todas las Fotos:
Dado un usuario eliminar todas sus fotos. */


Photos.deleteMany({user_name: "Serpiente"})

     .then(function (photos){
                 
        console.log("Todas las fotografías borradas");
        console.log(photos);   

     })

     .catch(function(){

         console.log("error");    
     }) 



//// no se si hay que hacerlo con funciones (oido en clase, confusión con día 3)

/* • Subida de fotos:
Dado un usuario, url de foto, titulo y descripción se debe guardar en la colección ‘photos’. */

/* function uploadPhoto(user_name,url_photo, title, description)
{
    let photoDocument = new Photos({

        user_name: user_name,
        url_photo: url_photo,
        title: title,
        description: description
    })
    photoDocument.save(checkRespuesta);
}

uploadPhoto("Plissken","https://cdn.sincroguia.tv/uploads/programs/2/0/1/x2013-rescate-en-los-angeles-6760_SPA-95.jpg.pagespeed.ic.T_ZOQdEVsG.jpg","2013, Rescate en L.A.", "Plissken volando"); */