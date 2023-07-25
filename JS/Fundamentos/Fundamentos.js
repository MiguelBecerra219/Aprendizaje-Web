// comentario

/*
comentario
varias
lineas
*/

/*tipos de datos:
undefined, null, boolean, string, symbol, number y object*/

var miNombre = "miguel"; //inicializacion de variable con una cadena de caracteres
console.log(miVariable);//Imprimir en consola

miVariable = 10;//cambiar el valor de la variable
console.log(miVariable);

var a;//variable con valor no asignado, osaea undefined
console.log(a);//undefinde
a=12;//asignacion de valor
console.log(a);//12

var b=a;//podemos asignar el mismo valor de una variable a otra

//Divicion
a=3/0; //Da como resultado infinity

//Resto %
a=4%2; //=0

//aumentar en uno
a=1;
a++;//=2

//suma con la misma variable
a+=10;//


//reducir en uno
a=2;
a--;//=1

//resta con la misma variable
a-=10;

//multiplicacion con la misma variable
a*=2;

//divicion con la misam varibale
a/=2;

//cadena de caracteres
var nombre = "alan mark";//cada letra y el espacio son caracteres
var nombre2 = 'maria de la rosa';//tambien podemos usar comillas simples

var miCadena = "soy una cadena de caracteres \"con comillas\"";//ponemos una barra invertida antes de cada comilla que queremos que sea un caracter de esta manera podemos usar las comillas dentro de una cadena de caracteres

var miMeta;
miMeta = 'Aprender JS con "freeCodeCamp"';//podemos usar las comillas simples para usar comillas dobles dentro de una cadena de caracteres y viceversa


/*secuencias de escape

codigo  /  Resultado
\'         comilla simple
\"         comillas dobles
\\         barra invertida
\n         nueva linea
\r         retorno de carro
\t         tabulacion
\b         retroceso
\f         salto de pagina

*/

var nombreCompleto = "Alan" + " Turing";
// = Alan Turing
var nombreCompleto = "Alan" + " " + "Turing";
// = Alan Turing

var verbo = "Programar";
var mensaje ="Estoy aprendiendo a "+ verbo + " con freeCodeCamp";

// con texto tambien podemos usar los += -=

var miCadena;
miCadena = "A"
miCadena.length //ver la longitud de la cadena en este caso 1
miCadena ="A B"// Resultado3 ya que cuenta los espcaios

miCadena[2]//Acedemos al caracter en la posicion 2 osea la B

miCadena[0]="a"//Esto no se puede hacer ya que los corchetes solo nos permiten consultar el valor

miCadena[10]//esto dara como resultado undefined ya que no hay nada en la posicion 

miCadena[miCadena.length-1]//Esto permite ir al ultimo caracter de la cadena osea la B ya que la operacion es 3-1=2 y estariamos consultando la posicion 2

console.log(true);//true y false deben ser usados todo en minuscula

console.log(4 == 4);//true == es el operador de comparacion para ver si son iguales los elementos el resultado es booleano
//IMPORTANTE no sirve para comprar arreglos
console.log(4 == "4");//true ya que ambos elementos se convierten a un tipo de dato comun para comprar

console.log(4 === "4");//false ahora se comparara el valor y el tipo de datos, ambos deben ser iguales para que el resultado sea true

console.log(4 != "4");//false tambien se pueden comparar cadenas de caracteres 

console.log(4 !== "4");//true aqui tambien compara los tipos de datos

10>9;//true
10<9;//false 
"B">"A";//true ya que se le asgnaria el valor de su posicion en el alfabeto 2>1

"ACB">"ABC";//true comparara una por una las letras asta encontrar dos diferentes y ahi se ejecutara la operacion

"AB">"A";//true ya que tiene mas caracteres

"mundo">"hola";//true ya que m va despues que h entonces es mayor

5>=5;//true

true && true;//true asi se usa el and

true || false;//true asi se usa el or

!true//false asi se usa el not
!(true || false )//false

//generar nuemeros enteros aleatroios
var numeroAleatorio= Math.floor(Math.random()*20)// ya que si tenemos el numero decima 0.99 y lo multiplicamos por 20 dara 19.8 y con el floor quitara los decimales dejando el 19

//generar nuemos aletorios en un rango

Math.floor(Math.random()*limiteSuperior-limiteInferior+1)

// convertir cadena 
var texto="5";
var numero= parseInt(texto);

parseInt(110111,2);//55 convierte el numero en sistema binario a entero debemos poner el nuemro y depsues el numero en el que se basa su sitema


//var vs let

var campista ="James";
var campista ="David"; //var nos permite definir las variables dos veces

let campista ="James";
let campista ="David"; //esto no esta permitido ya que let solo deja definir una ves la variable apartir de ahi solo podriamos cambiar su valor c
campista ="Andrea"

//Ademas si usamos let en algun condicional o siclo solo dejara usarlas dentro de esta operacion, afuera no estaran definidas.

//const
const miConstante="35";//este valor jamas podra ser reasignado y se debe inicializar siempre con el valor no se puede asignar despues

const arreglo= [1,2,3,4];
arreglo[0]=7;// no podemos añadir mas elementos pero si podemos cambiar los elementos del arreglo

//conjelar un objeto para que no se pueda modificar
let lt=[1,2,3,4,5];
Object.freeze(lt);//ya no se podran hacer cambios en esta lista



