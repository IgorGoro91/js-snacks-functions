/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function estraiNomi( array, lettera){

    const arrayNomi = [];

    
    
    for ( let i = 0; i < array.length; i++){
        if( array[i][0].toUpperCase() === lettera.toUpperCase()){
            arrayNomi.push(array[i])
        }    
    }

    return arrayNomi;

}
// Invoca la funzione qui e stampa il risultato in console

console.log(estraiNomi(names , "L"))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]