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


const nav = document.querySelector("body");
window.addEventListener('scroll', (e) => (nav.style.color = "red"))


function ready(){alert('Welcome');}
document.addEventListener('DOMContentLoaded', ready); 