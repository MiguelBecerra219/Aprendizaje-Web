//traemos los elementos necesarios
const inputRojo= document.getElementById("rojo");
const inputVerde= document.getElementById("verde");
const inputAzul= document.getElementById("azul");

const textoRojo= document.getElementById("texto-rojo");
const textoVerde= document.getElementById("texto-verde");
const textoAzul= document.getElementById("texto-azul");

//sacamos por primera ves los valores de los colores
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

//añadimos el texto inicial con el valor de los colores 
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

//funcion para actualizar el color de fondo
function actualizarColor(rojo,verde,azul){
  const colorRGB = `rgb(${rojo},${verde},${azul})`;
  document.body.style.backgroundColor = colorRGB;
}

//actualizar rojo
inputRojo.addEventListener("change",(e)=>{
  let rojo= e.target.value;
  textoRojo.innerText= rojo;
  actualizarColor(rojo,verde,azul);
});

//actualizar verde
inputVerde.addEventListener("change",(e)=>{
  let verde= e.target.value;
  textoVerde.innerText= verde;
  actualizarColor(rojo,verde,azul);
});

//actualizar azul
inputAzul.addEventListener("change",(e)=>{
  let azul= e.target.value;
  textoAzul.innerText= azul;
  actualizarColor(rojo,verde,azul);
});