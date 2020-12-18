// creo una lista di nomi

var invitati = ['lorenzo', 'luca', 'giuseppe', 'antonio', 'francesco', 'luisa', 'stefania', 'robero']

// chiedo all'utente il nome e lo confoto con la lista e stampo un risultato di acesso

var nome = prompt('inserisci il tuo nome');
var conferma = false;

for (var i = 0; i < invitati.length; i++) {
  if (nome === invitati[i]) {
   conferma = true;
  }
}

if (conferma) {
  console.log('puoi entrare');
} else {
  console.log('non puoi entrare');
}
