// selectors
const headerH1 = document.querySelector('h1.logo-heading');
const header = document.querySelector('.main-navigation');
const funBusImg = document.querySelector('.container.home .intro img');
const creepBusBtn = document.querySelector('a.nav-link');
const body = document.querySelector('body');
const mainHeading = document.querySelector('.container.home .intro h2');
const letsGoH2 = document.querySelectorAll('.text-content h2')[0];
const yourMessage = document.querySelectorAll('p')[1];
const textContent = document.querySelectorAll('.text-content')[0];
const newP = document.createElement('p');
const input = document.createElement('input');
const destination = document.querySelector('.bottom-stuff');

let scrollYHome = 0;
//event listeners

headerH1.addEventListener('mouseenter', (e) => {
  // mouse enters header
  e.target.preventPropagation;
  e.target.style.transition = '0.3s ease-in';
  e.target.style.fontSize = '4.5rem';
  console.log('mouse is in');

  // mouse leaves header
  headerH1.addEventListener('mouseleave', (e) => {
    e.target.preventPropagation;
    e.target.style.transition = '0.3s ease-out';
    e.target.style.fontSize = '4rem';
    console.log('mouse is out');
  })
});

creepBusBtn.addEventListener('click', (e) => {
  // headerH1.preventPropagation;
  e.target.preventPropagation;
  headerH1.style.transition = '0.3s ease-in';
  headerH1.innerText = 'Not so Fun Bus!';
  funBusImg.removeAttribute('src');
  funBusImg.setAttribute('src', 'img/creepyBus.jpg');
  body.style.backgroundColor = 'black';
  body.style.color = 'white';
  mainHeading.innerText = 'Welcome to the Creepy Bus!';
  letsGoH2.innerText = 'Leave us a message';
  yourMessage.innerText = '';
  input.type = 'text';
  input.className = 'myInput';
  textContent.appendChild(input);
  newP.className = 'newP';
  textContent.appendChild(newP);
})

input.addEventListener('keyup', (e) => {
  e.target.preventPropagation;
  newP.innerText = input.value;
})

input.addEventListener('focus', (e) => {
  e.target.preventPropagation;
  e.target.style.border = "4px solid red";
})

input.addEventListener('blur', (e) => {
  e.target.preventPropagation;
  e.target.style.border = "0";
})

window.addEventListener('scroll', (e) => {
  scrollYHome = window.scrollY;

  if (scrollYHome > 350) {
    destination.classList.add('visible');
    destination.classList.remove('bottom-stuff');
  } else {
    destination.classList.add('bottom-stuff');
    destination.classList.remove('visible');
    //destination.style.transition = '0.3s ease-out';
  }
  console.log(scrollYHome);
})