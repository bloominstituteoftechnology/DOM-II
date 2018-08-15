const images = document.querySelectorAll('img');
// images fade in on load
images.forEach((item) => {
  item.addEventListener('load', () => {
    TweenMax.to('img', 3, { opacity: 1 });
  });
});

// resize images on mouse scroll
images.forEach((item) => {
  item.addEventListener('wheel', (event) => {
    let newWidth = event.target.width;
    newWidth += 10 * event.deltaY;
    item.width = newWidth;
    event.preventDefault();
  });
});

// Bring back images
const body = document.querySelector('body');
body.addEventListener('dblclick', () => {
  images.forEach((item) => {
    item.width = '800';
  });
});

// Reset nav bar on doubleclick
body.addEventListener('dblclick', () => {
  mainNav.style.marginTop = '0';
});

// resize a tags on mouseover
const allATags = document.querySelectorAll('a');
allATags.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.style.fontWeight = 900;
    TweenMax.to(item, 0.2, { fontSize: 20 });
  });
  item.addEventListener('mouseleave', () => {
    item.style.fontWeight = 100;
    TweenMax.to(item, 0.2, { fontSize: 16 });
  });
});

// toggle button backgrounds on click
const buttons = document.querySelectorAll('.btn');
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('toggle-btn');
  });
});

const mainNav = document.querySelector('.main-navigation');
mainNav.addEventListener(
  'drag',
  (event) => {
    // console.log('test');
    event.preventDefault();
  },
  false
);
mainNav.addEventListener(
  'dragend',
  (event) => {
    event.target.style.marginTop = event.y + 'px';
    console.log(event);
    event.preventDefault();
  },
  false
);
