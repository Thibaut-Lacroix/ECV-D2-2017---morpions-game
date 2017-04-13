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

   var box1 = document.getElementById('box1');
   var box2 = document.getElementById('box2');
   var box3 = document.getElementById('box3');
   var box4 = document.getElementById('box4');
   var box5 = document.getElementById('box5');
   var box6 = document.getElementById('box6');
   var box7 = document.getElementById('box7');
   var box8 = document.getElementById('box8');
   var box9 = document.getElementById('box9');

   var circle = document.getElementsByClassName("circle");
   var cross = document.getElementsByClassName("cross");

// CROSS REVEAL
box1.onclick = function(){
  document.getElementById("crossBox1").className += " reveal";
};

box2.onclick = function(){
  document.getElementById("crossBox2").className += " reveal";
};

box3.onclick = function(){
  document.getElementById("crossBox3").className += " reveal";
};

box4.onclick = function(){
  document.getElementById("crossBox4").className += " reveal";
};

box5.onclick = function(){
  document.getElementById("crossBox5").className += " reveal";
};

box6.onclick = function(){
  document.getElementById("crossBox6").className += " reveal";
};

box7.onclick = function(){
  document.getElementById("crossBox7").className += " reveal";
};

box8.onclick = function(){
  document.getElementById("crossBox8").className += " reveal";
};

box9.onclick = function(){
  document.getElementById("crossBox9").className += " reveal";
};

// CIRCLE reveal

box1.onclick = function(){
  document.getElementById("circleBox1").className += " reveal";
  //document.getElementById("box1").className += " background-color";
};

box2.onclick = function(){
  document.getElementById("circleBox2").className += " reveal";
  box2.className += " background-color";
};

box3.onclick = function(){
  document.getElementById("circleBox3").className += " reveal";
};

box4.onclick = function(){
  document.getElementById("circleBox4").className += " reveal";
};

box5.onclick = function(){
  document.getElementById("circleBox5").className += " reveal";
};

box6.onclick = function(){
  document.getElementById("circleBox6").className += " reveal";
};

box7.onclick = function(){
  document.getElementById("circleBox7").className += " reveal";
};

box8.onclick = function(){
  document.getElementById("circleBox8").className += " reveal";
};

box9.onclick = function(){
  document.getElementById("circleBox9").className += " reveal";
};
