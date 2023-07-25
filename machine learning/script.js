window.onload = iniciar;

function iniciar(){
    //Creamos nuestra red neuronal 
    const redNeuronal = new brain.NeuronalNetwork();
    let datos =[
        {
            "input":{"R":0.78,"G":0.9,"B":1},//celeste claro
            "output":{"claro": 1}
        },{
            "input":{"R":0,"G":0.11,"B":0.2},//Azul oscuro
            "output":{"oscuro": 1}  
        },{
            "input":{"R":0.1,"G":0.2,"B":0.3},
            "output":{"oscuro": 1}  
        },{
            "input":{"R":0.74,"G":0.78,"B":0.86},
            "output":{"claro": 1}  
        }
    ];

    redNeuronal.train(datos);
     
    let resultado = brain.likely({"R":0.57,"G":0.98,"B":0.61},redNeuronal);
    alert(resultado);
}