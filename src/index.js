import './less/index.less'


// Your code goes here!

const imgSelected = document.querySelector('div.img-content');
imgSelected.onmouseover = imgMouseOver;
imgSelected.onmouseout = imgMouseOut;

function imgMouseOver() {
  imgSelected.style.color = "black";
  imgSelected.textContent = 'You made me disappear';
}

function imgMouseOut(){
    imgSelected.style.color = "Black";
    imgSelected.textContent = 'still gone';
}

const pageName = document.querySelector("h1");

document.addEventListener('keydown', anyKey);
function anyKey(){
    pageName.style.backgroundColor = "Yellow";
}


const pageLand = document.querySelector(".intro h2");

pageLand.addEventListener('click', function(event){
    if (event.target === pageLand){
        console.log("You have come to the right place")
    }
})

//4scroll

const nav = document.querySelector("body");
window.addEventListener('scroll', (e) => (nav.style.color = "red"))
const body = document.querySelector("body");
window.addEventListener('scroll', () => (body.style.color = "red"))

//5load

function ready(){alert('Welcome');}
document.addEventListener('DOMContentLoaded', ready); 
document.addEventListener('DOMContentLoaded', ready);

//6dblclick

const h1 = document.querySelector("h1")
window.addEventListener('dblclick', () => (h1.style.color = "blue"))
home.addEventListener('dblclick', function(e) {
    e.stopPropagation();
    console.log('You shall not pass!');
})
//7select

const home = document.querySelector(".home");
    home.addEventListener("selectstart", (e) => {
    home.style.backgroundColor = "black";
    home.style.color = "white";
  });
//8keyup

const title = document.querySelector("h1");
document.addEventListener('keyup', enterKey);
function enterKey(){
    title.style.backgroundColor = "White";
}

//9drag

const elmDragged = document.querySelectorAll('a');
elmDragged.forEach(item => item.addEventListener('drag', function(event){
    event.target.style.backgroundColor = "grey";
    event.preventDefault();
    alert("I cannot be moved!");
},false))

//10resize

const nav = document.querySelector(".main-navigation");
window.addEventListener("resize", () => (nav.style.color = "red"))

//prevent
window.addEventListener('dblclick', () => (h1.style.color = "purple"))
