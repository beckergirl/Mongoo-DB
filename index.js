// reto 1 & 2 => Día 3 (mongo)

//USO DEL MODELO:

const mongoose = require("mongoose");
const Teacher = require("./teacherMDB");
const Marks = require("./marksMBD")



mongoose.connect('mongodb+srv://Becker:Becker82@cluster0.ta8owdb.mongodb.net/codenotch5',
                {useNewUrlParser: false, useUnifiedTopology: false});


                // base de datos: CODENOTCH4 (TeacherSchema: teacher_first_name, teacher_last_name)
                // (MarksSchema: id, date, mark (una nota por alumno), student_first_name, student_last_name, group_name, subject_name, teacher[])

//USO DEL MODELO:

/* profesores / Teacher: */

let teacher1 = new Teacher({

    teacher_first_name: "Amparo",
    teacher_last_name: "Barroso"
});

/* teacher1.save(checkRespuesta); */

let teacher2 = new Teacher({
    
    teacher_first_name: "David", 
    teacher_last_name: "Maestre"
});

/* teacher2.save(checkRespuesta); */

let teacher3 = new Teacher({
    
    teacher_first_name: "Ignacio", 
    teacher_last_name: "Neto"
});

/* teacher3.save(checkRespuesta); */

let teacher4 = new Teacher({
    
    teacher_first_name: "Estefanía", 
    teacher_last_name: "Barro"
});

/* teacher4.save(checkRespuesta); */

//USO DEL MODELO:

/* notas / Marks: */

let mark1 = new Marks({
    
    date: "2022-09-10",
    mark: 10,
    student_first_name: "Anita",
    student_last_name: "Alonso",
    group_name: "Full Stack, full time",
    subject_name: "Fundamentos de la programación",
    teachers: [teacher1, teacher3]
});

/* mark1.save(checkRespuesta); */

let mark2 = new Marks({
    
    date: "2021-09-10",
    mark: 7,
    student_first_name: "Amparo",
    student_last_name: "Hernández",
    group_name: "Full Stack, part time",
    subject_name: "Maquetación, css",
    teachers: [teacher2, teacher4]
});

/* mark2.save(checkRespuesta); */

let mark3 = new Marks({
    
    date: "2021-09-10",
    mark: 5,
    student_first_name: "Junior",
    student_last_name: "Sanchez",
    group_name: "Full Stack, part time",
    subject_name: "Bases de datos, Mongo",
    teachers: [teacher1, teacher2]
});

/* mark3.save(checkRespuesta); */

let mark4 = new Marks({
    
    date: "2022-09-10",
    mark: 8,
    student_first_name: "Dionisio",
    student_last_name: "Carnicero",
    group_name: "Full Stack, full time",
    subject_name: "Fundamentos de la programación",
    teachers: [teacher1, teacher3]
});

/* mark4.save(checkRespuesta); */

let mark5 = new Marks({
    
    date: "2019-09-10",
    mark: 7,
    student_first_name: "David",
    student_last_name: "López",
    group_name: "Full Stack, part time",
    subject_name: "Bases de datos, Mongo",
    teachers: [teacher2, teacher4]
});

/* mark5.save(checkRespuesta); */

let mark6 = new Marks({
    
    date: "2019-09-10",
    mark: 4,
    student_first_name: "Armando",
    student_last_name: "Herrero",
    group_name: "Full Stack, full time",
    subject_name: "Bases de datos, Mongo",
    teachers: [teacher3, teacher4]
});

/* mark6.save(checkRespuesta); */

/////////////////////// Reto 1 ///////////////////////

// IMPLEMENTAR TODOS LOS PUNTOS CON NODE :
/* • Calcular la nota media de los alumnos de una asignatura concreta. */

/* Marks.aggregate([{ $match: { subject_name:"Bases de datos, Mongo" }},
                 { $group: { "_id": null, "Nota Media de Bases de datos, Mongo":
                 { "$avg": "$mark" }}
                }])

    .then(function(result){

        console.log(result);
    })
    .catch(function(error){

        console.log(error);
    }); */

//imprime: [ { _id: null, 'Nota Media Bases de datos, Mongo': 6 } ]

/* • Calcular el número total de alumnos que hay en el bootcamp incluyendo repetidos. */
/* 
Marks.aggregate([{ $count: "total de alumnos" }]) //// no me da nada

     .then(function(result){

         console.log(result);
    })
     .catch(function(error){

         console.log(error);
    }); */

//imprime: [ { 'total de alumnos': 6 } ]

/* • Listar el nombre y los apellidos de todos los alumnos incluyendo repetidos. */

/* Marks.aggregate([{ $project: { "student_first_name": 1,
                               "student_last_name": 1 }}
                ])

     .then(function(result){

         console.log(result);
     })
     .catch(function(error){

         console.log(error);
     }); */

//imprime!! está correcto

/* • Listar el nombre y los apellidos de todos los profesores incluyendo repetidos. */

/* Marks.aggregate([{ $unwind: "$teachers" }, ///falta comprobación
                 { $project: { "teachers.teacher_first_name": 1,
                               "teachers.teacher_last_name": 1 }}
                ])

    .then(function(result){

            console.log(result);
    })
    .catch(function(error){
                       
            console.log(error);
    }); */


/* • Mostrar el número total de alumnos por grupo ordenados por grupo en orden inverso al alfabeto. */
//NO ENTIENDO BIEN POR GRUPO EN ORDEN INVERSO AL ALFABETO! ENTIENDO que la P ( part time ) antes que la F (full time)

/* Marks.aggregate([{$group: {"_id": {"Alumnos por grupo" : "$group_name"},
                           "Número de alumnos": {"$sum": 1}}},
                          {"$sort": {"_id": -1}}
                ]) /// imprime el total de alumnos por grupo, dos grupos, 3 alumnos por cada uno.               

    .then(function(result){

            console.log(result);
    })
    .catch(function(error){
                       
            console.log(error);
    }); */

/* • Obtén el top 5 de los nombres de las asignaturas cuya nota media sea mayor que 5. */

/* Marks.aggregate([{ $group: { "_id": "$subject_name",
                             "Nota Media": {"$avg": "$mark"}}},
                           { $match: {"Nota Media": {"$gt": 5}}},
                           { "$sort": { "Nota Media": -1}},
                           { $limit: 5 }])

    .then(function(result){

        console.log(result);
    })
    .catch(function(error){
                                       
        console.log(error);
    }); */

// imprime: { _id: 'Fundamentos de la programación', Nota Media: 9 },
          //{ _id: 'Maquetación, css', Nota Media: 7 },
          //{ _id: 'Bases de datos, Mongo', Nota Media: 6 }


 /*  • Calcular el numero de profesores que hay por cada asignatura incluyendo repetidos. */

/*  Marks.aggregate([{ $unwind: "$teachers"},
                  { $group: { "_id": {"Asignatura": "$subject_name"},
                                      "Número de profesores": {"$sum": 1}}  
                  }])

    .then(function(result){

        console.log(result);
    })
    .catch(function(error){
                                       
        console.log(error);
    }); */ //imprime correcto!


// USO DEL MODELO:
/* guardar todos los datos: */

function checkRespuesta(err, res){

    if(err){

        console.log("Error: " + err);

    }else{

        console.log("Datos guardados correctamente");
    }
}
/////////////////////// Reto 2 ///////////////////////

/* • Obtén el nombre, apellido y la nota de los alumnos que tengan una nota mayor de 8
o la nota tenga fecha del año pasado o anterior. */

/* Marks.aggregate([{ $match: { "$or":[{ "mark": {"$gt": 8}},
                 { "date": { "$lte":"2021-09-10" }}]}},
                 { $project: { "student_first_name": 1, "student_last_name": 1, "mark": 1, "_id": 0 }}
                ])

    .then(function(result){         

        console.log(result);
    })
    .catch(function(error){
                                                   
            console.log(error);
    }); */
/// imprime: mark: 10,
           //student_first_name: 'Anita',
           //student_last_name: 'Alonso'

/* • Obtén la media de las notas que se han dado en el último año por asignatura. */

/* Marks.aggregate([{ $match: {"date":{ "$gte": new Date("2021-09-10")}}},
                 { $group: {"_id":{ "Asignatura": "$subject_name" }, "Nota Media": {"$avg": "$mark"}}
                 }])

    .then(function(result){

        console.log(result);
    })
    .catch(function(error){
                                                   
            console.log(error);
    }); */
// imprime: 

    //{ _id: { Asignatura: 'Bases de datos, Mongo' }, 'Nota Media': 5 },
    
    //{_id: { Asignatura: 'Fundamentos de la programación' },
    //'Nota Media': 9

    //{ _id: { Asignatura: 'Maquetación, css' }, 'Nota Media': 7 }


/* • Obtén la media aritmética de las notas que se han dado en el último año por nombre de alumno. */

Marks.aggregate([{ $match: {"date":{"$gte": new Date("2021-09-10") }}},
                 { $group: { "_id": {"Nombre de alumno": "$student_first_name"}, "Media": {"$avg": "$mark" }}
                 }])

    .then(function(result){

        console.log(result);
    })
    .catch(function(error){
                                                   
            console.log(error);
    }); 
 // imprime:    // { _id: { 'Nombre de alumno': 'Dionisio' }, Media: 8 },
                 //{ _id: { 'Nombre de alumno': 'Anita' }, Media: 10 },
                 //{ _id: { 'Nombre de alumno': 'Junior' }, Media: 5 },
                 //{ _id: { 'Nombre de alumno': 'Amparo' }, Media: 7 }

/* • Obtén los nombres de los alumnos y la cantidad total de asignaturas por alumno cuyo profesor sea uno que elijáis. */

Marks.aggregate([{ $unwind: "$teachers"}, 
                 { $match: {"teachers.teacher_first_name":"David"}}, 
                 { $group: {"_id": { "Alumnos": "$student_first_name" },"value": {"$sum": 1}}}
                ])

    .then(function(result){

        console.log(result);
    })
    .catch(function(error){
                                                   
            console.log(error);
    }); 

    // imprime: // { _id: { Alumnos: 'Junior' }, value: 1 },
                 //{ _id: { Alumnos: 'Amparo' }, value: 1 },
                 //{ _id: { Alumnos: 'David' }, value: 1 }