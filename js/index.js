// Your code goes here
//onmouseOver
const imgSelected = document.querySelector('div.img-content');
imgSelected.onmouseover = imgMouseOver;
imgSelected.onmouseout = imgMouseOut;

function imgMouseOver() {
  imgSelected.style.color = "purple";
  imgSelected.textContent = 'You Turned me purple!';
}

function imgMouseOut(){
    imgSelected.style.color = "Black";
    imgSelected.textContent = 'Back to Normal';
}
//keydown

const pageName = document.querySelector("h1");

document.addEventListener('keydown', anyKey);
function anyKey(){
    pageName.style.backgroundColor = "Yellow";
}

//click

const pageLand = document.querySelector(".intro h2");

pageLand.addEventListener('click', function(event){
    if (event.target === pageLand){
        console.log("You have come to the right place")
    }
})
