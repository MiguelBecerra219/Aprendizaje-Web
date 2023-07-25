function mostrarMensaje(){ //Asi se define una funcion
    console.log("Hola mundo");
}

mostrarMensaje();//esto mostraria el mensaje

function sumar(a,b,cadena){
    suma = a+b+cadena;
    return suma;
}

sumar(8,4,"facil");//resultado 12facil

function variableLocal(a){
    var local=a; //esta variable solo sera utilizable dentro de la funcion, esta puede tener el mismo nombre de una variable global pero dentro de la funcion tendra su propio valor
    return local;
}

var cajon = variableLocal(8);//se guardara el resultado en la variable

function calcularRaizCuadrada(num){
    if(num<0){
        return undefined;
    }
    return Math.sqrt(num);
}


//generar numeros decimales aleatorios
function generarFraccionAleatoria(){
    return Math.random();//entre 0 y 1 pero nunva seran 1 exactamente 
}

//Funciones flecha
var fecha = function(){
    return new Date();
};//esto es lo mismo que esto:

const fecha = () => new Date;

const sumarTres = (x) => x+3;//asi definimos una funcion flecha
sumarTres(3);//esto dara 6

const sumar = (a,b) => {
    let num=6;
    return a+b+num;
};//asi quedaria si tenemos mas de una linea en la funcion

//valor por defecto
function sumar (x=1,y=0){
    return x+y;
}//si no se envia un parametro se usara el valor asignado


//asi podemos enviar un numero indefinido de argumentos que se aguraparan en un arreglo que tendra el nombre asignado normalmente se usa args
function miFuncion(...nombreAutilizar){

}


//ademas podemos pasar un arreglo como parametro y sus elementos se iran asignando en orden a los parametros requeridos

function prueba (x,y,z){
    return x+y+z
}

var list=[1,2,3];
prueba(...list);


var nuevoPerfil = {
    nombre: "jane doe",
    edad: 24,
    nacionalidad: "Española",
    ubicacion: "España"
}

var actualizarPerfil = ({nombre: nombrePefil, edad, nacionalidad, ubicacion}) => {
    console.log(nombrePefil)
}

actualizarPerfil(nuevoPerfil)//pasando el objeto como parametro, sus elementos seran desestructurados si los parametros tienen los mismos nombres de los elementos 
