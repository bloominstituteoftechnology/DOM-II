// Your code goes here
let pageImages = document.querySelectorAll('img');
pageImages.forEach(image => {
    image.addEventListener('mouseover', e => {
        console.log(e.target.classList.toggle('toggleImage'));
    });
})