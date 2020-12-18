var firstWord = prompt('inserisci la prima parola');
var secondWord = prompt('inserisci la seconda parola');


if ( firstWord.length > secondWord.length ) {
  console.log(secondWord + ' ' + firstWord);
} else if (firstWord.length < secondWord.length) {
  console.log(firstWord + ' ' + secondWord);
} else {
  console.log('hanno la stessa lunghezza');
}
