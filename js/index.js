// Your code goes here


// Mouseover -- Changes Sign Me Up button color on mouseover
const btn = document.querySelectorAll('.btn');
btn.forEach(item => {
    item.addEventListener('mouseover', e =>{
        e.target.style.background = 'black';
        e.target.style.color = 'white';
        e.preventDefault();
    })
})

// Mouseleave -- Changes Sign Me Up button color on mouseleave 
btn.forEach(item =>{
    item.addEventListener('mouseleave', e =>{
        e.target.style.background ='#17A2B8'
    })
})


// Keydown -- Alert modal once you type in keyboard
const windowEvent = document.querySelector('body');
windowEvent.addEventListener('keydown', () =>{
    alert('Sup! How about you press some keys?!');
})

// Wheel
const header = document.querySelector('header');
header.addEventListener('wheel', e =>{
    e.target.style.background = 'blue';
})

// Load -- Loads alert message upon page load 
window.addEventListener('load', () =>{
    alert('Welcome to Fun Bus! Come on and ride on the Magic School Bus!');
})

// Focus -- Select element to focus on
const a = document.querySelectorAll('nav a');
a.forEach(item =>{
    item.addEventListener('focus', e=>{
        e.target.style.color = 'red';
        e.preventDefault();
    })
})

// Blur --  
a.forEach(item=>{
    item.addEventListener('blur', e=>{
        e.target.style.color = 'darkblue';
    })
})

