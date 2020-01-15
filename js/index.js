// Your code goes here

/*=====image swap with 4seconds delay==== */
let countdown;
let newImg = document.querySelector(".intro img");
newImg.addEventListener("mouseenter", () => {
    countdown = setTimeout(() => {
        newImg.src="img/fun-cat.jpg"
    }, 4000);
    newImg.addEventListener("mouseleave", () => {
        clearTimeout(countdown)
    })
})

//`logo` "fun bus" click 
let logo = document.querySelector('h1');
logo.addEventListener('click', (event) => {
    logo.style.color = "pink";
    //adding stop propagation to prevent it from bubbling navContainer below this code.
    event.stopPropagation();
})

//adding color change on click for nav container
let navContainer = document.querySelector('.nav-container');
navContainer.addEventListener('click', () => {
    navContainer.style.backgroundColor = "lightgreen";
})

// sets the nav background to palegoldenrod while on mouse enter and back to white on mouse leave
let nav = document.querySelector("nav");
nav.addEventListener('mouseenter', () => {
    nav.style.backgroundColor = "palegoldenrod";
    nav.addEventListener('mouseleave', () => {
        nav.style.backgroundColor = "white";
    })
})

//this swaps nav links background to pink on mouse enter and white on mouse leave 
//this also changes the links color themselves on mouse enter and mouse leave
document.querySelectorAll('nav a').forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.backgroundColor = "pink";
        el.style.color = "white";
    })
    el.addEventListener('mouseleave', () => {
        el.style.backgroundColor = "white";
        el.style.color = "black";
    })
})

// let newInfo = document.createElement('section');
// newInfo.className = "content-pick new-content"
// document.getElementsByClassName('container').appendChild(newInfo);

// let newInfoTitle = document.createElement('h4');
// newInfoTitle.textContent = "New Title";
// newInfo.append(newInfoTitle);

// just add new elements with content 2s after load.
window.addEventListener("load", (event)=>{
    setTimeout(()=>{
        let newInfo = document.createElement('section');
        newInfo.className = "content-pick new-content";
        newInfo.classList.add("section");
        newInfo.style.display ="block";
        let parentEl = document.querySelector(".home");
        parentEl.appendChild(newInfo);

        let newInfoTitle = document.createElement('h4');
        newInfoTitle.textContent = "New Title";
        newInfoTitle.classList.add("h4");
        newInfo.append(newInfoTitle);

        let newInfoParagraph = document.createElement("p");
        newInfoParagraph.textContent = "New Title Expedition excursion design excursion fun, clean simple organized WordPress Travel colorful webdesign. Traveler blogger website design expedition clean excursion traveling";
        newInfoParagraph.classList.add("p");
        newInfoParagraph.style.width = "30%";
        newInfo.appendChild(newInfoParagraph);
    }, 2000)
})
//uses dblclick to change image
let newDestinationImg = document.querySelector(".content-destination img");
newDestinationImg.addEventListener("dblclick", () => {
    newDestinationImg.src = "img/fun-cat.jpg";
});

//reverts the dbl click image swap back to its original img using resize.

let newSize = document.querySelector(".content-destination img");
window.addEventListener("resize", () => {
    newSize.src = "img/fun-bus.jpg";
});

//changes background image on scroll
let backgroundClrChng = document.querySelector("html");
backgroundClrChng.addEventListener("wheel", () => {
    backgroundClrChng.style.backgroundColor = "yellow"
});

let mainNav = document.querySelector('header');
mainNav.style.backgroundColor = "lightblue"


//adds stopDefault on navigation links
let stopLinks = document.querySelector('nav-link');
stopLinks.addEventListener('click,', (event) => {
    event.preventDefault();
});



// let mainNav = document.querySelector('header');
// mainNav.addEventListener('wheel', () => {
//     mainNav.style.backgroundColor = "red"
// })

// let newInfo = document.createElement('section');
// newInfo.className = "content-pick new-content";
// newInfo.classList.add("section");
// newInfo.style.display ="block";
// let parentEl = document.querySelector(".home");
// parentEl.appendChild(newInfo);

// let newInfoTitle = document.createElement('h4');
// newInfoTitle.textContent = "New Title";
// newInfoTitle.classList.add("h4");
// newInfo.append(newInfoTitle);

// let newInfoParagraph = document.createElement("p");
// newInfoParagraph.textContent = "New Title Expedition excursion design excursion fun, clean simple organized WordPress Travel colorful webdesign. Traveler blogger website design expedition clean excursion traveling";
// newInfoParagraph.classList.add("p");
// newInfoParagraph.style.width = "30%";
// newInfo.appendChild(newInfoParagraph);

