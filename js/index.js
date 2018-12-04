// Your code goes here
const button1 = document.querySelector(".btn")

button1.addEventListener('click', () => {
    button1.textContent = 'The button works';
    TweenMax.to(".animationBtn1", 1, {
        rotation:360,
    })
})

//end 1st listener

const button2 = document.querySelectorAll(".btn")[1];

button2.addEventListener('dblclick', () => {
    button2.textContent = 'Wow double click';
    TweenMax.to(".animationBtn2", 1, {
        rotation:360,
    })
})

//end 2nd listener

window.addEventListener('keypress', () => {
    alert("I didn't say you could press a button")
})

//end 3rd listener

window.addEventListener("load", () => {
    console.log("All resources finished loading!");
})

//end 4th listener

window.addEventListener("resize", () => {
    alert("viewport resized")
})

//end 5th listener

const destinationContent = document.querySelector('.content-destination p')

destinationContent.addEventListener('select', () => {
    alert("You selected the text")
}, false)

//end 6th listener

window.addEventListener('scroll', () => {
    console.log("you scrolled")
})

//end 7th listener

const img1 = document.querySelector('img');
img1.addEventListener('drag', () => {
    console.log("Stop dragging my header")
})

//end 8th listener

const navLink = document.querySelector('.nav-link'); 

navLink.addEventListener('mouseover', () => {
    console.log('hovered')
    // navLink.classList.toggle('hover-effect');
})

//end 9th listener

const textSelect = document.querySelector('.text-content p');

textSelect.addEventListener('wheel', () => {
    console.log("You selected the text using wheel listener");
})

//end 10th listener

// stopPropagation();

const destinationDiv3 = document.querySelectorAll('.destination')[2];

const button3 = document.querySelectorAll(".btn")[2];

destinationDiv3.addEventListener('click', (event) => {
    console.log("Div clicked!");
})

button3.addEventListener('click', function(event) {
    event.stopPropagation();
    console.log("Button clicked!");
    TweenMax.to(".animationBtn3", 1, {
        rotation:360,
    })
})

// preventDefault();

const aTags = document.querySelectorAll('.nav-link');

for(let i = 0; i <= 3; i++){
    aTags[i].addEventListener('click', (event)=>{
        event.preventDefault()
    })
}

