// Your code goes here
const highLightLink = document.querySelector('nav');
const destinationImg = document.querySelector(".content-destination img")
const nav = document.querySelector(".main-navigation");
const input = document.querySelector(".text-content p");
const footer = document.querySelector('.footer');
const funBusMain = document.querySelector('.logo-heading');
const imgs = document.querySelectorAll("img");



// mouseover

highLightLink.addEventListener('mouseover', (event) => {
    
    event.target.style.backgroundColor = 'lightGrey';
    event.preventDefault();
    event.stopPropagation;


    setTimeout (() => {
        event.target.style.backgroundColor = 'white'; 
    }, 100);
}, false);


// keydown
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    alert(' hey, you pressed key: ' + keyName + '. Please press another key!');
  });




//loaded
window.addEventListener('load', () => {
    document.body.style.backgroundColor = 'lightgrey';
  })

//click
   
window.addEventListener('click', (event) => {
    event.stopPropagation;
    event.target.style.fontWeight = 'bold';
}, false);


// double click
destinationImg.addEventListener("dblclick", function(e) {
  e.target.src =
    "https://www.coolthings.com/wp-content/uploads/2013/11/manta-resort-underwater-room-1.jpg";
});

//wheel
window.addEventListener("wheel", function() {
  nav.style.backgroundColor = "#3eafff";
  nav.style.color = "white";
  nav.style.border = "5px dotted white";
});

// resize
window.addEventListener('resize',(event) => {
    alert('Well i can tell your a developer, stop resizing my window, i need my space...');
});

//Right-clicking footer alerts a message.
footer.addEventListener('contextmenu', function(){ 
    alert ('You just clicked my foot')

    
});

//mouse over
funBusMain.addEventListener('mouseover', (event) =>{ 
    funBusMain.style.fontSize = '7rem';
});

//mouse out
funBusMain.addEventListener('mouseout', (event) =>{ 
    funBusMain.style.fontSize = '3rem';
});

imgs.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    e.target.style.backgroundImage = "src = img/fun-bus.jpg ";
})




