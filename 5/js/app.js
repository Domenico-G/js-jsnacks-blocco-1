// chiedo all'utente un numero per 6 volte
var array = [];
var numero

for (var i = 0; i < 6; i++) {
  numero = parseInt(prompt('inserisci un numero'));
  if (numero % 2 !== 0 )  {
    array.push(numero)
  }
}
