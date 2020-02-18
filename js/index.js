// Your code goes here
// mouseenter event

let missedTheBus = document.querySelector('h1');
missedTheBus.addEventListener('mouseover', () => {
    missedTheBus.style.backgroundColor = '#f4ff61';
    missedTheBus.style.color = 'black';
});

// mouseleave event

missedTheBus.addEventListener('mouseleave', () => {
    alert("Don't miss the fun!");
});

// dblclick event

let changePic = document.querySelector('.intro img');
changePic.addEventListener('dblclick', () => {
    changePic.src = 'https://files.constantcontact.com/726779ab001/79b55cdc-020c-4b53-8e96-d4c21ffdb181.jpg?a=1125872615244';
});

// resize event

let newSize = document.querySelector('.intro img');

window.addEventListener('resize', () => {
    newSize.style.display = 'none';

}); 

// mousedown event

let down = document.querySelector('.img-content img');
down.addEventListener('mousedown', () => {
    down.style.border = "41px solid red";
});

// mouseup event 

// let up = document.querySelector('.img-content img');
down.addEventListener('mouseup', () => {
    down.style.display = "none";
}); 

// wheel event *un-comment when needed.

// let wheelEvent = document.querySelector('html');
// wheelEvent.addEventListener('wheel', () => {
//     alert('Sorry, I know this is annoying. Drag the actual scrollbar.');
// });

//

// Copy event 

let copyEvent = document.querySelector('p');
copyEvent.addEventListener('copy', () => {
    alert('Why you trying to copy me?');
});

// Load event

let loadEvent = document.querySelector('p');
window.addEventListener('load', () => {
    loadEvent.style.color = 'orange';
});

// Dragstart event

const dragDelete = document.querySelector('.intro img');
dragDelete.addEventListener('dragstart', () => {
    dragDelete.style.display = 'none';
}); 

// Footer changes background when  you enter / leave
const footer = document.querySelector('footer');

footer.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = '#c3f584';
});

footer.addEventListener('mouseleave', (e) => {
    e.target.style.backgroundColor = '#FFEBCD';
});

// keydown/keyup
const newText = document.querySelector(".logo-heading");

window.addEventListener("keydown", () => {
  newText.textContent = "Come Join Us!";
  newText.style.color = "#f65c78";
  newText.style.fontSize = "4rem";
});

window.addEventListener("keyup", () => {
  newText.textContent = "Dont miss out!";
  newText.style.color = "#212529";
  newText.style.fontSize = "4rem";
});

