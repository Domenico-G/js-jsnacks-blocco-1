var numero = prompt('inserisci un numero di 4 cifre');  var nuovoNumero = 0;
if (numero.length != 4) {
  alert('non hai inserito un numero di 4 cifre');
} else {
  for (var i = 0; i < numero.length; i++) {
    nuovoNumero += parseInt(numero[i]);
  };
}
console.log('La somma è ' + nuovoNumero);
