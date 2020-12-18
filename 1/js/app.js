var num1 = prompt('inserisci il primo numero');
var num2 = prompt('inserisci il secondo numero numero');

if (parseInt(num1) > parseInt(num2)) {
  console.log('num1 ' + num1)
} else if (parseInt(num1) < parseInt(num2)) {
  console.log('num2 ' + num2);
} else {
  console.log('i numeri sono pari');
}
