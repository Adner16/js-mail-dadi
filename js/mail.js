console.log('JS OK');

//MAIL


// 1 creare una array
// 2 domandare mail all'utente tramite prompt
// 3 controllare che sia nella lista
// 4 stampare nome nella console (bonus html)

//1
const listUsers = ['giovanni@gmail.com', 'antonio@gmail.com', 'pietro@gmail.com', 'francesco@gmail.com'];

//2
let emailUser = prompt('Inserisci la tua mail');
let foundEmail= false;

//3
for(let i = 0; i < listUsers.length; i++ ){
    if(emailUser == listUsers[i]){
        foundEmail= true;
    }
}

if(foundEmail){
    console.log('la tua mail è registrata' )
} else{
    console.log('utente non registrato');
}

