// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let userWord = prompt('Inserisci una parola'); //chiedo una parola all'utente

// creo una funzione per vedere se palindroma
function palindrome() {

    // usando una flag var che crea la parola inversa che mi serve per il confronto inserendo le lettere della parola data
    let reverseWord = '';

    // al contrario con un for che parte dalla lettera in ultima posizione regredendo alla prima
    for (let i = userWord.length - 1; i >= 0; i--) {

        reverseWord += userWord[i]; //ad ogni giro del ciclo le lettere si invertono di ordine

    }

    return reverseWord; //risultato della mia funzione
}

//confronto la parola dell'utente con la versione invertita data dalla funzione
if (userWord === palindrome()) {
    console.log(`la parola ${userWord} è palindroma`); //stampo in console se palindroma
} else {
    console.log(`la parola ${userWord} non è palindroma`); //stampo in console se non è palindroma
}
