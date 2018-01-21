var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");

var firstSum = document.getElementById("sum-1");
var secondSum = document.getElementById("sum-2");
var thirdSum = document.getElementById("sum-3");

var sum = document.getElementById("sum");




first.oninput = function() {
		firstSum.innerHTML = first.value;
		result();
		
	}

second.oninput = function() {
		secondSum.innerHTML = second.value;
		result();
		
	}

third.oninput = function() {
		thirdSum.innerHTML = third.value;
		result();
		
	}

function result() {

	var r = parseInt(first.value) + parseInt(second.value) + parseInt(third.value);
	console.log(r);
	sum.innerHTML = r;
	

}

	






