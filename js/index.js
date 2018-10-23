// Your code goes here

// Select nav tags

const navTags = document.querySelectorAll('a');
const homeNav = navTags[0];
const aboutNav = navTags[1];
const blogNav = navTags[2];
const contactNav = navTags[3];

// Images

const images = document.querySelectorAll('.img-content')
const adventureImg = images[0];
const funImg = images[1];

// Change background colour

homeNav.addEventListener("mouseover", () => { 
    const curColour = document.body.style.backgroundColor;
  
    if (curColour != 'red') {
      document.body.style.backgroundColor = "red";
    }
    else {
      document.body.style.backgroundColor = "blue";
    }
  });

// Remove intro (display none added to mixin)

const myIntro = document.querySelector('.intro p');
aboutNav.addEventListener('dblclick', () => {
    myIntro.classList.toggle('display-none'); 
});

// Turn intro text green when scrolling over content section

const contentSection = document.querySelector('.content-section');
contentSection.addEventListener("wheel", () => {
    myIntro.style.color = "green";
})

// Alert message when adventure image starts being dragged

adventureImg.addEventListener("dragstart", () => {
    alert("Whooaaa - what you doing there?")
})

// When page loads, move contact nav (I've added greensock script to HTML)

window.addEventListener("load", () => {
    TweenMax.to(contactNav, 1, {
        x: 100,
        rotation: 360,
        scale: 0.75
    });
})

// When page is resized, remove top image

topImage = document.querySelector(".intro img");
window.addEventListener("resize", () => {
    topImage.classList.toggle('display-none');
});

// When scrollbar is used

const logo = document.querySelector('.logo-heading');
window.addEventListener("scroll", () => {
    TweenMax.to(logo, 2, {
        x:100,
        ease:Bounce.easeOut,
        onComplete: complete 
    });
});

function complete() {
    // alert("Logo on the move. Repeat: logo on the move!!")
}

// When 'Fun in the Sun' text is copied 

const contentPick = document.querySelector('.content-pick .destination h4');

contentPick.addEventListener("copy", () => {
    contentPick.style.color = "green";
})

// When contact nav is clicked

contactNav.addEventListener("click", () => {
    TweenMax.to(contactNav, 2, {
        y:100,
        x:-100,
        scale: 0.5,
        ease:Bounce.easeOut
    });
})

// When user presses a key

window.addEventListener('keypress', () => {
    document.body.style.backgroundColor = "black";
})

// Propagation practice

const body = document.querySelector('body');
body.addEventListener('click', (event) => { 
    console.log(event.target)
    // event.target.style.color = "red";
});

contentPick.addEventListener('click', (event) => { 
    event.stopPropagation();
    console.log(event.target)
});
