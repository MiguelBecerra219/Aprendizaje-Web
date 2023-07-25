let botonInicioPausa = document.getElementById("boton-inicio-pausa");
let botonReiniciar = document.querySelector("#boton-reiniciar");
let cronometro = document.getElementById("cronometro");

let [horas,minutos,segundos] = [0,0,0];

let intervaloDeTiempo;
let EstadoCronometro = "pausado";

function actualizarCronometro(){
    segundos++

    if(segundos/60 == 1){
        segundos = 0;
        minutos++;

        if(minutos/60 == 1){
            minutos=0;
            horas++;
        }
    }

    let segundosConFormato = asignarFormato(segundos);
    let minutosConFormato = asignarFormato(minutos);
    let horasConFormato = asignarFormato(horas);

    cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
}

function asignarFormato(elemento){
    // if(elemento<10){
    //     elemento= "0"+elemento;
    // }
    // return elemento;
    return elemento<10 ? "0"+elemento : elemento;
}

botonInicioPausa.addEventListener("click",function(){
    if(EstadoCronometro === "pausado"){
        intervaloDeTiempo =  window.setInterval(actualizarCronometro,1000);
        botonInicioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>';
        botonInicioPausa.classList.remove("iniciar");
        botonInicioPausa.classList.add("pausar");
        EstadoCronometro = "activo";
    }else{
        window.clearInterval(intervaloDeTiempo);
        botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
        botonInicioPausa.classList.remove("pausar");
        botonInicioPausa.classList.add("iniciar");
        EstadoCronometro = "pausado";
    }
})

botonReiniciar.addEventListener("click",function(){
    window.clearInterval(intervaloDeTiempo);

    segundos=0;
    minutos=0;
    horas=0;

    cronometro.innerText = "00:00:00"
    EstadoCronometro = "pausado";
    botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
    botonInicioPausa.classList.remove("pausar");
    botonInicioPausa.classList.add("iniciar");
})