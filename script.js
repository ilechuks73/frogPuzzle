var green = "images/greenFrog.gif"
var yellow = "images/yellowFrog.gif";
var stat = document.getElementById('status')

var img = document.getElementsByTagName('img');
var imgs = Array.from(img);
var empty = null;
var t = 0
var dt = 0
var time = document.getElementById('timer')
var HTP =document.getElementById('HTP')

var timer = setInterval(function timer() {
	t += dt
	time.innerHTML = '<h1>' + t + '</h1>' + ' second(s)'
}, 1000)

function clickSquare(i) {
	dt = 1
	var clickedSquare = document.getElementById('square' + i)
	var getsrc = clickedSquare.getAttribute('src')

	if (getsrc == green) {
		var j = -1;
		var k = -2;
		console.log('no errors')
	}
	if (getsrc == yellow) {
		var j = 1;
		var k = 2;
		console.log('no err')
	}
	if (i > 4 && getsrc == yellow) {
		k = 1
		console.log('k is now 1')
	}
	if (i < 2 && getsrc == green) {
		k = 1
		console.log('k is now 1')
	}
	var s1 = document.getElementById('square' + (i + j))
	var getsrc1 = s1.getAttribute('src')
	var s2 = document.getElementById('square' + (i + k))
	var getsrc2 = s2.getAttribute('src');

	if (getsrc1 != "images/empty.gif" && getsrc2 != "images/empty.gif") {
		alert('WRONG MOVE!')
		return false
	}
	if (true) {
		isEmpty(s1, s2, getsrc, getsrc1, getsrc2)
	}
	clickedSquare.setAttribute('src', "images/empty.gif")


	isWon()

}

function move(getsrc) {
	empty.setAttribute('src', getsrc)
}

function isEmpty(s1, s2, getsrc, getsrc1, getsrc2) {
	if (getsrc1 == "images/empty.gif") {
		empty = s1
	}
	if (getsrc2 == "images/empty.gif") {
		empty = s2
	}
	if (true) {
		move(getsrc)
	}
}

function isWon() {
	if (
		imgs[0].getAttribute('src') == green &&
		imgs[1].getAttribute('src') == green &&
		imgs[2].getAttribute('src') == green &&
		imgs[3].getAttribute('src') ==
		"images/empty.gif"
	) {

		stat.innerHTML = "YOU WIN!"
		clearInterval(timer)
	}
}

function pauseGame() {
	dt = 0
}

function restartGame() {
	window.location.reload()
}

function showHTP(event) {
	HTP.classList.toggle('show')
}