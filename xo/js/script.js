var f = document.getElementById("cont");

window.onload = function () {
	for (var i = 0; i < 9; i++) {
	f.innerHTML += "<div class='block'></div>"

}
}

var t = true; 
f.onclick = function (event) {
	console.log(event.target.className);
	if (event.target.className == "block") {
		if (t == true) {
		event.target.innerHTML = "X";
		t = false;
	}
		else {
			event.target.innerHTML = "0";
			t = true;
		}
	}
	check();
}


var block = document.getElementsByClassName("block");
var x = "X";
var o = "0";

function check() {
	
		if (block[0].innerHTML == x && block[1].innerHTML == x && block[2].innerHTML == x || 
			block[3].innerHTML == x && block[4].innerHTML == x && block[5].innerHTML == x ||
			block[6].innerHTML == x && block[7].innerHTML == x && block[8].innerHTML == x ||
			block[0].innerHTML == x && block[4].innerHTML == x && block[8].innerHTML == x ||
			block[2].innerHTML == x && block[4].innerHTML == x && block[6].innerHTML == x ||
			block[2].innerHTML == x && block[5].innerHTML == x && block[8].innerHTML == x ||
			block[0].innerHTML == x && block[3].innerHTML == x && block[6].innerHTML == x) 
		{
			alert("Победили крестики!");
		}

		else if (block[0].innerHTML == o && block[1].innerHTML == o && block[2].innerHTML == o || 
			block[3].innerHTML == o && block[4].innerHTML == o && block[5].innerHTML == o ||
			block[6].innerHTML == o && block[7].innerHTML == o && block[8].innerHTML == o ||
			block[0].innerHTML == o && block[4].innerHTML == o && block[8].innerHTML == o ||
			block[2].innerHTML == o && block[4].innerHTML == o && block[6].innerHTML == o ||
			block[2].innerHTML == o && block[5].innerHTML == o && block[8].innerHTML == o ||
			block[0].innerHTML == o && block[3].innerHTML == o && block[6].innerHTML == o) 
		{
			alert("Победили нолики!");
		}
	
}






