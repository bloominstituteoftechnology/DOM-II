// Your code goes here

//event one
const yellowBus = document.querySelector('.intro').querySelector('img')
// console.log(yellowBus);
yellowBus.addEventListener('dblclick', () => {
    //yellowBus.style.animation = 'rotation 3s infinite linear';
    yellowBus.style.transform = "rotate(180deg)";
    yellowBus.style.transition = "transform 1s";
})

//event two
yellowBus.addEventListener('transitionend', () => {
    yellowBus.style.transform = "rotate(360deg)";
    yellowBus.style.transition = "transform 1s";
})

//event three
const introHeader = document.querySelector('h2');
console.log(introHeader);
window.addEventListener("resize", () => {
    introHeader.style.fontSize = "3.5rem"
})

//event four
const welcomeP = document.querySelector(".home").querySelector("p");
// console.log (welcomeP);
welcomeP.addEventListener("contextmenu", () => {
    welcomeP.textContent = "...";
})

const imgSelector = document.getElementsByClassName('img-content')
console.log (imgSelector);


//event five
const adventureImage = imgSelector[0]
console.log(adventureImage)
window.addEventListener('scroll', () => {
    adventureImage.style.transform = "scale(1)";
})
//events six
adventureImage.addEventListener('click', () => {
    adventureImage.style.transform = 'scale(0.5)';
})

//event seven
const funImg = imgSelector[1];
funImg.addEventListener('mouseenter', () => {
    funImg.style.transform = 'scale(2)';
    funImg.style.position = "absolute";
    funImg.style.right = "2";
})

//event eight
funImg.addEventListener('mouseleave', () => {
    funImg.style.transform = "scale(1)";
    funImg.style.position = "static";
})

//event nine
const adventureP = document.querySelectorAll('p')[1];
console.log (adventureP);
adventureP.addEventListener('drag', () => {
    adventureP.style.color = "red"
    adventureP.style.fontSize = "2rem"
})
//event ten
adventureP.addEventListener('dragend', () => {
    adventureP.style.color = "black"
})


