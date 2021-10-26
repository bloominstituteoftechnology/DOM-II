// Your code goes here
//Links turn red on click and revert on doubleclick
let navLinks = document.querySelectorAll('nav a');
let navLinksArray = Array.from(navLinks);
for(let i = 0; i < navLinksArray.length; i++){
    navLinksArray[i].addEventListener('click', (event) => {event.target.style.color = 'red'; });
}
for(let i = 0; i < navLinksArray.length; i++){
    navLinksArray[i].addEventListener('dblclick', (event) => {event.target.style.color = 'blue'; });
}
//minimize photos on click, resize on mouseover
let images = document.querySelectorAll('img');
let imagesArray = Array.from(images);
for(let i = 0; i < imagesArray.length; i++){
        imagesArray[i].addEventListener('click', (event) => {event.target.height = '50'; });
}
for(let i = 0; i < imagesArray.length; i++){
    imagesArray[i].addEventListener('mouseover', (event) => {event.target.height = "300"; });
}
