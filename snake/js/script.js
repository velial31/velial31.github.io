

var field = document.getElementById("field");
var one = document.getElementById("two");

var pos = one.offsetLeft;

field.onmousemove = function(event) {
	console.log(event.offsetX);
	one.style.width = event.offsetX + "px";
}











