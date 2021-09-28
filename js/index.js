// Your code goes here

const nav = document.querySelector('.nav');

nav.addEventListener('mouseover', function(evt) {
    evt.target.style.color = "orange";

    setTimeout(function() {
        evt.target.style = "";
    }, 200);
}, false);

const image = document.querySelector('img');

image.addEventListener('mouseover', function(evt) {
    evt.target.style.filter = "blur(10px)";
});

image.addEventListener('mouseout', function(evt) {
    evt.target.style.filter = "blur(0px)";
})

const text = document.querySelector('section');

text.addEventListener('dblclick', function(evt) {
    evt.target.style.color = "green";
    evt.target.style.fontSize = "30px";

    setTimeout(function() {
        evt.target.style.color = "";
        evt.target.style.fontSize = "";
    }, 1000)
}, false)

const smallImg = document.querySelector('.img-content');

smallImg.addEventListener('click', function(evt) {
    evt.target.style.opacity = "0.5";
})