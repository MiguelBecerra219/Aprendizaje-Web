

function queue(lista,element){
    lista.shift();
    lista.push(element);
    return lista;
}
lista=[1,2,3,4]
ARREGLO=queue(lista , 8)

console.log(JSON.stringify(ARREGLO))//esto muestra en consola el arreglo de una manera mas presentable