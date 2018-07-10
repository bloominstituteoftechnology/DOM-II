
const ctaButton = document.querySelector('.cta button');
const logoImg = document.getElementById('logo-img');
const ctaImg = document.getElementById('cta-img');
const middleImg = document.getElementById('middle-img');
const headers = document.querySelectorAll('h4');
const bodyText = document.querySelectorAll('p');
const formInputs = document.querySelectorAll('.form input');
const form = document.querySelector('.form');
const boxes = document.querySelectorAll('.blocks');




// listeners
ctaButton.addEventListener('click', changeColor);
logoImg.addEventListener('mouseenter', fadeOut);
ctaImg.addEventListener('dblclick', spinMe);
middleImg.addEventListener('mousedown', giant);
headers.forEach((item) => item.addEventListener('click', randomColor));
bodyText.forEach((item) => item.addEventListener('mouseover', rotateText));
formInputs[0].addEventListener('focus', focusContainer);
formInputs[1].addEventListener('focus', focusContainer);
formInputs[0].addEventListener('blur', unfocusContainer);
formInputs[1].addEventListener('blur', unfocusContainer);
formInputs[0].addEventListener('cut', cutWords);
formInputs[1].addEventListener('cut', cutWords);
formInputs[0].addEventListener('paste', pasteWords);
formInputs[1].addEventListener('paste', pasteWords);
form.addEventListener('submit', submitThankYou);
form.addEventListener('reset', resetComplete);



// Handlers

function changeColor (e) {
  let posX = e.offsetX;
  let posY = e.offsetY;
  let ranDom = Math.floor(Math.random() * (250 - 50)) + 50;

  document.querySelector('.cta h1').style.color = `rgb(${posX}, ${ranDom}, ${posY})`;
}

function fadeOut (e) {
  TweenMax.to(logoImg, 2, {opacity: 0});
}

function spinMe (e) {
  TweenMax.to(ctaImg, .5, {rotation:360});
}

function giant (e) {
  TweenMax.to(middleImg, 2, {scale:20});
}

function randomColor (e) {
  let posX = e.offsetX;
  let posY = e.offsetY;
  let ranDom = Math.floor(Math.random() * (250 - 50)) + 50;

  e.target.style.color = `rgb(${posX}, ${ranDom}, ${posY})`;
}

function rotateText (e) {
  TweenMax.to(bodyText, 1, {rotation:360});
}

function focusContainer (e) {
  e.target.parentElement.parentElement.style.border = 'solid 2px green';
}

function unfocusContainer (e) {
  e.target.parentElement.parentElement.style.border = 'none';
}

function cutWords (e) {
  e.target.style.backgroundColor = 'silver';
}

function pasteWords (e) {
  e.target.style.backgroundColor = 'white';
}

function submitThankYou (e) {
  TweenMax.to(form, 1, {opacity: 0});
  headers[headers.length - 1].textContent = 'Thank You!';
  e.preventDefault();
}

function resetComplete (e) {
  formInputs[0].value = '';
  formInputs[1].value = '';
  headers[headers.length - 1].textContent = 'Reset!';
  e.preventDefault();
}







