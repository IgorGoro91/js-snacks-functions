/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

console.log(names)
// Dichiara la funzione qui.
let iniziali = [];
function primaLettera(  ) {
    // 

    for( let i = 0; i < names.length; i++){
        // console.log(names[i][0])
        iniziali.push(names[i] [0])
    }

          
}

primaLettera()
// Invoca la funzione qui e stampa il risultato in console

console.log(iniziali);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]