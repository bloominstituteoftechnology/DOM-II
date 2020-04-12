// Your code goes here
//1
const firstImg = document.querySelector(".fun bus");
firstImg.addEventListener("mouseenter", function(){
    firstImg.style.transform = "scale(1.6)";
    firstImg.style.transition = "Transform 1s";
})

firstImg.addEventListener("mouseleave", function(){
    firstImg.style.transform = "scale(1)";
})

//2
const allTitles = document.querySelectorAll("h2");
allTitles.addEventListener("mouseover", function(){
    allTitles.style.color = "cornflowerblue"
})

//3
const header = document.querySelector('.main-navigation');

const navlinks = document.querySelector('.nav');

navlinks.addEventListener('mouseover', (event) => {
    event.target.classList.toggle('active');
});
navlinks.addEventListener('mouseout', (event) => {
    event.target.classList.toggle('active');
});

//4
header.addEventListener('mouseover', (event) => {
    event.stopPropagation();
    event.target.style.fontWeight = 'bold';
});