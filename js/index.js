// Your code goes here

//EVENTS!!!!!!!!!


//click to change each nav link to orange & STOP PROPAGATION
const navBoxColor = document.querySelector(".main-navigation .nav-container");
navBoxColor.addEventListener("click", () => {
    navBoxColor.style.backgroundColor = "orange";
    console.log("shouldnt appear");
})

const navColor = document.querySelectorAll(".main-navigation .nav-container .nav a");

navColor.forEach(element => {
    element.addEventListener("click", (event) => {
        element.style.color = "orange";
        console.log("only");
        event.stopPropagation();
    });
});

//aux click to change Fun Bus
const funBusColor = document.querySelector("h1");

funBusColor.addEventListener("auxclick", () => {
    funBusColor.style.color = "orange", funBusColor.textContent = "FRIGHT BUS";
});

//double click img swap
const changeBus = document.querySelector('.home .intro img');
changeBus.addEventListener('dblclick', () => {
    changeBus.src = "https://i.imgur.com/pilNkUs.jpg";
})

//mouse over font color and size change
const welcomeColor = document.querySelector(".home .intro h2");

welcomeColor.addEventListener("mouseover", () => {
    welcomeColor.style.color = 'orange', welcomeColor.style.fontSize = '55px', welcomeColor.textContent = 'Welcome to the Fright Bus!';
});

//mouse out returning to original
welcomeColor.addEventListener("mouseout", () => {
    welcomeColor.style.color = "black", welcomeColor.style.fontSize = '32px', welcomeColor.textContent = 'Welcome to the Fun Bus!';
});

//scroll to change background color
const bckgrnd = document.querySelector('body');
window.addEventListener('scroll', () => {
    bckgrnd.style.backgroundColor = "#4d4f54";
});

//mouse enter to spookify the image
const cardImg = document.querySelector('.home .content-section .img-content img');
cardImg.addEventListener("mouseenter", () => {
    cardImg.src = "https://i.imgur.com/HggeeyO.jpg";
})

//mouse leaves to spookify the image
const cardImgB = document.querySelector('.home .content-section.inverse-content .img-fluid.rounded');
cardImgB.addEventListener("mouseleave", () => {
    cardImgB.src = "https://i.imgur.com/O8HSIyQ.jpg";
})

//mouse down to change image
const lowerBanner = document.querySelector('.home .content-destination img');
lowerBanner.addEventListener("mousedown", () => {
    lowerBanner.src = "https://i.imgur.com/htRVHq7.jpg", lowerBanner.style.transform = "scale(1.75)";
})

lowerBanner.addEventListener("mouseup", () => {
    lowerBanner.src = "https://i.imgur.com/htRVHq7.jpg", lowerBanner.style.transform = "scale(1)";
})

//mouse up changes to bottom buttons
const bttmButtons = document.querySelectorAll('.home .content-pick .destination .btn');
bttmButtons.forEach(element => {
    element.addEventListener("mouseup", () => {
        element.style.color = "black", element.style.backgroundColor = "orange", element.textContent = "Freak Me Out!";
    });
});