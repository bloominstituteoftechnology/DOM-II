// Your code goes here
//Reference
const buttons = document.querySelectorAll('.btn');
const logo = document.querySelector('.logo-heading');
const headerImg = document.querySelector('.intro img');
const cover = document.querySelector('.cover');
const container = document.querySelector('.container');
const mainNav = document.querySelector('.main-navigation');
const navTags = document.querySelectorAll('.main-navigation a');
const footer = document.querySelector('footer');
const destinationImg = document.querySelector('.destination-img');
const context = document.querySelector('.context');
const intro = document.querySelector('.intro');
const home = document.querySelector('.home');



//Listeners
for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('mouseover', (event) => {
    buttons[i].classList.add("animation");
  });

  buttons[i].addEventListener('mouseout',(event) => {
    buttons[i].classList.remove("animation");
  })
}

logo.addEventListener('click', () => {
  logo.style.fontSize = "5rem";
});


document.addEventListener('keyup', (event) => {
  cover.style.display = "none";
  intro.parentNode.classList.remove("hide-this");
});

headerImg.addEventListener('dblclick', () => {
  headerImg.src = "img/tiger.jpg";
  headerImg.style.width = "90%";
  headerImg.style.margin = "0 5%";
});

document.addEventListener('scroll', (event) => {
  mainNav.style.backgroundColor = "#17A2B8";
});

window.addEventListener('resize', () => {
  footer.style.backgroundColor = "red";
});

destinationImg.addEventListener('auxclick', () => {
  destinationImg.style.opacity = "0.5";
})


logo.addEventListener('mouseleave', () => {
  logo.style.color = "white";
})

document.addEventListener('contextmenu', () => {
  context.classList.toggle("flex-context");
});

for(let i = 0; i < navTags.length; i++) {
  navTags[i].addEventListener('click',(event) => {
    navTags[i].style.color = "red";
    event.stopPropagation();
    event.preventDefault();
  });
}

headerImg.addEventListener('click', (event) => {
  headerImg.style.opacity = "0.5";
  event.stopPropagation();
});

intro.addEventListener('click', (event) => {
  intro.style.color = "red";
});