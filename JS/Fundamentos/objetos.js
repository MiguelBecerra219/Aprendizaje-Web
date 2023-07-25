var miPerro ={ //asi definimos un objeto y sus propiedades
    "nombre": "gino",
    "edad": 5,
    "peso": 6,
    "raza": "beagle",
    "apodos": ["gin","ino","chico"]
};

miPerro.nombre;//asi asignamos a una propiedad en un objeto
miPerro["edad"];
a="edad";
miPerro[a];//podemos usar variables para acceder a las propiedades

miPerro.peso = 8;//actualizacion de una propiedad
miPerro.apodos.push("niño");//podemos usar los operadores de array si la propiedad es de este tipo

miPerro.sexo = "masculino";//podemos crear una propiedad nueva asi
miPerro[sexo] = "femenino";//asi tambien podemos añadir una propiedad

delete miPerro.sexo;//asi eliminamos una propiedad

//podemos usarlo para reemplazar un swhich

miPerro.hasOwnProperty("edad");//true estamos mirando si el objeto tiene la propiedad

//OBJETOS COMPLEJOS 

var arregloDeObjetos = [
    {
        "nombre": "gino",
        "edad": 5,
        "peso": 6,
        "raza": "beagle",
        "apodos": ["gin","ino","chico"]  
    },
    {
        "nombre": "can",
        "edad": 8,
        "peso": 9,
        "raza": "chiguagua",
        "apodos": ["ca","n","i"]  
    },
]

arregloDeObjetos[0]["edad"]
arregloDeObjetos[0].nombre;//accedemos a la propiedad nombre del primer objeto


//OBEJTOS ANIDADOS

var miPerro ={ //asi definimos un objeto y sus propiedades
    "nombre": "gino", 
    "edad": 5,
    "peso": 6,
    "raza": "beagle",
    "apodos": ["gin","ino","chico"],
    "hijo": {
        "perroHijo":{
            "nombre": "can",
            "edad": 8,
            "peso": 9,
            "raza": "chiguagua",
            "apodos": ["ca","n","i"] 
        },
        "perraHija":{
            "nombre": "estrella",
            "edad": 8,
            "peso": 9,
            "raza": "chiguagua",
            "apodos": ["ca","n","i"] 
        }

    }
};

miPerro.hijo.perroHijo.nombre;//asi podemos acceder a una propiedad de un objeto que esta dentro de un objeto 
miPerro.hijo.perroHijo["edad"];


const usuario ={
    nombre: "Gino",
    edad: 34
}

var {nombre,edad}=usuario;//asignara el nombre a la variabel nombre y la edad a la variable edad


const usuario2 ={
    jhon:{
        edad: 34,
        correo: "asda@gmail.com"
    }
}

var {jhon: {edad: edadDelUsuari,correo: correoDelUsuario}}=usuario2;//de esta manera asignamos a dos variables los elementos que estan en un objeto que esta dentro de otro y ademas le damos nombres a las variables 

//crear objetos de forma concisa
var crearObjeto = (nombre, edad ,idioma)=> ({nombre, edad, idioma});


var persona = {
    nombre: "Isabel",
    presentarse: function(){
        return `Hola mi nombre es ${this.nombre0};`
    }
};

console.log(persona.presentarse());// Hola mi nombre es isabela

//esto se puede simplificar mas asi:.

var persona = {
    nombre: "Isabel",
    presentarse(){
        return `Hola mi nombre es ${this.nombre0};`
    }
};

