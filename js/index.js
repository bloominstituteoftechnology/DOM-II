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

// Double Click -- Change logo font in nav on double click 
const logo = document.querySelector('h1');
logo:addEventListener('dblclick', (e)=>{
    e.target.textContent = "LOL Bus!";
    e.stopPropagation();
})

// Resize -- Resizing window/browser counter chnages number 
const times = document.getElementById('demo');
let x = 0;
window.addEventListener('resize', ()=> {
    let txt = x +=1;
    times.innerText = txt;
})

// Drag and Drop 
const dragStart = (e) =>{
    initialX=e.clientX -xOffset
    initialY=e.clientY -yOffset
if (e.target) {active=true}

}   
    const drop = () => {
    initialX=currentX
    initialY=currentY
    active=false
}

const drag = (e) =>{
    if (active) {e.preventDefault()
    currentX=e.clientX -initialX
    currentY=e.clientY -initialY
    xOffset=currentX
    yOffset=currentY
    setTranslate(currentX, currentY, e.target)
    }
}
const setTranslate = (xPos, yPos, e)=>{
e.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`
}
document.querySelector('.adventure-time').forEach(Element=>{
    Element.draggable=true
    Element.ondragstart=dragStart
})
const dragZone = document.querySelector('.home')
let active = false
let currentX
let currentY
let initialX
let initialY
let xOffset = 0
let yOffset = 0
dropZone.ondragover=drag
dropZone.ondrop=drop



// change
const contentP1 = document.querySelector('.text-content p');
contentP1.addEventListener('cut', (e) =>{
    alert('Do not cut my text!');
    e.stopPropagation();
})