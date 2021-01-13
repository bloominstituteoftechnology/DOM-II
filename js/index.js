// Your code goes here
const navLinks = document.querySelectorAll(".nav-link");
const logoHeading = document.querySelector("h1");
const secondaryTitles = document.querySelectorAll("h2");

logoHeading.addEventListener("click", function(e){
    let newColor = e.target.style.color
    newColor === 'black' 
    ? e.target.style.color = 'blue'
    : newColor === 'blue'
    ? e.target.style.color = 'red' 
    : newColor === 'red'
    ? e.target.style.color = 'green'
    : e.target.style.color = 'black'
});

navLinks.forEach(item => {
    item.addEventListener("mouseover", function(e){
        e.target.style.color = 'green'
    });
});

secondaryTitles.forEach(item => {
    item.addEventListener("click", function(e){
        e.target.style.color = 'pink'
        e.target.style.fontSize = '4rem'
    })
})