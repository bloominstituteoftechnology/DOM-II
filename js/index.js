// Your code goes here

let funBus = document.querySelector('.intro img');

funBus.addEventListener('mouseover', event => {
    event.target.src = ['img/no-fun-bus.jpg'];
});

document.addEventListener('keydown', event => {
    let keyName = event.key;
    let logged = [];
    // console.log(`key pressed: ${keyName}`);
    logged.push(keyName);
    console.log(logged);
});

document.addEventListener('wheel', event => {
    alert('You\'re not moving this bus!');
});

let mapImage = document.querySelector('.img-content');

mapImage.addEventListener('drag', event => {
    alert('STOP IT, HOW WILL WE KNOW WHERE TO GO??');
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


//Going to need to practice more with Dom-II