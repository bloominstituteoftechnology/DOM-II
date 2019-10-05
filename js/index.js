// Your code goes here



const button = document.getElementsByClassName("btn")

function show_now() {
  const my_time = new Date();
  alert(my_time);

}
button[0].addEventListener("click", show_now);

const image = document.getElementsByTagName("img")


image[0].addEventListener('mouseenter', mouseData);

function mouseData(e) {
  console.log('Event Type:' + e.type)
}

image[0].addEventListener('mouseleave', mouseData);

image[1].addEventListener('mousemove', movementData);

const header = document.getElementsByTagName('h2');
const output = document.createElement('div');
header[1].appendChild(output);


function movementData(e) {
  console.log('Event Type:' + e.type)

  output.innerHTML = '<h3>MouseX: ' + e.offsetX + '</h3><h3>MouseY: '
    + e.offsetY + '</h3>';
};

window.addEventListener('resize', backGroundColor)

function backGroundColor(e) {
  console.log(`Window Width: ${window.innerWidth} 
Window Height: ${window.innerHeight}`)
}

document.addEventListener('keydown', logKey);

function logKey(e) {
  alert(`Key Pressed: ${e.code}`);
}

button[1].addEventListener("click", clickEvent);

function clickEvent(e) {
  e.target.innerHTML = `Click count: ${e.detail}`;
}

window.addEventListener('online', (event) => {
  alert("You are now connected to the interwebs!");
});

const text = document.getElementsByTagName('p');

text[0].addEventListener('copy', textEvent);

function textEvent(e) {
  e.target.style.color = 'green';
  e.stopPropagation();
}

window.addEventListener('scroll', scrollData);

function scrollData() {
  console.log(`Window Y: ${window.scrollY}`)
}

const headerh4 = document.querySelectorAll('h4');

const div = document.querySelectorAll('div');

div[11].addEventListener('mouseover', textEvent2);
headerh4[2].addEventListener('mouseover', textEvent);
text[8].addEventListener('mouseover', textEvent3);


function textEvent2(e) {
  e.target.style.color = 'yellow';
  e.stopPropagation();
}
function textEvent3(e) {
  e.target.style.color = 'blue';
  e.stopPropagation();
}

const nav = document.querySelectorAll("nav");



nav[0].addEventListener("click", function (e) {
  e.preventDefault()
});