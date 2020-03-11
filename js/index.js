// Your code goes here

// scale image and have it go back
const image = document.querySelectorAll('img');
image.forEach(img => {
  img.addEventListener('mouseover', () => {
    img.style.transform = 'scale(1.1)';
    img.style.transition = 'transform 1s';
  });
});

image.forEach(img => {
  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
    img.style.transition = 'transform 1s';
  });
});