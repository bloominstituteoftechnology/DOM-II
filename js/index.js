// Your code goes here
console.log('project is up')
//mouseover
Array.from(document.links).forEach(link => {
    link.addEventListener("mouseenter", function(event) {
        console.log("nav link mouseenter event");
        event.target.style.color = "orange";
        setTimeout(function() {
            event.target.style.color = "white";
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

//dbclick
// const textContent = document.querySelectorAll('.text-content');

// textContent.addEventListener('dbclick', function(event) {
//     console.log('text-content dbclick color event');
//     event.target.style.color = 'purple';
// });

//click
const signUpBtn = document.querySelector('.btn');

signUpBtn.addEventListener('click', function(event) {
    alert("Thanks for signing up!");
});
