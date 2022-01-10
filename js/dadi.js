
//GIOCO DADI

//1 chiedere numero da 1 a 6 all'utente tramite prompt
//2 generare numero automatico da 1 a 6
//3 calcolare quale numero è maggiore
//4 stampare risultato in pagina (bonus html)

//1 //4
let userNumber = parseInt(prompt('Scegli un numero da 1 a 6'));
console.log(userNumber);
const result = document.getElementById('display-result');
//2
let computerNumber = Math.floor(Math.random()*6 + 1 );
console.log(computerNumber)

//3
if(userNumber > computerNumber){
    result.innerHTML ='YOU WIN';
    console.log('you win');
} else if(userNumber == computerNumber){
    result.innerHTML = 'DRAW';
    console.log('pareggio');
}
else{
    result.innerHTML = 'YOU LOSE';
    console.log('you lose');
}