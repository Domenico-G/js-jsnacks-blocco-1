// creo un array vuoto dove inserire i numeriù
// var numArray =  [];
//
// chiedo 5 volte all'utente di inserire un numero e li inserisco nella variabile
// for (var i = 0; i < 5; i++) {
//   number = prompt('inserisic un numero')
//   numArray.push(parseInt(number));
// }
//
// // creo una variabile dove sommare i numeri
// var somma = 0;
//
// // versione for
// // for (var i = 0; i < numArray.length; i++) {
// //   somma += numArray[i];
// // }
// // console.log('la somma dei numeri inseriti è ' + somma);

// versione while
var somma = 0;
var i = 0;

do{
var n = prompt('inserisic un numero');
somma += parseInt(n);
i++
} while (i < 5)

console.log('la somma dei numeri inseriti è ' + somma);
