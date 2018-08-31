// Your code goes here
let topImg = document.getElementsByTagName('img')[0];

topImg.addEventListener('mouseenter', function(event){
	event.target.style.height = '350px';
  event.target.style.width = '500px';
});

document.addEventListener('keydown', function(event){
  const keyName = event.key;
  alert('keydown event\n\n' + 'key: ' + keyName);
});

let middleImg = document.getElementsByTagName('img')[1];

middleImg.addEventListener("dblclick", function(e) {
	e.target.style.height = '350px';
  e.target.style.width = '500px';
});

window.addEventListener("resize", resizeFunction);

var x = 0;
function resizeFunction() {
    var txt = x += 1;
    document.getElementsByTagName('p')[0].innerHTML = 'The window is being resized ' + txt + ' times.';
}

window.addEventListener("load", loadFunction);

function loadFunction() {
    document.getElementsByTagName("h2")[0].innerHTML = "Navbar is loaded";
}

document.getElementsByTagName("p")[8].addEventListener("wheel", myFunction);

function myFunction() {
    this.style.fontSize = "35px";
}