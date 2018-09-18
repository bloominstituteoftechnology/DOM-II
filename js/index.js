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

let dblClick = document.querySelectorAll('.home img');
dblClick.forEach((img) => {
    img.addEventListener('dblclick', () => {
        img.classList.toggle('display');

    setTimeout(function() {
        img.classList.toggle('display');
      }, 10000);
    }, false);
});


document.addEventListener('keydown', (e) => {
    e.key;
    alert('WHY DID YOU DO THAT?!?!?!?! ');
});





