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