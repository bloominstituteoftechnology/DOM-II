// Your code goes here
//----------------------------------------------------------------------------------------------------------------|
// (1) Logo Anim ===
const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', (e) => {
    TweenMax.to(e.target, 1, { rotation: 360 });
});
logo.addEventListener('mouseleave', (e) => {
    TweenMax.to(e.target, 1, { rotation: -360 });
});

//----------------------------------------------------------------------------------------------------------------|
// (2) Body color change on keydown ===
const body = document.querySelector('body');

body.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        body.style.backgroundColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
        //Random color hex
    }
});
//----------------------------------------------------------------------------------------------------------------|
// (3) Hover nav link behavior ===
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(a => {
    a.addEventListener('mouseover', (e) => { //Mouse on
        e.target.style.color = "lightgreen";
        e.preventDefault();
    });
    a.addEventListener('mouseleave', (e) => {  //Mouse off
        e.target.style.color = "black";
        e.preventDefault();
    });
});
//----------------------------------------------------------------------------------------------------------------|

// (4) Preventing nested elements from bubbling using stopPropagation ===
const intro = document.querySelector('.intro');
const introImg = document.querySelector(".intro img");

intro.addEventListener('click', (e) => {
    alert("outer");
});

introImg.addEventListener('click', (e) => {
    alert("inner");
    e.stopPropagation();
});
//----------------------------------------------------------------------------------------------------------------|

// (5) On key press log which key was pressed
document.addEventListener('keydown', logKey);
function logKey(e) {
    console.log(` ${e.code}`);
}
//----------------------------------------------------------------------------------------------------------------|
// (6) Rotate images in different directions depending on direction of mouse scroll===
const imgContentImgs = document.querySelectorAll('.img-content img');
imgContentImgs.forEach(img =>{
    img.addEventListener('wheel', (e)=>{
        e.preventDefault();
        if(e.deltaY < 0){TweenMax.to(e.target, 1, { rotation: 360 });}
        if(e.deltaY > 0){TweenMax.to(e.target, 1, { rotation: -360 });}
    });
})
//----------------------------------------------------------------------------------------------------------------|


