window.onload = iniciar;

//Siempre que la pagina se incie
function iniciar(){
    //traemos los botones
    var btnAgregar= document.getElementById("btnAgregar");
    var btnBorrar= document.getElementById("btnBorrar");
    //Le añadimos funcionalidad cuando lo clickean
    btnAgregar.addEventListener("click", clickBtnAgregar);
    btnBorrar.addEventListener("click", clickBtnBorrar)
    //mostramos las notas que esten en el localStorage
    mostrarNotas();
}

//Cuando el boton es clickeado
function clickBtnAgregar(){
    //traemos el texto que fue ingresado en el input txtNota
    var txtNota = document.getElementById("txtNota");

    //De esta manera podemos guardar un arreglo en el localStorage
    //Primero definimos el arreglo
    var notas = [];
    //luego si ya tenemos notas en la memoria osea que es diferente de undefined los añadiremos al arreglo 
    if(localStorage.notas != undefined){
        //añadimos las notas anteriores al arreglo pasando de texto que es como se guardan en localStorage a arreglo
        notas = JSON.parse(localStorage.notas);
    }

    //Luego añadimos la nota cargada en el input 
    notas.push(txtNota.value);
    //para añadirlo en el localStorage lo convertimos en string con ayuda del JSON.stringify()
    localStorage.notas = JSON.stringify(notas)


    //Cargamos el texto en el localStorage
    localStorage.nota=txtNota.value;
    //Mostamos las notas
    mostrarNotas();
}

//Cuando queremos mostrar las notas
function mostrarNotas(){
    //traemos el divNotas 
    var divNotas = document.getElementById("divNotas");
    
    var notas =[];
    //Traemos las notas si es que hay ya guardadas
    if (localStorage.notas != undefined){
        var notas=JSON.parse(localStorage.notas);
    }
    
    //Creamos una variable donde guardaremos cada nota para despues enviarla al div
    var html = "";

    //recorremos el arreglo para extraer cada una de las notas
    for(var nota of notas){
        //Vamos guardando cada nota añadiendo un salto de linea para que se vea bien en la pagina web
        html += nota + "<br/>";
    }
    
    //le asignamos las notas que esten en en el localStorage
    divNotas.innerHTML = html;
}

function clickBtnBorrar(){
    localStorage.clear();
    mostrarNotas();
}


