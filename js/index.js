// Your code goes here

// load
// resize
// mouseover
// mouseout
// click
// dblclick
// keydown
// keyup
// keypress
// scroll

window.addEventListener('load', (event) => {
  console.log('Window loaded!');
});

window.addEventListener('resize', (event) => {
  console.log(window.innerHeight, window.innerWidth);
});

const navLink = document.querySelectorAll('.nav-link');
const logoHeading = document.querySelector('.logo-heading');

logoHeading.addEventListener('mouseover', (event) => {
  logoHeading.style.cursor = 'default';
  logoHeading.style.textShadow = '0 0 2px';
  logoHeading.style.transition = 'ease-in-out 0.25s';
});

logoHeading.addEventListener('mouseout', (event) => {
  logoHeading.style.textShadow = '0 0 0';
});

navLink.forEach((link) => {

  link.style.padding = '5px';

  link.addEventListener('mouseover', (event) => {
    link.style.borderRadius = '15px';
    link.style.backgroundColor = 'lightgray';
    link.style.backgroundSize = '200%';
    link.style.textShadow = '0 0 1px';
    link.style.transition = 'ease-in-out 0.25s';
  });

  link.addEventListener('mouseout', (event) => {
    link.style.backgroundColor = 'transparent';
    link.style.textShadow = '0 0 0';
  });

});

const body = document.querySelector('body');
const nav = document.querySelector('.main-navigation');

const img = document.querySelectorAll('img');
const btn = document.querySelectorAll('.btn');
const footer = document.querySelector('.footer');

img.forEach((image, i) => {

  image.toggle = false;

  const parent = image.parentElement;

  if (i === 0 || i === 3) {

    image.addEventListener('click', (event) => {

      switch (image.toggle) {
        case (true): {
          image.style.filter = 'contrast(1)';
          image.style.transition = 'ease-in-out 0.25s';
          image.toggle = false;
          break;
        }
        case (false): {
          image.style.filter = 'contrast(1.25)';
          image.style.transition = 'ease-in-out 0.25s';
          image.toggle = true;
          break;
        }
      }

      event.preventDefault();

    });

  }

  if (i === 1 || i === 2) {

    image.addEventListener('dblclick', (event) => {

      switch (image.toggle) {
        case (true): {
          parent.style.overflow = 'hidden';
          parent.style.borderRadius = '10px';
          image.style.transform = 'scale(1, 1)';
          image.style.transform = 'scale(1, 1)';
          image.style.filter = 'contrast(1)';
          image.style.transition = 'ease-in-out 0.25s';
          image.toggle = false;
          break;
        }
        case (false): {
          parent.style.overflow = 'hidden';
          parent.style.borderRadius = '10px';
          image.style.transform = 'scale(1.25, 1.25)';
          image.style.filter = 'contrast(1.25)';
          image.style.transition = 'ease-in-out 0.25s';
          image.toggle = true;
          break;
        }
      }

      event.preventDefault();

    });

  }

});

body.addEventListener('keydown', (event) => {

  if (event.key.match(/^(G)$/i)) {

    img.forEach((image) => {
      image.style.filter = 'grayscale(100%)';
    });
    btn.forEach((button) => {
      button.style.filter = 'grayscale(100%)';
    });
    footer.style.filter = 'grayscale(100%)';

    body.addEventListener('keypress', (event) => {
      if (event.key.match(/^(X)$/i)) {
        img.forEach((image) => {
          image.style.filter = 'drop-shadow(0px 0px 20px red) invert(75%)';
        });
      }
    });

  }

  event.stopPropagation();

});

body.addEventListener('keyup', (event) => {

  if (event.key.match(/^(G)$/i)) {

    img.forEach((image) => {
      image.style.filter = 'grayscale(0%)';
    });

    btn.forEach((button) => {
      button.style.filter = 'grayscale(0%)';
    });

    footer.style.filter = 'grayscale(0%)';

  }

  event.stopPropagation();

});

const child = footer.children[0];

document.toggle = false;

document.position = 0;

function Change(scroll) {
  if (scroll > 600) {
    child.style.color = 'white';
    footer.style.backgroundColor = 'black';
    footer.style.transition = 'ease-in-out 0.25s';
  }
  else {
    child.style.color = '#212529';
    footer.style.backgroundColor = '#FFEBCD';
  }
}

document.addEventListener('scroll', (event) => {

  document.position = window.scrollY;

  if (!document.toggle) {
    window.requestAnimationFrame(() => {
      Change(window.scrollY);
      toggle = false;
    });
    toggle = true;
  }

});