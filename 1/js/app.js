var num1 = prompt('inserisci il primo numero');
var num2 = prompt('inserisci il secondo numero numero');

if (parseInt(num1) > parseInt(num2)) {
  console.log('il numero maggiore e il ' + num1)
} else if (parseInt(num1) < parseInt(num2)) {
  console.log('il numero maggiore e il  ' + num2);
} else {
  console.log('i numeri sono pari');
}
