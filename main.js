var cookies = 0;

function cookieClick(number) {
	cookies = cookies + number;
	document.getElementById("cookies").innerHTML = cookies;
};

var cursors = 0;

function buyCursor(){
	var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));
	if(cookies >= cursorCost){
		cursors = cursors + 1;
		cookies = cookies - cursorCost;
		document.getElementById('cursors').innerHTML = cursors;
		document.getElementById('cookies').innerHTML = cookies;
	};
	var nextCost = Math.floor(10 * Math.pow(1.1,cursors));
	document.getElementById('cursorCost').innerHTML = nextCost;
};

var grandmas = 0;

function buyGrandma(){
	var grandmaCost = Math.floor(100 * Math.pow(1.1,grandmas));
	if(cookies >= grandmaCost){
		grandmas = grandmas + 1;
		cookies = cookies - grandmaCost;
		document.getElementById('grandmas').innerHTML = grandmas;
		document.getElementById('cookies').innerHTML = cookies;
	};
	var nextgCost = Math.floor(100 * Math.pow(1.1,cursors));
	document.getElementById('grandmaCost').innerHTML = nextgCost;
};

window.setInterval(function(){
	cookieClick(cursors);
	cookieClick(grandmas*5);
}, 1000);
