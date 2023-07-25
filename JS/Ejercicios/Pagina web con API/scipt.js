window.onload=iniciar;

function iniciar(){
    let btnCargar = document.getElementById("btnCargar");
    btnCargar.addEventListener("click",clickBtnCargar)
}

async function cargarURL(url){
    let respuesta = await fetch(url);
    return respuesta.json();
}

async function clickBtnCargar(){


    let json = await cargarURL("https://api.covidtracking.com/v1/us/daily.json");
    let estadisticas = json[0];
    for (let x=0; x<listaAtributos.length; x++) {
        document.getElementById(listaAtributos[x]).innerHTML = estadisticas[listaAtributos[x]]; 
    }

}

var listaAtributos = ["date",
"states",
"positive",
"negative",
"pending",
"hospitalizedCurrently",
"hospitalizedCumulative",
"inIcuCurrently",
"inIcuCumulative",
"onVentilatorCurrently",
"onVentilatorCumulative",
"dateChecked",
"death",
"hospitalized",
"totalTestResults",
"lastModified",
"recovered",
"total",
"posNeg",
"deathIncrease",
"hospitalizedIncrease",
"negativeIncrease",
"positiveIncrease",
"totalTestResultsIncrease"]

