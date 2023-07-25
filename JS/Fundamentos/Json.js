const carros = `[
    {
        "modelo": "Ford mugstan",
        "Producion": 2010,
        "millaje": 12000
    },
    {
        "modelo": "Honda accord",
        "Producion": 2021,
        "millaje": 4560
    },
    {
        "modelo": "Ford mugstan",
        "Producion": 2016,
        "millaje": 582000
    }
]`;//por lo general los objetos de tipo json van a llegar como una cadena de caracteres


//asi convertimos un string JSON en un objeto JSON nato
let jsonData = JSON.parse(carros);


//asi hacemos busquedas entre todos los elementos del objeto JSON
let carrosNuevos = JSON.filter((carro) => carro.producion > 2010 && carro.millaje < 30000);//asi podemos hacer busquedas dentro de los objetos JSON

//asi convertimos un obeto JSON en strin para poder transportarlo por ejemplo
let carrosNuevosTXT = JSON.stringify(carrosNuevos);

//podemos modificar un archivo JSON de esta manera
//Primero traemos el fs
let fs = requiere(`fs`);

//Creamos un objeto que sera añadido al archivo
const carroNuevo = {
    modelo: "Ford mugstan",
    Producion: 2016,
    millaje: 582000
}
//convertimos el objeto en texto
const newCar = JSON.stringify(carroNuevo);

// el fs tiene la funcion para escribir archibo en donde primero pasamos el nombre del archivo en el que vamos a escribir, despues pasamos lo que queremos escribir y por ultimo una funcion en caso de que falle esta operacion, esta funcion debe recibir un parametro. 
fs.writeFile('carros.json', newCar, (error) =>{
    if(error) throw error;
    console.log(`Informacion recibida`)
});
