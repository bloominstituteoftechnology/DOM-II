// Your code goes here
/*1) Added a No Copy event!*/
document.addEventListener('copy', () => {
    alert('Sorry, this page is for your eyes only!')
})

/*2) Added dblclick event*/
const navigation = document.querySelector('.nav-link');
navigation.addEventListener('dblclick', () => {
    alert ('Do you have to leave this page?')
});

/*3) Added keydown event*/
function closeNavigation(event) {
    if (event.key === "Escape") {
        navigation.classList.add("off")
    }
}
document.addEventListener('keydown', closeNavigation);

/*4) Window resize event*/
window.addEventListener('resize', reportWindowSize);

/*5) Added click event to header and footer*/
const header = document.querySelector(".main-navigation")
header.addEventListener('click', event => event.target.style.backgroundColor = 'green');

const footer = document.querySelector(".footer")
footer.addEventListener('click', event => event.target.style.color = 'green')

/*6) mouse enter event*/
const images = document.querySelectorAll("img\adventure.jpg");

Array.from(images).forEach((image) => {
    image.style.cursor = "zoom-in";
    image.addEventListener("mouseenter", () => {
        image.style.transform = "scale(1.2)";
        image.style.transform= "all 0.6s"
    })
/*7) mouseleave event*/
    image.addEventListener("mouseleave", () => {
        image.style.transform= "scale(1)";
        image.style.transform= "all 0.6s"
    });
});

/*7) load alert*/
window.addEventListener('load', () => {
    alert ("Enjoy your time here!!!")
})

/*8) mouseover event*/
const intro = document.querySelector('.intro p')
intro.addEventListener('mouseover', () => {
    intro.style.fontSize= '22px'
})

/*9) changed body color with click*/
const body = document.querySelector("body")
body.addEventListener('click', event => event.target.style.backgroundColor= 'orange')

/*10) button change and alert*/
let btns = document.querySelectorAll('.btn')
console.log(btns)
btns.forEach(function(curr){
    curr.addEventListener('dblclick', function(event){
        curr.style.backgrounf= 'green'
        alert ('Slow your role!!!')
    })
})

/*Prevent Default*/
const navLink = document.querySelectorAll('.nav-link')
navLink.forEach(navigation => {
    navigation.addEventListener('click', (event) => {
        event.preventDefault()
    })
})

/*Stop Propogation*/
const div = document.querySelector('.footer div')
div.addEventListener('click', () => {
    div.style.background= 'blue'
})