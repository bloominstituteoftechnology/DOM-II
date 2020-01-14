
// 1.) Header: Click 
const fun = document.querySelector('.logo-heading');
fun.addEventListener('click', () => {
  fun.style.color = 'blue';
})

// 2.) Header: Dbl Click 
const fun2 = document.querySelector('.logo-heading');
fun2.addEventListener('dblclick', () => {
  fun2.style.color = 'red';
})

// 3.) Header: ContextMenu
const rClick = document.querySelector('.logo-heading');
rClick.addEventListener('contextmenu', () => {
  rClick.style.color = 'purple';
})

// 4.) Fun Bus Image: Mouse Enter & Mouse Leave
const bus = document.querySelector(".intro img")
bus.addEventListener("mouseenter", () => {
  bus.style.transform ="scale(1.2)";
  bus.style.transition = "transform 0.3s"
})
// 5.) ^^^^^^^This is the Mouse Leave^^^^^^^
bus.addEventListener("mouseleave", function() {
  bus.style.transform = "scale(1)"
  bus.style.transition = "transform 0.3s"
})

// 6.) Fun Bus Image: MouseOver
const busPic = document.querySelector('img');
busPic.addEventListener('mouseover',  things=>things.target.src = 'img/destination.jpg')

// Bring back the fuck fun!!!
const myBus = document.querySelector('img');
myBus.addEventListener('mouseleave',  bussie=>bussie.target.src = 'img/fun-bus.jpg')


// 7.) Window: Resize, bus image change 
const smallBus = document.querySelector('.intro img');
window.addEventListener('resize', () => {
    smallBus.src = 'https://images.unsplash.com/photo-1569135218372-6f7f6f3d7e55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80';
});

// 8.) Sign up Button: MouseDown, ForEach
const bootons = document.querySelectorAll(".btn").forEach(stuff => {
    stuff.addEventListener("mousedown", () => {
    stuff.style.backgroundColor = "purple"
    })
     })

// 9.) Sign up Button: MouseUp, ForEach
const bootuns = document.querySelectorAll(".btn").forEach(thing => {
    thing.addEventListener("mouseup", () => {
    thing.style.backgroundColor = "yellow"
    })
     })

// 10.) WELCOME: Scroll
const redact = document.querySelector('p');
window.addEventListener('scroll', () => {
    redact.style.backgroundColor = 'black';
});




