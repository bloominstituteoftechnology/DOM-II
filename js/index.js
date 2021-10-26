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

//Header turns red when r is pressed
let header = document.querySelector('h1');
document.addEventListener('keydown', function(event) {
    if (event.key === 'r'){
        header.style.color = 'red';
    }
});

//text green with wheel
let p = document.querySelectorAll('p')
let pArray = Array.from(p);
document.addEventListener('wheel', function(){
    for (let i = 0; i < pArray.length; i++){
        pArray[i].style.color = "green";
    }
});
//console log loading of page with load (don't use document, use window)
window.addEventListener('load', function()
{console.log('page is loaded')}
);

//add background on h2 focus
let h2 = document.querySelectorAll('h2');
let h2Array = Array.from(h2);
for(let i = 0; i < h2Array.length; i++){
    h2Array[i].addEventListener('focus', (event) => {event.target.style.background = 'orange'; });
}