// Your code goes here

//mouseover
Array.from(document.links).forEach(link => {
    link.addEventListener("mouseenter", function(event) {
        event.target.style.color = "orange";
        setTimeout(function() {
            event.target.style.color = "";
        }, 300);
    },false);
})

//mouseleave
var enterEventCount = 0;
var leaveEventCount = 0;
const navContent = document.querySelector('.nav-container');
const links = document.querySelectorAll('a');

navContent.addEventListener('mouseleave', function(event) {
    console.log('nav mouseleave event');
    event.target.style.backgroundColor ='teal';
    event.target.style.color = 'white';
    enterEventCount++;
    links.forEach(link => {
        link.style.color = 'white';
    })
});