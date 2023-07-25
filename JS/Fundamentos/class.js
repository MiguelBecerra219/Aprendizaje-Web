
//En las clases tambien usamos la primera en mayuscula

class TransbordadorEspacial {
    constructor(planeta){
        this.planeta = planeta;
    }
}

var zeus = new TransbordadorEspacial("Jupiter");

console.log(zeus.planeta);//Jupiter

class Mascota{
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

var miMascota = new Mascota("pepe", 4);

//privacidad

class Libro{
    constructor(autor){
        this._autor = autor;//Por convencion si un atributo tiene _ en su inicio no se deberia acceder 
    }

    get autor(){
        this._autor;
    }

    set autor(autor){
        this._autor = autor;
    }

}

const libro = new Libro("Anonimo");
console.log(libro.autor);//podemos acceder a la propiedad sin necesidad del _ inicial si primero le definimos un get, este acceso sera hara mediante el get
libro.autor="Ricardo Jaimes";//Asi usamos el set