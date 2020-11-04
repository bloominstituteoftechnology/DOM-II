// Your code goes here

/*1) Added mouseenter for adventure pic*/
const images = document.querySelectorAll("img");

Array.from(images).forEach((image) => {
    image.style.cursor = "zoom-in";
    image.addEventListener("mouseenter", () => {
        image.style.transform = "scale(1.2)";
        image.style.transition = "all 0.6s";
    });
    /*2)Added mouseleave*/
    image.addEventListener("mouseleave", () => {
        image.style.transform = "scale(1)";
        image.style.transaction = "all 0.6s"
    });    
});



/*3) Change Body color when clicked*/
const body = document.querySelector("body")
body.addEventListener('click', event => event.target.style.backgroundColor = 'papayawhip')

/*4) Added Window load Alert*/
window.addEventListener(`load`, () => {
    alert (`Welcome to the FUN BUS!!!!`)
});

/*5) Changed header & footer color when clicked*/
const header = document.querySelector(".main-navigation")
header.addEventListener('click', event => event.target.style.backgroundColor = 'pink');
/* */
const footer = document.querySelector(".footer")
footer.addEventListener('click', event => event.target.style.backgroundColor = 'pink');

/*6) changed buttons*/
let btns = document.querySelectorAll(`.btn`);
console.log(btns);
btns.forEach(function(curr){
    curr.addEventListener(`dblclick`, function(event){
        curr.style.background= `pink`
        alert(`You clicked the button!!!!!`)
    })
})

/*7) Added alert for nav*/
const navigation = document.querySelector(`.nav-link`);

navigation.addEventListener(`dblclick`, () => {
    alert (`Enjoy our other FUN pages!!`)
});

/*8) Window Resize*/
const textColor = document.querySelector(`h1`);

window.addEventListener(`resize`, () => {
    textColor.style.color = `green`
})


/*9) No copy!*/
body.addEventListener(`copy`, () => {
    alert(`We wish you could save it, but that's a secret!`)
})

/*10) Added mousemove */
const intro = document.querySelector(`.intro p`)
intro.addEventListener(`mousemove`, () => {
    intro.style.fontSize = `20px`
})

/* Prevent Default*/
const navLink = document.querySelectorAll(`.nav-link`)
navLink.forEach(navigation => {
    navigation.addEventListener(`click`, (event) => {
        event.preventDefault()
    })
})

/*Stop Propagation*/
const div = document.querySelector(`.footer div`)
div.addEventListener(`click`, () => {
    div.style.backgroundColor = `orange`
})