// document.getElementsByClassName('element-class')[0].innerText = 'fizz';
// document.getElementsByClassName('element-class')[1].innerText = 'fizz';
// document.getElementsByClassName('element-class')[2].innerText = 'buzz';
// document.getElementsByClassName('element-class')[3].innerText = 'fizz';
// document.getElementsByClassName('element-class')[4].innerText = 'fizz';

var element  = document.getElementsByClassName('element-class');

for (var i = 0; i < element.length; i++) {
  if (element[i] !== element[2]) {
    element[i].innerText = 'frizz';
  } else {
    element[i].innerText = 'buzz';
  }
}
