// Your code goes here

let funBus = document.querySelector('.intro img');

funBus.addEventListener('mouseover', event => {
    event.target.src = ['img/no-fun-bus.jpg'];
});

funBus.addEventListener('click', event => {
    TweenMax.to(funBus, 1, {opacity: 0.1});
});

document.addEventListener('keydown', event => {
    let keyName = event.key;
    let logged = [];
    // console.log(`key pressed: ${keyName}`);
    logged.push(keyName);
    console.log(logged);
});

document.addEventListener('dblclick', event => {
    TweenMax.to('body', 5, {rotation:360, scale:0.5, x:50, ease:Power4.easeOut});
});

document.addEventListener('wheel', event => {
    alert('You\'re not moving this bus!');
});

let mapImage = document.querySelector('.img-content');

mapImage.addEventListener('drag', event => {
    alert('STOP IT, HOW WILL WE KNOW WHERE TO GO??');
});

mapImage.addEventListener('click', event => {
    TweenMax.to(mapImage, 5, {rotation:180, scale:0.5, x:50, ease:Power4.easeOut});
});

window.addEventListener('load', event => {
    alert('Welcome to the Fun Bus!');
});

let navAnchor = document.querySelector('.nav a');

navAnchor.addEventListener('focus', event => {
    event.target.style.color = 'pink';
    event.preventDefault();
});

window.addEventListener('resize', event => {
    alert('Pls stop');
    TweenMax.to('body', 5, {rotation:180, scale:1.0, x:50, ease:Power4.easeOut})
});



document.addEventListener('scroll', event => {
    alert('weeeeeeeee');
});


let navigation = document.querySelector('.main-navigation');

navigation.addEventListener('dblclick', event => {
    event.target.style.backgroundColor = 'yellow';
});

// let introPara = document.querySelector('.intro p');

// introPara.addEventListener('click', event => {
//     event.target.style.color = blue;
// });

window.onbeforeunload = confirmExit;
function confirmExit() {
    return "Are you sure you want to leave?";
};


//Going to need to practice more with Dom-II