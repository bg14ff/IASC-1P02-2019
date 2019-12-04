function liveTime(){
var todayDate = new Date();
  var nowHour = todayDate.getHours();
  var nowMinutes = todayDate.getMinutes();

console.log(nowHour+":"+nowMinutes);
if(nowMinutes < 10){
  document.getElementById('myClock').innerHTML=nowHour+":0"+nowMinutes;
}
else{
  document.getElementById('myClock').innerHTML=nowHour+":"+nowMinutes;
}

setTimeout(liveTime,60000);
}
//cite Tynan who helped me learn to get the time to 'update' every 60 seconds

function date()
{document.getElementById('para').innerHTML=Date();
}
//for submit of form info
function buttonClick(){
  console.log("The visitor's first name is: " +document.getElementById('fname').value);
  console.log("The visitor's last name is:" +document.getElementById('lname').value);
  console.log("The visitor's country is:" +document.getElementById('country').value);
  console.log("The visitor's message to me is:" +document.getElementById('message').value);
}

//console.log(todayDate);

//var nowHour = todayDate.getHours();
//var nowMinutes = todayDate.getMinutes();



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

function submitInfo()
{
  console.log(document.getElementByClass(div).value);
}

function formOutputs(){
	console.log(document.getElementById('inputText').value);
}

function birthYear(){

  var age = prompt ("What is your age?");

  var newDate = new Date();

  var thisYear = newDate.getFullYear();

  var birthYear = thisYear - age;

  document.getElementById('year').innerHTML = birthYear;
}




//This will output the punchline when a button is pressed
//how I learned to have the gif open after the punchline cite https://stackoverflow.com/questions/9596887/display-an-image-in-a-div-with-javascript
function theRest()
{
  //this will pop up upon clicking punchline button
alert("ALERT! This joke may induce laughter, or tears!");
document.getElementById("output2").innerHTML="Because he wanted to be a hot dog!";
document.getElementById("Jerry").innerHTML='<img src="https://media.tenor.com/images/cdb327ec053535ce6c41b1c0f8bc4a7d/tenor.gif" alt="Tom and Jerrys Jerry Laughing"/>'

}

//This will output the punchline when a button is pressed
function theRest2()
{
  //this will pop up upon clicking punchline button
  alert("ALERT! This joke may induce laughter, or tears!");
document.getElementById("output2").innerHTML="Because she's always running away from the ball!";
document.getElementById('Cinderella').innerHTML='<img src="https://media0.giphy.com/media/l0MYNCdLv5GyPw0Bq/giphy.gif" alt="Kramer Laughing at Cinderella Joke"/>'
}


//A Function to printout Bonjour! when called
var frenchHello = false;
var englishHello = true;
function pushMe()
{
if(englishHello){//if I put an ! in front of englishHello it would be asking opposite ie is it false
	document.getElementById('output').innerHTML="Bonjour!";
  document.getElementById('output2').innerHTML="Au revoir!";
englishHello = false;
frenchHello = true;
  }
else {
  document.getElementById('output').innerHTML="Hello!";
  document.getElementById('output2').innerHTML="Goodbye!";
  englishHello = true;
  frenchHello = false;
  }
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
