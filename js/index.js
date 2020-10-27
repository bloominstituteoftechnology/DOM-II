const bigTitle = document.querySelector('h1');
console.log(bigTitle)
const linkBar = document.querySelectorAll('nav a');
console.log(linkBar)
const busPic = document.querySelector('div header img');
console.log(busPic)
const mapPic = document.querySelector('.img-content img');
console.log(mapPic)

bigTitle.addEventListener("mouseover", () => {
    bigTitle.style.fontSize = "60px";
    bigTitle.style.color = "yellow";
});
bigTitle.addEventListener("mouseout", () =>{
    bigTitle.style.fontSize = "70px";
    bigTitle.style.color = "blue";
});

document.querySelectorAll('nav a').forEach(links => {
    links.addEventListener("click", (e) => {
        links.style.color = "orange"
    });
});

busPic.addEventListener("onload", ()=>{
    busPic.style.border = "3px dotted red"
});



let body = document.querySelector('body')
body.addEventListener('keydown', function(event) {
    if (event.keyCode == 66) {
        h1.innerHTML = 'Funnest Bus';
    }
})

// Mouse wheel on body to turn .container.home[0] Orange 
let container = document.querySelectorAll('.container.home')
body.addEventListener('wheel', function() {
    container[0].style.background = '#FDB34B';
})

// When window loads console displays a message
window.addEventListener('load', () => {
    console.log('page is loaded');
})

// When window is resized, the area of the window is calculated
window.addEventListener('resize', () => {
    console.log(window.innerWidth + window.innerHeight)
})

// When scrolled it will console.log
window.addEventListener("scroll", () => {
    console.log('you scrolled')
})

//Select
let introHeader = document.querySelector('.intro h2');
introHeader.addEventListener('select', e => {
    e.currentTarget.style.backgroundColor = 'white';
})


//dbl click on footer for it to turn to teal background
let footer = document.querySelector('footer');
footer.addEventListener('dblclick', function(event) {
    event.target.style.background = '#62A2B8'

})
