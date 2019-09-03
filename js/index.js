// Your code goes here
const head1 = document.querySelector('h1');
    head1.addEventListener('contextmenu', e => {
    head1.style.backgroundColor ='yellow';
    head1.style.color = 'brown'
    event.stopPropagation();
})

const headr = document.querySelector('header');
    headr.addEventListener('contextmenu', e => {
    headr.style.backgroundColor ='red';
    

})

const bodyRed = document.querySelector('body');
    bodyRed.addEventListener('dblclick', e => {
    bodyRed.style.backgroundColor ='yellow';
})

const scaleUp = document.querySelectorAll('h2');
scaleUp.forEach(item => {
item.addEventListener('mouseenter', event => {
item.style.transform = 'scale(1.1)';
item.style.transition = ' transform 2.5s';
event.stopPropagation();
})
})

const contentDown = document.querySelectorAll('.content-pick');
contentDown.forEach(item => {
 item.addEventListener('mouseleave', event => {
   item.style.transform = 'scale(1.2)';
   item.style.transition = 'transform 0.5s';
 })
});



const scaleDown = document.querySelectorAll('img');
scaleDown.forEach(item => {
item.addEventListener('mouseover', event => {
item.style.transform = 'scale(.9)';
item.style.transition = ' transform 0.5s';
})
})

const textBlue = document.querySelector('nav');
    textBlue.addEventListener('click', e => {
    textBlue.style.backgroundColor ='blue';
})

const navText = document.querySelectorAll('a');
navText.forEach(item => {
item.addEventListener('mouseenter', event => {
item.style.color = 'red'
})
})


const newImg = document.querySelectorAll('img');
newImg.forEach(item => {
item.addEventListener('click', event => {
item.src= 'https://images.unsplash.com/photo-1524080989185-22b076ffb631?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
item.alt ="bus"
item.style.transform = 'scale(.9)';
})
})

const foot = document.querySelector('footer');
foot.addEventListener('mouseenter', e =>{
foot.style.paddingBottom = "6rem"
foot.textContent = 'not copyright!'
})




const link = document.querySelector('.google-link');
link.addEventListener('click', e => {
e.preventDefault();
});
