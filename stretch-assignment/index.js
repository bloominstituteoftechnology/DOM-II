const blocks = document.querySelectorAll(".blocks");

const red = document.querySelector(".block--red");
const blue = document.querySelector(".block--blue");
const green = document.querySelector(".block--green");
const pink = document.querySelector(".block--pink");
const gray = document.querySelector(".block--gray");

// This puts the block to the top once they're clicked
// I'm certain there's a better way of doing this than copy & paste

red.addEventListener("click", () => {
    TweenMax.to(blocks, 2, {
        y:100,
        ease:Bounce.easeOut,
    });
    TweenMax.to(red, 2, {
        y:-50,
        ease:Bounce.easeOut,
    });
});

blue.addEventListener("click", () => {
    TweenMax.to(blocks, 2, {
        y:100,
        ease:Bounce.easeOut,
    });
    TweenMax.to(blue, 2, {
        y:-250,
        ease:Bounce.easeOut,
    });
});

green.addEventListener("click", () => {
    TweenMax.to(blocks, 2, {
        y:100,
        ease:Bounce.easeOut,
    });
    TweenMax.to(green, 2, {
        y:-375,
        ease:Bounce.easeOut,
    });
});

pink.addEventListener("click", () => {
    TweenMax.to(blocks, 2, {
        y:100,
        ease:Bounce.easeOut,
    });
    TweenMax.to(pink, 2, {
        y:-500,
        ease:Bounce.easeOut,
    });
});

gray.addEventListener("click", () => {
    TweenMax.to(blocks, 2, {
        y:100,
        ease:Bounce.easeOut,
    });
    TweenMax.to(gray, 2, {
        y:-650,
        ease:Bounce.easeOut,
    });
});

// While being clicked, move the block to the right

gray.addEventListener("mousedown", () => {
    TweenMax.to(gray, 2, {
        x: 1000,
        ease:Bounce.easeOut,
    });
});
