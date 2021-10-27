// Your code goes here

//onmouseOver
const imgSelected = document.querySelector('.img-content');

imgSelected.onmouseover = imgMouseOver;
imgSelected.onmouseout = imgMouseOut;
function imgMouseOver() {
  imgSelected.style.opacity = 0.5;
}
function imgMouseOut(){
imgSelected.style.opacity = 1;
}

//keydown
const pageName = document.querySelector("h1");

document.addEventListener('keydown', anyKey);
function anyKey(){
    pageName.style.backgroundColor = "Yellow";
}

//keyup

const title = document.querySelector("h1");
document.addEventListener('keyup', enterKey);
function enterKey(){
    title.style.backgroundColor = "White";
}

//click
const pageLand = document.querySelector(".intro h2");

pageLand.addEventListener('click', function(event){
    if (event.target === pageLand){
        console.log("You have come to the right place")
        alert("You have come to the right place");
    }
})

//drag
const elmDragged = document.querySelectorAll('a');

elmDragged.forEach(item => item.addEventListener('drag', function(event){
    event.target.style.backgroundColor = "grey";
    event.preventDefault();
    alert("I cannot be moved!");

},false))

//dbl click

document.addEventListener('dblclick', doubleClick);
function doubleClick(){
    console.log("No Sign ups here!")
    alert("This is just a mock-up");
}
   
//load
window.addEventListener('load', function (event){
    console.log("This site has been loaded fully!");
    alert("This Site is up and running.");
})

const scrolling = false;

//scroll
window.addEventListener('scroll', function(){
    if (scrolling !== 'false') 
        console.log("Scrolling...");
});
