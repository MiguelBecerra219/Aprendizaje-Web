//asi obtenemos los elementos del DOM como objetos en javaScript
const contenedor = document.getElementById("contenedor");
let titulo = document.getElementById("titulo");
console.log(titulo);//objeto
console.log(titulo.innerHTML);//contenido html total
console.log(titulo.innerText);//texto plano dentro del objetp
console.log(titulo.tagName);//etiqueta con la que fue definida
console.log(contenedor.innerText)
console.log(contenedor.innerHTML)

//Obtener elementos apartir de su clase
let toppings = document.getElementsByClassName("topping");//Esto nos traera un arreglo con cada uno de los objetos que pertenezcan a la clase
console.log(toppings);//arreglo de objetos 
console.log(toppings.length);//Ver la cantidad de elementos del arreglo
console.log(toppings[0]);//Accedemos al primer elemento 
console.log(toppings[0].id);//Podemnos obtener el id de un elemento


//Obtener elementos por su tagname
const elementosLI = document.getElementsByTagName("li")
console.log(elementosLI);

// .querySelector() y .querySelectorAll()
// .querySelector() nos trae el primer elemento encontrado
// .querySelectorAll() nos trae todos los elementos

const aceitunas = document.querySelector("#aceite");//document.querySelector(".topping")
let primerNaranja = document.querySelector("ul li.topping.fondoNaranja#cebolla");//las clases deben ir pegadas no debe haber un espacio antes del punto
let noMarron = document.querySelector("ul li:not(.fondoMarron");
console.log(aceitunas);
console.log(primerNaranja);
console.log(noMarron);

let noMarrones = document.querySelectorAll("ul li:not(.fondoMarron");
console.log(noMarrones);


//Asignar estilos con javaScript
let primerTopping = document.querySelector(".topping");
console.log(primerTopping.style);
primerTopping.style.backgroundColor = "blue";
primerTopping.style.color = "#adff00";
primerTopping.style.textTransform = "uppercase";

//Acceder al texto
let listaDeToppings = document.getElementById("lista");
console.log(listaDeToppings.innerText);//trae solo el texto sin espacios
console.log(listaDeToppings.textContent);//incluye los espacios de identacion
console.log(listaDeToppings.innerHTML);//toda la estructura html como texto

//Modificar texto
let tituloo = document.getElementById("titulo");
tituloo.innerText = "🍕 Mis Toppings Favoritos 🍕";

//Modificar atributos
 let enlaces = document.getElementsByTagName("a");
 console.log(enlaces[0].getAttribute("href"));
 console.log(enlaces[0].removeAttribute("href"));
 console.log(enlaces[0].setAttribute("href","https://www.youtube.com"));
 console.log(enlaces[0].getAttribute("href"));

 //Agregar y modifiar clases
 let segundoTopping = document.querySelector(".fondoNaranja");
 console.log(segundoTopping.classList);//Nos devuelve una lista con las clases del objeto
 segundoTopping.classList.add("texto-verde");//asi añadimos una clase
 console.log(segundoTopping.classList);

 //verificar si una clase existe
 console.log(segundoTopping.classList.contains("fondoMarron"));//preguntamos si tiene la clase especificada, esto devuelve un true o false

 //Eliminar una clase
 segundoTopping.classList.remove("texto-verde");


 //Crear un elemento con JS y añadirlo al DOM
 //primero traemos el elemento al que le queremos añadir algo en este caso la lista
 let listaToppings = document.getElementById("lista");
 //podemos guardar el elemento que crearemos en una variable para despues asinarlo en la funcion append
 let toppingNuevo = document.createElement("li");
 //le añadimos las clases a el nuevo element
 toppingNuevo.classList.add("topping","fondoMarron");
 //le añadimos el texto al nuevo elemento
toppingNuevo.innerText = "Queso extra creado con js";
 //añadomos el nuevo elemento
 listaToppings.append(toppingNuevo);
 

 //`Podemos borrar elementos
 toppingNuevo.remove();

 //Recorrer el DOM
console.log(listaToppings.parentElement); //o parentNode obtenemos el elemento padre o el nodo padre
console.log(listaToppings.parentElement.parentElement);//obtenemos el padre del padre
console.log(listaToppings.children);//obtenemos una lista con los elementos hijos
console.log(listaToppings.firstChild);//Este metodo trabja con nodos y nos trae el espacio que tenemos de identacion por eso se ve #text
console.log(listaToppings.children[0]);//asi podemos traer el primer elemento hijo ignorando espacios y comentarios
console.log(listaToppings.firstElementChild);//esto si trae el primer elemento
console.log(listaToppings.lastElementChild);//ultimo elemento hijo
console.log(listaDeToppings.previousElementSibling);//asi traemos el hermano anterior el que esta definico sobre lista de topings en el html
console.log(listaDeToppings.nextElementSibling);//obtenemos el siguiente elemento hijo 
/*
Si omitimos la palabra Element trabajaremos con nodos
*/
console.log(listaToppings.firstElementChild.firstElementChild);//asi obtenemos el primer hijo del primer hijo de la listaToppings


/*
Eventos en el DOM
son las cosas que ocurren en el sitio web como resultado de la interaccion con el usuario o por otra causa como cambios en el estado del dispositivo o de la ventan. Ejemplos de eventos son:
-Clic
-Precionar una tecla en el teclado
-Arrastar (por ejemplo arrastar una imagen para subirla)
-gestos en pantallas tactiles
entre muchos otros

Conceptos importantes de eventos

-Elemento target(blanco o objetivo): es el elemento que recibira el evento recibira la orden del usuario por ejemplo recibira el click, un ejemplo de target puede ser un boton.
-Trigger: es la accion que se realizara sobre el target para desencadenar el evento. 
-Even Handler: esta es la funcion que se ejecutara cuando ocurra el evento.
-Event Listener: la asociacion que hay entre el evento y la funcion que lo va a manejas se llama event listener, cuando hay uno de estos estamos escuchando el evento y se sabra que cuando ocurra un evento se ejecutara una funcion determinada. 
*/

var listaTop = document.getElementsByClassName("topping");
//Asociacion entre el elemento y la funcion
//usamos el addEventLisener en el objeto al que le queremos añadir el evento y entre parentecias pasamos el evento que esperamos y la funcion que queremos que se ejecute sin paréntesis, la duncion recibira en su parametro un objeto de tipo evento con toda la informacion hacerca del evento 
albahaca.addEventListener("click",mostrarClic);

function mostrarClic(evento){
    //recibimos el evento y podemos ingresar a sus propiedades por ejemplo al elemento sobre el cual se esperaba la accion "target" y despues al texto de este
    console.log(evento.target.innerText);
}

//teniendo todos los elementos que tienen la clase topping podemos añadirles el evento de esta manera
for (var topping of listaTop){
    topping.addEventListener("click",mostrarClic)
}

/**
 Asignacion en flecha
for (var topping of listaTop){ 
    topping.addEventListener("click", (evento)=> console.log(evento.target.innerText);)
}

 */



