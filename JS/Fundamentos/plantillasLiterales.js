//Plantillas literales o Plantillas de cadenas
// se definen con `texto`
var a="hola";
var arreglo = [1,2,3,4];

console.log(`${a}, mundo ${JSON.stringify(arreglo)}`);// esto imprimira hola, mundo [1,2,3,4]

//JSON.stringify() nos permite mostrar los arreglos mas bonitos

const usuario2 ={
    jhon:{
        edad: 34,
        correo: "asda@gmail.com"
    }
}

var informacion = `Tengo ${usuario2.jhon.edad} años`;
