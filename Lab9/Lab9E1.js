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
