// Your code goes here
// ================================= Variavle Definitions

const logo = document.querySelector('.logo-heading');
const navigation = document.querySelectorAll('nav .nav-link');
const mainImage = document.querySelector('.intro img');
const container = document.querySelector('.container');
const introH2 = document.querySelector('.intro h2');
const buttons = document.querySelectorAll('.btn');
const images = document.querySelectorAll('.img-content img')
const destinationImage = document.querySelector('.content-destination img')
const text = document.querySelectorAll('p');

// [x] mouseenter
// [x] mouseleave
// [x] keydown
// [x] wheel
// [x] drag / drop
// [x] resize
// [x] dblclick
// [x] click
// [] propogation
// [x] preventDefault




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


// link animations
for (let i = 0; i < navigation.length; i++) {
  navigation[i].addEventListener('mouseenter', (e) => {
    navigation[i].style.borderBottom = '1px solid black';
  });
  navigation[i].addEventListener('mouseleave', (e) => {
    navigation[i].style.border = 'none';
  });
};

// blocks default link behavior
for (let i = 0; i < navigation.length; i++) {
  navigation[i].addEventListener('click', (e) => {
    e.preventDefault();
  });
};




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


// content section images, drag them to remove from page
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('drag', (e) => {
    images[i].style.display = "none"
  });
};

destinationImage.addEventListener('click', (e) => {
  destinationImage.style.border = '1px solid red';
});



// buttons
buttons[0].textContent = "double click";
buttons[1].textContent = "the buttons";
buttons[2].textContent = "for animation";

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('dblclick', (e) => {
    TweenLite.to(buttons[i], 1, {
      rotation: 360
    });
  });
};


// keydown event listener
// document.addEventListener('keydown', (e) => {
//   const keyName = e.key;
//   alert('keydown event\n\n' + 'key: ' + keyName);
// });


// container resize
window.addEventListener("resize", (e) => {
  alert("Don't resize this window!");
});