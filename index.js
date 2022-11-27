// reto 2 Día 2 (mongo)

//USO DEL MODELO:

const mongoose = require("mongoose");

let Teachers = require("./teachersMBD");
let Subjects = require("./subjectsMBD")
let Marks = require("./marksMBD")
let Students = require("./studentsMBD")


mongoose.connect('mongodb+srv://Becker:Becker82@cluster0.ta8owdb.mongodb.net/codenotch3',
                {useNewUrlParser: false, useUnifiedTopology: false});
/* 
• Implementar el escenario de trabajo usando schemas de mongo con moongose y node.js.
• Insertar 4 documentos en la nueva base de datos. */


// profesores, TEACHERSCHEMA (firstName, lastName, groups):


let teachers1 = new Teachers({

    firstName: "Amparo",
    lastName: "Barroso",
    groups: ["FULL STACK Full Time", "DATA SCIENCE Part Time"]
});

/* teachers1.save(checkRespuesta) */

let teachers2 = new Teachers({

    firstName: "David",
    lastName: "Maestre",
    groups: ["FULL STACK Full Time", "FULL STACK Part Time"]
});

/* teachers2.save(checkRespuesta) */

let teachers3 = new Teachers({

    firstName: "Ignacio",
    lastName: "Neto",
    groups: ["DATA SCIENCE Full Time", "DATA SCIENCE Part Time"]
});

/* teachers3.save(checkRespuesta) */

let teachers4 = new Teachers({

    firstName: "Estefanía",
    lastName: "Barro",
    groups: ["DATA SCIENCE Part Time", "FULL STACK Part Time"]
});

/* teachers4.save(checkRespuesta) */


// asignaturas, SUBJECTSCHEMA (title):


let subjects1 = new Subjects({

    title: "Fundamentos de la programación",
    teachers: [teachers1, teachers2]
});

/* subjects1.save(checkRespuesta) */

let subjects2 = new Subjects({

    title: "Maquetación",
    teachers: [teachers2, teachers1]
});

/* subjects2.save(checkRespuesta) */

let subjects3 = new Subjects({

    title: "Introducción a Bases de datos",
    teachers: [teachers1, teachers3]
});

/* subjects3.save(checkRespuesta) */

let subjects4 = new Subjects({

    title: "Bases de datos avanzadas",
    teachers: [teachers3, teachers4]
});

/* subjects4.save(checkRespuesta) */


// notas / MARKSSCHEMA (date, mark):

let marks1 = new Marks({

    date: "2022-11-26",
    mark: 10,
    subjects: [subjects1]
});

/* marks1.save(checkRespuesta) */

let marks2 = new Marks({

    date: "2022-09-26",
    mark: 8,
    subjects: [subjects2, subjects1]
});

/* marks2.save(checkRespuesta) */

let marks3 = new Marks({

    date: "2022-12-26",
    mark: 9,
    subjects: [subjects3]
});

/* marks3.save(checkRespuesta) */

let marks4 = new Marks({

    date: "2022-11-26",
    mark: 7,
    subjects: [subjects4, subjects1]
});

/* marks4.save(checkRespuesta) */


// estudiantes / STUDENTSSCHEMA (firstName, lastName, groups[]):

let students1 = new Students({

    firstName: "Amelia",
    lastName: "Herrero",
    marks: [marks3, marks4]
})

/* 
students1.save(checkRespuesta) */

let students2 = new Students({

    firstName: "Anita",
    lastName: "García",
    marks: [marks1, marks2]
})
/* 
students2.save(checkRespuesta) */

let students3 = new Students({

    firstName: "Ignacio",
    lastName: "Santurrón",
    marks: [marks2, marks3]
})

/* 
students3.save(checkRespuesta) */

let students4 = new Students({

    firstName: "Pilar",
    lastName: "Gómez",
    marks: [marks1, marks4]
})
/* 
students4.save(checkRespuesta) */

//USO DEL MODELO:


function checkRespuesta(err, res){

    if(err){

        console.log("Error: " + err);

    }else{

        console.log("Datos del estudiante guardados correctamente");

    }
} 

/* • Mostrar por consola:
Todas las notas de un alumno. */  //Consulta con promesas: (x id)

Students.findById("63835f32e27fa1ac6c783922")  ////ya sale!

     .then(function(student){

        console.log(student.marks);
     })
     .catch(function(){

        console.log("error");
     })

/* Todos las asignaturas de un alumno. */  /* YA FUNCIONA! */

Students.findById("63835f32e27fa1ac6c783922") 

    .then(function(asignaturas){

        console.log("Mostrando Datos del alumno"); 

        for (let i = 0; i < asignaturas.marks.length; i++){

            console.log(asignaturas.marks[i].subjects);
        }
    })
    .catch(function(){

        console.log("Error");
    })

/* Todos los profesores de un alumno. */// búsqueda por criterio con PROMESAS

Students.find({}).where("firstName").equals("Anita")   ///* ya funciona !

.then(function(profesores){ 

    console.log("Mostrando Datos del alumno");

    for (let i = 0; i < profesores[0].marks.length; i++){

        for (let index = 0; index < profesores[0].marks[i].subjects.length; index++)

            console.log(profesores[0].marks[i].subjects[index].teachers);
    }
})
.catch(function(){
    
    console.log("Error");
}) 
