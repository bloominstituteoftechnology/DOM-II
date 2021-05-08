// Your code goes here



let navBar = document.querySelectorAll('a');

navBar.forEach(nav => {nav.addEventListener('mouseover', event => {
    event.target.style.borderBottom = '1px solid grey';
    event.target.style.color = 'orange';
    
})
  nav.addEventListener('mouseleave', event => {
      event.target.style.border = 'none';
      event.target.style.color = 'black';      
  })
  nav.addEventListener('click', event => {
      event.preventDefault();
  })
})

let mainHeader = document.querySelector('.main-navigation h1');

mainHeader.addEventListener('click', event => {
    alert('Welcome to the Fun Bus! You found an easter egg!');
})
let body = document.querySelector('body');
body.addEventListener('keypress', event => {
    alert('You pressed a Key!')
    event.target.style.backgroundColor = 'grey';
    
})

let newImg = document.querySelectorAll('img')

newImg.forEach(img => {
    img.addEventListener('dblclick', event => {
        img.src = 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80';
    })
})

let destinations = document.querySelectorAll('.destination');

destinations.forEach(destination => {
    destination.addEventListener('mouseenter', event => {
        event.target.style.backgroundColor = 'black';
        event.target.style.color = 'white';
        event.target.style.borderRadius = '10px';
        event.target.style.padding = '5px';
    })
    destination.addEventListener('mouseleave', event => {
        event.target.style.backgroundColor = 'white';
        event.target.style.color = 'black';
        event.target.style.padding = '0px';
    })
})
let buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseenter', event => {        
        event.stopPropagation();
    })
})





