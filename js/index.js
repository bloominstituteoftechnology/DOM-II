// Your code goes here

//1
const headingWarp = document.querySelector('.logo-heading');

headingWarp.addEventListener('mouseover', () =>{
    headingWarp.textContent = 'Bun Fus';
    
});

headingWarp.addEventListener('mouseout', () => {
    headingWarp.textContent = 'Fun Bus'
})

//2
const scaryPic = document.querySelectorAll('.img-content img').forEach((img) => {
    img.addEventListener('mouseenter', () => {
        img.src = 'https://i.ytimg.com/vi/a5xYjc_s0kI/maxresdefault.jpg';
    })
    img.addEventListener('mouseleave', () => {
        img.src = 'https://smalbanynewyork.files.wordpress.com/2018/09/gotcha.png?w=645';
    })
})

//3
const html = document.querySelector('html');
const beeswax = document.querySelectorAll('p').forEach((p) => {
    html.addEventListener('auxclick', () => {
        p.textContent = "Mind your business!!!";
    })
})

//4

const ohNo = document.querySelector('.intro img');
window.addEventListener('resize', () =>{
    ohNo.src = 'https://i.pinimg.com/originals/9a/0a/78/9a0a780018ca1aa855e8b5a2788b0d7a.png'
})

//5

const redBtn = document.querySelector('.btn1');
const body = document.querySelector('body');
redBtn.addEventListener('mousedown', () => {
    body.style.backgroundColor = 'red'
})
redBtn.addEventListener('mouseup', () => {
    body.style.backgroundColor = 'white'
})

//6

const greenBtn = document.querySelector('.btn2');
greenBtn.addEventListener('click', () => {
    body.style.color = 'green'
})

//7

greenBtn.addEventListener('dblclick', () => {
    body.style.color = 'black'
})

//8

const blueBtn = document.querySelector('.btn3');
blueBtn.addEventListener('auxclick', () => {
    body.style.backgroundColor = 'blue'
})

blueBtn.addEventListener('dblclick', () => {
    body.style.backgroundColor = 'white'
})

//9


const lawn = document.querySelectorAll('p').forEach((p) => {
    p.addEventListener('mousemove', () => {
        p.textContent = "Get off my lawn!!!";
    })
})

//10

body.addEventListener('click', () => {
    body.style.backgroundColor = 'fuchsia'
})

const bodyText = document.querySelector('.text-content1');

bodyText.addEventListener('click', () => {
    bodyText.style.backgroundColor = 'cyan';
    event.stopPropagation();
    // console.log("Working?")
})


//prevent default

const stopNav = document.querySelector('.nav-link');
stopNav.addEventListener('click', (event) => {
    event.preventDefault();
})


document.querySelectorAll('div').forEach(el => {
    el.addEventListener('mouseenter', () => {
        TweenMax.to(el, 0.1, {x:"+=20", yoyo:true, repeat:10});
        TweenMax.to(el, 0.1, {x:"-=20", yoyo:true, repeat:10});
    })
})

