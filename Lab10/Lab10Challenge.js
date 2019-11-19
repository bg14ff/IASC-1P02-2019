function addition() {

  var a = document.getElementById('num1').value;

  var b = document.getElementById('num2').value;

 var output = parseFloat(a) + parseFloat(b);


document.getElementById('out').innerHTML = output;
}

function subtraction() {

  var a = document.getElementById('num1').value;

  var b = document.getElementById('num2').value;

 var output = parseFloat(a) - parseFloat(b);


document.getElementById('out').innerHTML = output;
}

function multiplication() {

  var a = document.getElementById('num1').value;

  var b = document.getElementById('num2').value;

 var output = parseFloat(a) * parseFloat(b);


document.getElementById('out').innerHTML = output;
}

function division() {

  var a = document.getElementById('num1').value;

  var b = document.getElementById('num2').value;

 var output = parseFloat(a) / parseFloat(b);

document.getElementById('out').innerHTML = output;
}
