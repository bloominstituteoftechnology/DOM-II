// Your code goes here

// MOUSEOVER===========================================
const heading = document.querySelector('.logo-heading');

heading.addEventListener('mouseover', function(e){
    e.target.style.color = getColor()
})

function getColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// KEYDOWN=================================================

const audio = document.querySelector('audio')
document.addEventListener('keydown', function(){
    console.log('btn was pressed')
})


// LOAD=====================================================

// window.addEventListener('load', function(){
//     alert('Hey, this is the .load() method! Click ok to see that your page has loaded!');
// })

// RESIZE======================================================
const links = document.querySelectorAll('.nav-link');

window.addEventListener('resize', function(){
    links.forEach(function(e){
       e.style.color = getColor();
    })
})

// SCROLL=====================================================
const h2 = document.querySelectorAll('h2')

document.addEventListener('scroll', function(){
    h2.forEach(function(e){
        e.classList.toggle('text-pop-up-top')
    })
})

// FOCUS====================================================

const h4 = document.getElementsByTagName('h4')

for(let i=0; i < h4.length; i++){
    h4[i].focus()
}