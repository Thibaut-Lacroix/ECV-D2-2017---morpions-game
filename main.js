// var svgCircle = document.getElementsByTagName('svg'); //Get svg element
// var newElementCircle = document.createElement('Circle'); //Create a path in SVG's namespace
//   newElementCircle.setAttribute("cx",50); //Set path's data
//   newElementCircle.setAttribute("cy",50); //Set path's data
//   newElementCircle.setAttribute("r", 40 ); //Set path's data
//   newElementCircle.style.stroke = "red"; //Set stroke colour
//   newElementCircle.style.strokeWidth = "5px"; //Set stroke width
//
// var divBox = document.getElementsByTagName('div');
//
// divBox.onclick = function (){
//   svgCircle.appendChild(newElementCircle);
// }

var jActuel = "rond";
var boxStatus = [];

var boxNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function getBox(boxNumber){
 return document.getElementById('box' + boxNumber);
};

var boxes = boxNumbers.map(getBox);

var circle = document.getElementsByClassName("circle");
var cross = document.getElementsByClassName("cross");

function addClick(box, index) {
 box.onclick = function (){


   var n = index + 1;
   boxStatus[n] = jActuel;

   // Verify winner ?

   if (boxStatus[1] !== undefined && boxStatus[1] === boxStatus[2] && boxStatus[2] === boxStatus[3] ){
     console.log ("winner", jActuel);
   }

   // Update game Status
   if (jActuel === "rond") {
     document.getElementById("circleBox" + n).className += " reveal";
     jActuel = "croix";
   }
   else {
     document.getElementById("crossBox" + n).className += " reveal";
     jActuel = "rond";
   }


   //console.log (boxStatus);
 };
};

boxes.forEach(addClick);


/*

- ecrire une fonction verifyWinner();
- ecrire une fonction resetGame();
- ecrire une fonction endGame();

*/
