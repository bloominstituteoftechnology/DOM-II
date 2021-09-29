// Your code goes here
// testing

document.addEventListener('copy', (event) => {
    console.log('copy action initiated')
});

const navBar = document.querySelector('.nav');
const introPic = document.querySelector('.intro img');
const introH2 = document.querySelector('.intro h2');
const introP = document.querySelector('.container');

introPic.onclick = function(event) {
    event.target.style.border = "solid 1px orange";
    console.log("clicked it!");
}
navBar.addEventListener('mouseenter', e => {
    navBar.style.background = "pink";
})
navBar.addEventListener('mouseleave', e => {
    navBar.style.background = "white";
})

introH2.addEventListener('mouseover', function(event) {
    event.target.style.color = "green";
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);