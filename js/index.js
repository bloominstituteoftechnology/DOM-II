// Your code goes here
const images = document.querySelectorAll('img');

images.addEventListener('mouseover', function(event) {
    event.target.style.display = 'none';
    event.stopPropagation(); 
})