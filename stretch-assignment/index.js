// TweenMax.to(target, duration, {vars});

let runBtn = document.querySelector(".run");

runBtn.addEventListener('click', () => {
    TweenMax.to(".block", 3, { marginLeft: 600 });
});



let staggerBtn = document.querySelector(".stagger");

staggerBtn.addEventListener('click', () => {
    TweenMax.staggerTo(".block", 1, {
        rotation: 360,
        marginLeft: 100
    }, 1);
});

let theButton = document.querySelector("#button");
theButton.addEventListener('click', () => {
    alert("London Is My Home");
});

let firstbutton = document.querySelector(".j1");
firstbutton.addEventListener('mouseover', () => {
    alert("This is the first Button");
});

let testarticle = document.querySelector(".j2");
testarticle.addEventListener('mouseover', () => {
    alert("This is our first test article");

});