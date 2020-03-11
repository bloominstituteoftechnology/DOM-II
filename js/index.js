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

// change all p text on scroll 

const textScroll = document.querySelectorAll('p');
textScroll.forEach(txt => window.addEventListener('scroll', () => {
    txt.style.color = 'orange';
}))

//change color back to black on up arrow key 
const textDefault = document.querySelectorAll('p');
textDefault.forEach(txt => addEventListener(
    'keyup',
    ( ) => {
        txt.style.color = 'black';

    }
));

// colors loop in 
