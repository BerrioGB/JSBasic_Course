var articulos = [
    {name:'Televisor', costo:3000},
    {name:'Bicicleta', costo:2500},
    {name:'Celular', costo:320},
    {name:'Libro', costo:10000},
    {name:'Laptop', costo:20000},
    {name:'Audifonos', costo:500},
    {name:'Teclado', costo:1700},
]

//Metodo Filter
var articulosFiltrados = articulos.filter(function(articulos){
    return articulos.costo <= 500
})
//console.log(articulosFiltrados)

//Metodo Map
var articulosMapeados = articulos.map(function(articulos){
    return articulos.name
})
console.log(articulosMapeados)
