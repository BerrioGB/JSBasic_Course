var estudiantes =["Maria","Rosa","Rosalba"]

function saludarEstudiante(estudiante){
    console.log("Hola "+ estudiante)
    //console.log(`Hola, ${estudiante}`)
}

for(var i = 0 ; i < estudiantes.length ; i++)
{
    saludarEstudiante(estudiantes[i])
}
 //Other way
 //for(var estudiante of estudiantes){saludarEstudiante(estudiante)}