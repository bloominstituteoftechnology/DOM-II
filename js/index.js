// Your code goes here
let navigationItems = document.querySelectorAll('.nav-link');

navigationItems.forEach(item => {
  item.addEventListener('mouseover', () => {   
        item.style.color = '#17A2B8';
    })
  item.addEventListener('mouseleave', () => {   
    item.style.color = '#000'; 
})
})

let buttons = document.querySelectorAll('.btn').addEventListener('keydown', myFunction());

function myFunction() {
    buttons.querySelectorAll('.btn').style.backgroundColor = "red";
}

