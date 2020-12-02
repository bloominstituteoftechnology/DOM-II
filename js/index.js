// Your code goes here

const images = document.querySelectorAll("img");

Array.from(images).forEach((image) => {
    image.style.cursor = "zoom-in";
    image.addEventListener("mouseenter", () => {
        image.style.transform = "scale(1.2)";
        image.style.transition = "all 0.6s";
    });
 
    image.addEventListener("mouseleave", () => {
        image.style.transform = "scale(1)";
        image.style.transaction = "all 0.6s"
    });    
});


const body = document.querySelector("body")
body.addEventListener('click', event => event.target.style.backgroundColor = 'papayawhip')

window.addEventListener(`load`, () => {
    alert (`Welcome to the FUN BUS!!!!`)
});


const header = document.querySelector(".main-navigation")
header.addEventListener('dblclick', event => event.target.style.backgroundColor = 'pink');
/* */
const footer = document.querySelector(".footer")
footer.addEventListener('dblclick', event => event.target.style.backgroundColor = 'pink');


let btns = document.querySelectorAll(`.btn`);
console.log(btns);
btns.forEach(function(curr){
    curr.addEventListener(`dblclick`, function(event){
        curr.style.background= `pink`
        alert(`You clicked the button!!!!!`)
    })
})

const navigation = document.querySelector(`.nav-link`);

navigation.addEventListener(`dblclick`, () => {
    alert (`Enjoy our other FUN pages!!`)
});

const textColor = document.querySelector(`h1`);

window.addEventListener(`resize`, () => {
    textColor.style.color = `green`
})

body.addEventListener(`copy`, () => {
    alert(`We wish you could save it, but that's a secret!`)
})

const intro = document.querySelector(`.intro p`)
intro.addEventListener(`mousemove`, () => {
    intro.style.fontSize = `20px`
})

const navLink = document.querySelectorAll(`.nav-link`)
navLink.forEach(navigation => {
    navigation.addEventListener(`click`, (event) => {
        event.preventDefault()
    })
})

const div = document.querySelector(`.footer div`)
div.addEventListener(`click`, () => {
    div.style.backgroundColor = `orange`
}) 