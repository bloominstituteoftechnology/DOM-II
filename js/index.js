// Your code goes here

let navBar = document.querySelector('.nav')




let navMouseOver = document.querySelectorAll('.nav-link');
navMouseOver.forEach(item => {
    item.addEventListener("mouseenter", event => {
    event.target.style.color = 'purple';
    })
})
navMouseOver.forEach(item => {
    item.addEventListener("mouseleave", event =>{
    event.target.style.color = 'orange';
    })
});