// Your code goes here
var busImage = document.querySelector('img')

busImage.addEventListener("click", honk);

function honk() {
  var audio = document.getElementById("audio");
  audio.play();
}
const funBus = document.getElementsByClassName('logo-heading');
funBus[0].addEventListener("mouseover", color)
const list = document.getElementsByTagName('a');

function color() {
  for( let i = 0; i <list.length; i++){
  list[i].style.color = "lightblue";
}}


busImage.addEventListener("mouseout", pascale);

var image2 = document.querySelector("div.img-content img")

function pascale() {
image2.setAttribute("src", "Artboard72100.jpg");
}

const button = document.getElementsByClassName('btn');


button[0].addEventListener("dblclick", getRandomColor);

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return button[0].style.backgroundColor = color;

}
  event.stopPropagation();
button[1].addEventListener("mouseover", getRandomColor);

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return button[1].style.backgroundColor = color;
}

const text = document.getElementsByClassName('content-destination');
text[0].addEventListener("mouseup", changeText);
console.log(text[0]);
function changeText() {

text[0].style.backgroundColor = "red";
}
