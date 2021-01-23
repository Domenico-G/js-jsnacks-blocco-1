var elementChecked = document.getElementsByClassName('ingredient-container')[0].getElementsByTagName('input');

var ingredients = '';

document.getElementById('button-submit').addEventListener('click', function() {
  for (var i = 0; i < elementChecked.length; i++) {
    if (elementChecked[i].checked === true) {
      ingredients += (elementChecked[i].defaultValue + ' ');
    }
  }
  alert(ingredients);
})
