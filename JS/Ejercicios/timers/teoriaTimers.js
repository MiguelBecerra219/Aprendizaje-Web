/*
setTimeout(mostrarMensaje, 3000); Esta funcion nos pemite enviarle como parametro otra funcion que se ejecutara despues del tiempo especificado como segundo parametro en mili segundos, esto sera ejecutado una sola ves 

function mostrarMensaje(){
alert("Hola, mundo");
}

var timer = setInterval(() => alert("CADA 1 segundo"), 1000);//Este nos permitiria ejecutar la funcion de manera ciclica 
clearInterval(timer); asi podemos apagar el timer cuadno no queramos que se repita mas

setTimeout(() => clearInterval(timer) , 10*1000);//de esta manera el timer se ejecutara solo 10 veces cada 1 segundo 
*/