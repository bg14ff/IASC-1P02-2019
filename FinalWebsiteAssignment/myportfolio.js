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


function formOutputs(){
	console.log(document.getElementById('inputText').value);
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

function pushMe()
{
  //var frenchHello = 0();
  //var englishHello = 1();
	document.getElementById("output").innerHTML="Bonjour!";
  document.getElementById('output2').innerHTML="Au revoir!";

  //console.log("0");
//  if(output = 1){
  //  document.getElementById('ouput').innerHTML="Bonjour!";
  }
  //else{
    //document.getElementById('output').innerHTML="Hello!";
  //}
//}

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

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
