// Your code goes here

const navBar = document.querySelector("nav");

navBar.addEventListener('click', function(event) {
    event.preventDefault();
    event.target.style.color = "green";
    TweenMax.to("a", 1, {x:100});
});

const smallBus = document.querySelector('.fun-bus');

smallBus.addEventListener('mouseover', function(event) {
    event.target.style.display = "none";
});

const btn1 = document.querySelector('.btn1');
btn1.addEventListener('dblclick', function(event) {
    event.stopPropagation();
    event.target.style.fontSize = "3rem";
})

const btn2 = document.querySelector('.btn2');
btn2.addEventListener('wheel', function(event) {
    event.target.style.fontSize = "3rem";
})

const btn3 = document.querySelector('.btn3');
btn3.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = "3rem";
})

const funInSun = document.querySelector('.fun-in-sun');
funInSun.addEventListener('copy', function(event) {
    event.target.style.color = "yellow";
});

document.addEventListener("contextmenu", function(event) {
    console.log("Hello fellow developer");
});

document.addEventListener('dragstart', function(event) {
    alert("Put me back!");
});


document.addEventListener('keydown', function(event) {
    const tl = new TimelineMax({repeat:6, repeatDelay:1, yoyo:true});
    tl.staggerTo("p", 0.2, {className:"+=superShadow", top:"-=10px", ease:Power1.easeIn}, "0.3", "start")
});

document.addEventListener('dragend', function(event) {
    alert("Thanks!");
});

console.log(funInSun);