// Your code goes here

//This expands the size of the image, it you click it twice
const card = document.querySelector('.intro');

card.addEventListener('dblclick', function (e) {
  card.classList.toggle('large');
});

//
let test = document.querySelector("nav");

test.addEventListener("mouseover", function( event ) {   
    event.target.style.color = "orange";
});
