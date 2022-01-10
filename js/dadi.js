
//GIOCO DADI

//1 chiedere numero da 1 a 6 all'utente tramite prompt
//2 generare numero automatico da 1 a 6
//3 calcolare quale numero è maggiore
//4 stampare risultato in pagina

//1
let userNumber = parseInt(prompt('Scegli un numero da 1 a 6'));
console.log(userNumber),
//2
let computerNumber = Mathround(Mathrandom()*6);
console.log(computerNumber)

//3
if(userNumber > computerNumber){
    console.log('you win');
} else{
    console.log('you lose');
}