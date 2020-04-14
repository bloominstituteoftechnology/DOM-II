// Your code goes here

// 1. Mouseenter
const funBus = document.querySelector(".hero") 
funBus.addEventListener("mouseenter", () => {
    funBus.style.transform = "scale(1.5)";
    funBus.style.transition = "transform 1s";
});

// 2. Mouseleave
funBus.addEventListener("mouseleave", () => {
    funBus.style.transform = "scale(1)";
});

// 3. Click    4. Focus
const contentTitles = document.querySelectorAll("h2");

contentTitles.forEach((element) => {
    element.addEventListener("click", (event) => {
        event.target.parentElement.parentElement.style.transform = "rotate(360deg)";
        event.target.parentElement.parentElement.style.transition = "transform 1s";
    })
contentTitles.forEach((element) => {
    element.addEventListener("focus", (event) => {
        event.target.style.color = "crimson";
    })
})
});

// 5. Load 
const buttons = document.querySelectorAll(".btn");

buttons.forEach((element) => {
    element.addEventListener("load", (event) => {
       event.target.style.color = "red";
    })
});

// 6. Mouseover
for(let i =0; i < contentTitles.length; i++) {
    contentTitles[i].addEventListener("mouseover", () => {
        contentTitles[i].style.fontSize = "50px";
    })
};

const contentGroup = document.querySelectorAll(".destination");
contentGroup.forEach((element) => {
    element.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "red";
})
});

// 7. Focus & 8. Blur (Event Delegation)
const form = document.querySelectorAll('.form input');
console.log(form);
form.forEach((element)=> {
    element.addEventListener('focus', (event) => {
    event.target.style.backgroundColor = 'crimson';    
    }, true);

    element.addEventListener('blur', (event) => {
    event.target.style.backgroundColor = '';    
    }, true);
});

// 9. Wheel
const allBackground = document.querySelector("body");
allBackground.addEventListener("wheel", () => {
    allBackground.style.backgroundColor = "dodgerblue"
});

// 10. Mouseout
const paragraph1 = paragraph1.addEventListener('mouseout', (event) => {
    event.target.textContent = 'Have fun!';
 });

// Prevent Default 

const homeLink = document.querySelector("a");

homeLink.addEventListener("click", (event)=> {
    event.preventDefault();
    funBus.src = "img/fun.jpg";
});

// Stop Propagation

const images = document.querySelectorAll(".text-content");
images.forEach((imagesEl) => {
    imagesEl.addEventListener("click", (event) => {
        event.stopPropagation();
        imagesEl.target.style.backgroundColor = "teal"
    })
});