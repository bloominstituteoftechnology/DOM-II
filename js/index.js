// Your code goes here

// Event Listener 1

let pageTitle = document.querySelector('title');
let body = document.querySelector('body');

body.addEventListener('dblclick', () => {
    pageTitle.textContent = 'Fun Bus Travel Agency - Event Style'
})

// Event Listener 2
 let paragraphs = document.querySelectorAll('p');

let pEventHandler = (event) => {
    event.target.style.color = 'grey'
};

paragraphs.forEach(element => {
    element.addEventListener('mouseenter', pEventHandler)
});


// Event Listener 3

let pEventHandler2 = (event) => {
    event.target.style.color = 'black'
};

paragraphs.forEach(element => {
    element.addEventListener('mouseleave', pEventHandler2)
});


// Event Listener 4

let changeColour = (event) => {
    event.target.style.color = 'pink'
    event.stopPropagation();
};

let footer = document.querySelector('footer');

footer.addEventListener('mousemove', changeColour);

// GSAP
// Event Listener 5

gsap.to(".logo-heading", {color: "#560563", duration: 2, rotation: 360} )
// GSAP
// Event Listener 6

let bottomImg = document.querySelector(".content-destination img");

let eventImg = (e) => {
    gsap.to(bottomImg, {rotation: 360, duration: 3})
}

bottomImg.addEventListener('mousedown', eventImg);

// GSAP
// Event Listener 7

let button = document.querySelector(".btn");

let scale = (e) => {
    gsap.to(button, {scale:2 , duration: 3});
};
button.addEventListener('mouseenter', scale);

// Stop the navigation items from refreshing the page by using preventDefault()
// Event Listener 8

let nav = document.querySelectorAll(".nav-link")

nav.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()
        event.target.style.innerHTML = 'Clicked';
    })
})
console.log('here')

// Nest two similar events somewhere in the site and prevent the event propagation properly
// Event Listener 9

let higherelement = body;

higherelement.addEventListener('click', () => {
    higherelement.style.backgroundColor = "#560563";
})

// Event Listener 10

let lowerelement = document.querySelector(".inverse-content")

lowerelement.addEventListener('click', (event) => {
    event.target.style.backgroundColor = "#560563";
    event.stopPropagation();
})

  