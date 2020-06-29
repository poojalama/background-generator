var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function changeColor(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";

}

function randomNumbersGenerator(){
	var letters = '0123456789ABCDEF'
	var color = '#';
	for (var i=0; i < 6; i ++){
		color += letters[Math.floor(Math.random()*16)];
	}
	return color;
}
function setRandomColors(){
	color1.value = randomNumbersGenerator();
	color2.value = randomNumbersGenerator();

	changeColor(  );
}

changeColor();
random.addEventListener("click", setRandomColors);
color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);