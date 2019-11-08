//Sets the initial colours of the three elements on page load
document.getElementById("blue").style.color="blue";
document.getElementById("green").style.color="green";
document.getElementById("red").style.color="red";


//This will output when a button is pressed
function mix(){

	var first = "#00BB00";
	var second = "BB9320";
	var third = "#AB00FF";

	document.getElementById("blue").style.color=first;
	document.getElementById("green").style.colour=second;
	document.getElementById("red").style.color=third;
}
