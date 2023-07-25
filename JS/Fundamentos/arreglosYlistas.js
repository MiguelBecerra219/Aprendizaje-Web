 var miArreglo = ["jhon", 24];
 miArreglo[0];//"jhon"
 miArreglo[1];//24

 var arregloAnidado = [["Nora",97],["Gino",78]]
 arregloAnidado[0][0];//Nora
 arregloAnidado[0][1];//97

 arregloAnidado[0][0]="Michel";//En arreglos si podemos cambiar los valores
 arregloAnidado[0][1]=[5,6,7];//tambien podemos reemplazar un elemento por otro arreglo

 arregloAnidado.push("valor");//añadimos un elemento a al arreglo este quedara de ultimo, osea en la posicion mas alta

 arregloAnidado.pop();//Borramos el ultimo elemento de un arreglo, el que tenga la posicion mas alta

 var borrado = arregloAnidado.pop();//en este caso borramos el elemento pero lo guardamos en una variable por si queremos trabajarlo individualmente

 arregloAnidado.shift();//Elimina el primer elemento del arreglo 
 var borrado = arregloAnidado.shift();//podemos borrar y tambien guardarlo en una variable

 arregloAnidado.unshift("valor");//Añadimos un nuevo elemento al inicio de la lista, todos los demas elementos se moveran una posicion

 //ARREGLOS ANIDADOS

 var misPlantas=[
    {
        tipo:"flores",
        lista:["rosas","tulipanes","dientes de leon"]
    },
    {
        tipo:"arboles",
        lista:["abeto",
        "pino",
        "abedul"
    ]
    }
 ]

 var primeraFlor = misPlantas[0].list[0];//asi accedemos a un objeto que esta dentro de una lista y despues a un elemento que es parte de otra lista que a su ves es un elemento del objeto

 //Desestruturacion

 var a,b,c;

 [a,b,c,...areglo]=[1,2,3,4,5,6];//asi asignamos los valores de un arreglo a unas variables, los sobrantes simplemente no se asignaran o si definimos un arreglo se asignaran a este

 [ , , ,...areglo]=[1,2,3,4,5,6]//esto nos permitira asignar a un arreglo los elementos de otro quitando los tres primeros