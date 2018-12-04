// Your code goes here

//On Mouse Over/Mouse Leave - Pseudo Hover Effect
let navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(a => {
    a.addEventListener('mouseover', (e) => {
        e.target.style.transform = 'scale(1.1)';
    });
    a.addEventListener('mouseleave', (e) => {
        e.target.style.transform = 'scale(1.0)';
    });
});

//On Load
let images = document.querySelectorAll('img');
images.forEach(i => {
    i.addEventListener('load', (e) => {
        e.target.style.boxShadow = '1px 2px 2px black';
    });
})

//On Keydown
let body = document.querySelector('body');
body.addEventListener('keydown', (e) => {
   let colors = [
       'grey',
       'silver',
       'white'
   ];
   let bgColor = colors[Math.round(Math.random() * 2)];
   e.target.style.backgroundColor = bgColor;
});

//On Drag
let funBus = document.querySelector('.logo-heading');
funBus.addEventListener('dragstart', (e) => {
    e.target.textContent = 'Being Dragged';
});
funBus.addEventListener('dragend', (e) => {
    e.target.textContent = 'Fun Bus';
});

//On resize
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
window.addEventListener('resize', (e) => {
    images.forEach((img) => {
        img.style.boxShadow = `1px 2px 2px ${getRandomColor()}`;
    });
});

//Double Click
images.forEach(i => {
    i.addEventListener('dblclick', (e) => {
        if(e.target.style.transform !== 'scale(1.2)'){
            e.target.style.transform = 'scale(1.2)';
        } else {
            e.target.style.transform = 'scale(1.0)';
        }
        
    });
});

//Scroll
let header = document.querySelector('header');
window.addEventListener('scroll', (e) => {
    header.style.backgroundColor = getRandomColor();
});

//Copy
body.addEventListener('copy', (e) => {
    navigator.clipboard.readText().then(t => {
        alert(`"${t}" was copied to your clipboard.`);
    });
});

//On Click
let buttons = document.querySelectorAll('.btn');
buttons.forEach(b => {
    b.addEventListener('click', (e) => {
        e.target.textContent = 'Signed Up!';
    });
});

//On Right Click/Context Menu
body.addEventListener('contextmenu', (e) => {
    e.preventDefault();
}); //Good for creating custom right click menus on websites