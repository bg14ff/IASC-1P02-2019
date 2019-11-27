
function date()
{document.getElementById('para').innerHTML=Date();
}


var todayDate = new Date();
console.log(todayDate);

var nowHour = todayDate.getHours();
var nowMinutes = todayDate.getMinutes();

console.log(nowHour+":"+nowMinutes);

//Run when the page is loaded. get date the page was loaded

  var start = new Date();

  //Function to figure out difference of seconds when the button is pressed

function stopTime(){

  //Create a new variable called stop and set it equal to the date when the button is ptressed
var stop = new Date();

//Create a new variable called stopMilli and set it equal to the number of milliseconds when we stopped

  var stopMilli = stop.getTime();
  //create a new variable called startMilli and set it to equal the number of milliseconds when we started

var startMilli = start.getTime();

var difference = stopMilli - startMilli;

//divide our millisecons by 60 to make iy a difference in seconds

difference = difference / 600;

//Create a pop up to the page with the nymber of seconds using our difference variable

alert("It has been: "+difference+" seconds");

}


function formOutputs(){
	console.log(document.getElementById('inputText').value);
}
//this will pop up upon loading and refreshing
alert("ALERT! This website may induce laughter, or tears!");

//This will output the punchline when a button is pressed
function theRest()
{

document.getElementById("output2").innerHTML="Because he wanted to be a hot dog!";
}

//This will output the punchline when a button is pressed
function theRest2()
{

document.getElementById("output2").innerHTML="Because she's always running away from the ball!";
}


//A Function to printout Hurrah! when called

function pushMe()
{
	document.getElementById("output").innerHTML="Bonjour!";
}


//calculator
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
