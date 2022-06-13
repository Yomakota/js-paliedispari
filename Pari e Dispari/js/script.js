// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.

//funzione per creare numero random
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//funzione per stabilire numero è pari o dispari
function evenOrOdd(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let userChoice = prompt('pari o dispari');
console.log('Utente ha scelto ' + userChoice);
let numberUser = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log('Numero utente: ' + numberUser);

// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
let numberPc = randomNum(1, 5);
console.log('Numero random del PC: ' + numberPc);
// Sommiamo i due numeri
let sum = numberUser + numberPc;
console.log('Somma: ' + sum);

//controllo chi ha vinto
if (evenOrOdd(sum) == true && userChoice == "pari" || evenOrOdd(sum) == false && userChoice == "dispari") {
    console.log('Hai vinto');
} else {
    console.log('PC winner');
}