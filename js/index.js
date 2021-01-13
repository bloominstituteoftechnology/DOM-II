// Your code goes here
let navLinks = document.querySelectorAll(('.nav-link'));

navLinks.forEach((link) => {
    link.addEventListener('mouseover',(event) => {

        event.target.style.color = "red"
    })
    link.addEventListener('mouseout',(event) => {
    
        event.target.style.color = "black"
    })
})

let header = document.querySelector('header')
window.addEventListener('scroll', (e) => {
    if(window.scrollY > 400){
          header.style.opacity = 0;
    } else {
        header.style.opacity = 1;
    }

  
    
})

let buttons = document.querySelectorAll('.btn')
buttons.forEach((button) =>{
    button.addEventListener('click', (e)=>{
        e.target.style.opacity = .5
        e.preventDefault()
    })
    button.addEventListener('dblclick', (e)=>{
        e.target.style.opacity = 1
        e.preventDefault()
    })
})

let textContent = document.querySelectorAll('p');
textContent.forEach((text)=> {
    console.log(text)
    text.addEventListener('mouseover', (e)=>{
        console.log('event--')
        e.target.style.fontSize = "2rem"
    })
    text.addEventListener('mouseout', (e)=>{
        console.log('event--')
        e.target.style.fontSize = "1.5rem"
    })
})