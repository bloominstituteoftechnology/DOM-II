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

// const mainNav = document.querySelector('.main-navigation');
// mainNav.addEventListener(
//   'drag',
//   (event) => {
//     // console.log(event);
//   },
//   false
// );
// mainNav.addEventListener(
//   'drop',
//   (event) => {
//     event.preventDefault();
//     // x = event.offsetX;
//     console.log(test);
//   },
//   false
// );
