let nome;
let cognome;
let colore;
let eta;
let html;
let password ;
let nnt;

nome = prompt('Scrivi il tuo Nome?');
cognome = prompt('Scrivi il tuo Cognome');
colore = prompt('Scrivi il tuo colore preferito');
eta = prompt('Scrivi la tua età');

password = nome + cognome + colore + eta;


console.log( password);
console.log(typeof password);

document.getElementById('psw').innerHTML = password;

// ntt =  ${password};


// elm = document.getElementById('password');
// elm = ntt;
