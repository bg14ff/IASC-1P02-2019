

var age = prompt ("What is your age?");

var newDate = new Date();

var thisYear = newDate.getFullYear();

var birthYear = thisYear - age;

document.getElementById('year').innerHTML = birthYear;
