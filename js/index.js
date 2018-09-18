// Your code goes here
let navLink = document.querySelectorAll('#link-tag');
navLink.forEach((link) => {
    link.addEventListener('click', (e) => { 
    e.preventDefault();
});
});


let mouseOver = document.querySelectorAll('h2');
mouseOver.forEach((h2) => {
    h2.addEventListener('mouseover', (e) => {
        e.target.style.color = "teal";
        
        setTimeout(function() {
            e.target.style.color = "";
          }, 1000);
        }, false);
});

let dblClick = document.querySelector('.intro img');
dblClick.addEventListener('dblclick', () => {
    dblClick.classList.toggle('display');

    setTimeout(function() {
        dblClick.classList.toggle('display');
      }, 10000);
    }, false);