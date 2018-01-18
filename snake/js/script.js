

var photo = document.getElementById("photo");
var one = document.getElementById("two");

var pos = one.offsetLeft;


window.onload = function() {
photo.onmousemove = function(event) {
	console.log(event.offsetX);
	one.style.width = event.offsetX + "px";
}
}









