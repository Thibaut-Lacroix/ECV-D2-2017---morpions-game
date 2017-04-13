var svgCircle = document.getElementsByTagName('svg'); //Get svg element
var newElementCircle = document.createElement('Circle'); //Create a path in SVG's namespace
  newElementCircle.setAttribute("cx",50); //Set path's data
  newElementCircle.setAttribute("cy",50); //Set path's data
  newElementCircle.setAttribute("r", 40 ); //Set path's data
  newElementCircle.style.stroke = "red"; //Set stroke colour
  newElementCircle.style.strokeWidth = "5px"; //Set stroke width

var divBox = document.getElementsByTagName('div');

divBox.onclick = function (){
  svgCircle.appendChild(newElementCircle);
}
