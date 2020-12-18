var firstWord = prompt('inserisci la prima parola');
var secondWord = prompt('inserisci la seconda parola');


if ( firstWord.length > secondWord.length ) {
  console.log(secondWord);
  console.log(firstWord);
} else if (firstWord.length < secondWord.length) {
  console.log(firstWord);
  console.log(secondWord);
} else {
  console.log('hanno la stessa lunghezza');
}
