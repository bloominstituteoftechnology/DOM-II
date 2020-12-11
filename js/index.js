const home = document.querySelector(".home");
const bus = home.querySelector("img");
const text = document.getElementsByTagName("p");
const nav = document.getElementsByClassName("nav-link");
const content = document.querySelector('.content-pick');
const links = document.querySelectorAll('nav a');
const htext = document.querySelector('.logo-heading');
const images = document.querySelectorAll('img');
const counter = document.createElement('span');
const header = document.querySelector('header');
const headerh2 = header.querySelector('h2');
const button = document.createElement('button');
button.style.color = 'blue';
button.style.borderRadius = '10px';
button.style.borderWidth = '1px';
button.textContent = 'Click Me';
button.style.borderColor = 'black';
button.style.marginBottom = '2%';



counter.textContent = ' 0';
counter.style.color = 'red';
counter.style.fontSize = '4rem';
document.querySelector('.intro').appendChild(counter);

Array.from(document.links).forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
    });
  });

// #1 - 'dblclick'
Array.from(document.links).forEach(function (link) {
    document.addEventListener("dblclick", function (event) {
        link.remove();
        document.querySelector('nav').appendChild(button);
    });
  });
//#2 - 'scroll'
Array.from(nav).forEach(function(link){
    document.addEventListener('scroll', function(event){
        link.textContent = '????';
        link.style.color = 'gold';
        event.stopPropagation();
    })
});
//#3 - 'mouseover'
Array.from(nav).forEach(function(link){
    bus.addEventListener('mouseover', function(event) {
        link.textContent = 'A mystery';
    });
});
//#4 - 'wheel'
bus.addEventListener('wheel', function(event){
    bus.src = 'https://herepup.com/wp-content/uploads/2015/12/Dog-Advice-1-1.jpg';
});
//#5 - 'click'
Array.from(text).forEach(function (p){
    document.addEventListener("click", function (event) {
        p.style.color = 'green';
    });
});
//#6 - 'keydown'
document.addEventListener('keydown', function(event){
    if (event.key === "Escape") {
        htext.textContent = "You Can't Escape :(";
    }
});

//#7 - 'resize'
window.addEventListener('resize', function(event){
    images.forEach((image) => image.remove());
});

//#8 - 'load'
window.addEventListener('load', (event) => {
    var x = 0;
    var txt = x += 1;
    counter.innerHTML = txt;   
});

//#9 - 'select'

Array.from(text).forEach(function (p){
    button.addEventListener("focus", (event) => {
        p.remove();
    });
});

//#10 - 'select'

document.querySelector('.intro h2').addEventListener('select', (event) => {
    headerh2.textContent = 'SELECTED';
})