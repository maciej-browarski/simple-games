const ballResult = [document.getElementById("b1"), document.getElementById("b2"), document.getElementById("b3"), document.getElementById("b4"), document.getElementById("b5"), document.getElementById("b6")];
const playBtn = document.getElementById("play-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");
const coupon = document.getElementById("coupon");
const reset = () => {for (let x = 0; x < 6; x++) {ballResult[x].innerText = "$";}}
const clear = c => {c.innerText = "";}
const balls = () => {let a = []; for (let x = 1; x < 50; x++) {a.push(x);} return a;}
const sixBalls = () => {
	const b = 6; let a = [];
	for (let x = 1; x <= b; x++) {
		const r = Math.floor(Math.random() * (balls().length) + 1);
		if (r > 0 && a.length <= b) {
			if (r != a.find(d => d === r)) {
				a.push(r);
			}
			else {x--;}
		}
		else {x--;}
	}
	return a;
}
reset();
let playerChoice = [];
let drawnBalls = sixBalls();
const compareContents = (a, b) => {
	let commonParts = [];
	for (const x in a) {
		for (const y in b) {
			if (a[x] === b[y]) {
				commonParts.push(a[x]);
			}
		}
	}
	return commonParts;
}
const delay = b => {
	let i = 0, a = [], t;
	const d = () => {
		i++;
		a.push(i);
		if (a.length > 1) {
			clear(b);
			a.shift();
		}
		if (a[0] === 50) {
			i = 1;
		}
		b.innerText = i;
	}
	if (!t) {
		t = setInterval(d, 10);
	}
	stopBtn.addEventListener("click", () => {
		for (let x = 0; x < 6; x++) {ballResult[x].innerText = drawnBalls[x];}
		const hit = compareContents(drawnBalls, playerChoice);
		for (const x in hit) {
			cds[hit[x] - 1].style.backgroundColor = "rgb(255,215,0)";
			cds[hit[x] - 1].style.color = "rgb(30,4,30)";
		}
		clearInterval(t);
		t = null;
		playBtn.style.display = "none";
		stopBtn.style.display = "none";
		resetBtn.style.display = "inline-block";
		document.getElementById("number-of-matches").innerText = "Numbers matched: " + hit.length;
	});
	resetBtn.addEventListener("click", () => {
		reset();
		clearInterval(t);
		t = null;
		for (const x in playerChoice) {
			cds[playerChoice[x] - 1].style.backgroundColor = "rgb(48,6,48)";
			cds[playerChoice[x] - 1].style.color = "rgb(255,255,255)";
		}
		playerChoice = [];
		drawnBalls = sixBalls();
		playBtn.style.display = "inline-block";
		resetBtn.style.display = "none";
		stopBtn.style.display = "none";
		document.getElementById("number-of-matches").innerText = "";
	});
}
playBtn.addEventListener("click", () => {
	if (playerChoice.length === 6) {
		for (let x = 0; x < 6; x++) {ballResult[x].innerText = delay(ballResult[x]) === undefined ? "$" : delay(ballResult[x]);}
		playBtn.style.display = "none";
		stopBtn.style.display = "inline-block";
	}
	else {
		alert("You must pick 6 numbers to start the game.");
	}
});
const createCoupon = () => {
	let a = [];
	for (let x = 1; x <= 50; x++) {
		if (x === 1 || x === 11 || x === 21 || x === 31 || x === 41) {
			a.push("<tr><td><span class='btn' id='pc" + x + "'>" + x + "</span></td>");
		}
		else if (x === 10 || x === 20 || x === 30 || x === 40 || x === 50) {
			if (x === 50) {
				a.push("<td></td></tr>");
			}
			else {
				a.push("<td><span class='btn' id='pc" + x + "'>" + x + "</span></td></tr>");
			}
		}
		else {
			a.push("<td><span class='btn' id='pc" + x + "'>" + x + "</span></td>");
		}
	}
	return coupon.innerHTML = `<table id="coupon-tab"><tr><th colspan="3">Your Coupon</th><th colspan="7" id="number-of-matches"></th></tr>${a.join("")}</table>`
}
createCoupon();
const cds = [document.getElementById("pc1"),document.getElementById("pc2"),document.getElementById("pc3"),document.getElementById("pc4"),document.getElementById("pc5"),document.getElementById("pc6"),document.getElementById("pc7"),document.getElementById("pc8"),document.getElementById("pc9"),document.getElementById("pc10"),document.getElementById("pc11"),document.getElementById("pc12"),document.getElementById("pc13"),document.getElementById("pc14"),document.getElementById("pc15"),document.getElementById("pc16"),document.getElementById("pc17"),document.getElementById("pc18"),document.getElementById("pc19"),document.getElementById("pc20"),document.getElementById("pc21"),document.getElementById("pc22"),document.getElementById("pc23"),document.getElementById("pc24"),document.getElementById("pc25"),document.getElementById("pc26"),document.getElementById("pc27"),document.getElementById("pc28"),document.getElementById("pc29"),document.getElementById("pc30"),document.getElementById("pc31"),document.getElementById("pc32"),document.getElementById("pc33"),document.getElementById("pc34"),document.getElementById("pc35"),document.getElementById("pc36"),document.getElementById("pc37"),document.getElementById("pc38"),document.getElementById("pc39"),document.getElementById("pc40"),document.getElementById("pc41"),document.getElementById("pc42"),document.getElementById("pc43"),document.getElementById("pc44"),document.getElementById("pc45"),document.getElementById("pc46"),document.getElementById("pc47"),document.getElementById("pc48"),document.getElementById("pc49")];
const btns = document.querySelectorAll(".btn");
btns.forEach(btn => {btn.addEventListener("click", () => {
	const b = parseInt(btn.innerText), c = playerChoice.indexOf(b);
	if (playerChoice.length < 6 && c < 0) {
		playerChoice.push(b);
	}
	else {
		return;
	}
	for (const x in playerChoice) {
		cds[playerChoice[x] - 1].style.backgroundColor = "rgb(169,23,169)";
	}
	});
});
