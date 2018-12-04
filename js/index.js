// Your code goes here
// ================================= Variavle Definitions

const logo = document.querySelector('.logo-heading');
const navigation = document.querySelectorAll('nav .nav-link');
const mainImage = document.querySelector('.intro img');
const container = document.querySelector('.container');
const buttons = document.querySelectorAll('.btn');
const images = document.querySelectorAll('.img-content img')



// [x] mouseover
// [ ] keydown
// [x] wheel
// [x] drag / drop
// [ ] load
// [ ] focus
// [ ] resize
// [ ] scroll
// [ ] select
// [ ] dblclick


// ================================= Event Listeners
// logo
logo.textContent = "wheel over me";
logo.style.fontSize = "20px";

logo.addEventListener('wheel', (e) => {
  logo.style.fontFamily = 'sans-serif';
  logo.style.textTransform = 'uppercase';
  logo.style.fontSize = '30px';
  logo.textContent = 'Fun Bus';
});

// main image
mainImage.addEventListener('mouseenter', (e) => {
  TweenMax.to(mainImage, 1, {
    opacity: 0
  });
});

mainImage.addEventListener('mouseleave', (e) => {
  TweenMax.to(mainImage, 1, {
    opacity: 1
  });
});

// container resize 
container.addEventListener('resize', (e) => {
  container.style.backgroundColor = "red";
});
console.log(container);

window.addEventListener("resize", () => {
  container.style.display = "none";
});

// content section images, drag them to remove from page
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('drag', (e) => {
    images[i].style.display = "none"
  });
};



// ctaButton.addEventListener('click', () => {
//   cta.classList.toggle('toggleMeRed');
// });



// buttons
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (e) => {
    TweenLite.to(buttons[i], 1, {
      rotation: 360
    });
  });
};