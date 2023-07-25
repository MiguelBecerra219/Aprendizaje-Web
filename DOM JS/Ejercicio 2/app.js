//Seleccionar los elementos del DOM
const boton = document.querySelector("button");
const parrafoColor = document.getElementById("color");

function generarColor(){
  let digitos = "0123456789ABCDEF";
  let color = "#";

  for (let i=0; i<6; i++){
    let indiceAleatorio = Math.floor(Math.random()*16);
    color+=digitos[indiceAleatorio];
  }

  return color;
}

boton.addEventListener("click",function(){
  //Obtenemos el color
  let colorAleatorio = generarColor();
  //Acutualizamos el texto
  console.log(colorAleatorio)
  parrafoColor.textContent= colorAleatorio;
  //Actualizamos el color de fondo
  document.body.style.backgroundColor  = colorAleatorio;
});



