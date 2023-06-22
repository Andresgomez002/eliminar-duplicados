// Eliminar elementos duplicados: Dada una lista de elementos, crea una función en JavaScript que recorra la lista y elimine los elementos duplicados. Devuelve una nueva lista que contenga únicamente los elementos únicos.
let deleteDuplicados = (lista) =>{
    for(let i = 0; i < lista.length; i++){
        let duplicado = lista [i];
        let indiceDuplicado = lista.indexOf(duplicado, i + 1);
        if(indiceDuplicado !== -1){
           lista.splice(indiceDuplicado, 1);
           i--;
        }
    }
    return lista;
    }
    console.log(deleteDuplicados([1,2,3,2,4,5]));
    console.log(deleteDuplicados([1,2,1,2,2,5]));
    console.log(deleteDuplicados([1,6,6,3,5,3]));