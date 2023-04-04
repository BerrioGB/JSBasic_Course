var estudiantes =["Maria","Rosa","Rosalba"]

function saludarEstudiante(estudiante){
    console.log("Hola "+ estudiante)
    //console.log(`Hola, ${estudiante}`)
}

while(estudiantes.length>0){

    var estudiante = estudiantes.shift();
    saludarEstudiante(estudiante)
}