var css = document.body;
var color1 = document.getElementById("color1")
var color2 = document.getElementById("color2")

color1.addEventListener("input",changeColor)
color2.addEventListener("input",changeColor)

function changeColor(){
    css.style.background = "linear-gradient(to right,"+color1.value+","+color2.value;
}