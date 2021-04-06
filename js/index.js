// Your code goes here

//WELCOME H2 Change Color on click
const welcome = document.getElementById('welcome');

welcome.addEventListener('click', e => {
    
    welcome.style.color = "green"
    if (welcome.style.color = "green") {
        welcome.style.color = "black"
    }
})


//preventDefault() Toggle Setup

const cb = document.createElement('input');

cb.type = "checkbox";

document.querySelector('.nav').appendChild(cb);

//preventDefault() Method 

const allLinks = document.querySelector('.nav-link');

allLinks.addEventListener('click', e => {
    if (!cb.checked) {
        e.preventDefault();
    }   
});

//Mouseover 

welcome.addEventListener('mouseover', () => {
    welcome.style.color = "orange"
});

//MouseOut

welcome.addEventListener('mouseout', () => {
    welcome.style.color = "black";
})

//keydown 

window.addEventListener('keydown', e => {
    if (e.key === 's') {
        alert("save")
    }
});

//scroll

window.addEventListener('scroll', () => {
   document.querySelectorAll('p').forEach(item => {
       item.style.color = "blue";
   })
});

// load

window.addEventListener('load', () => {
    let num = Math.random() * 5;
    alert(`my favorite number is ${num}`)
}); 

//dblclick 

window.addEventListener('dblclick', () => {
    document.querySelectorAll('p').forEach(item => {
        item.style.fontSize = "4rem"
    })
})




