// Your code goes here
const logo = document.querySelector('.logo-heading');

logo.addEventListener('mouseenter', () => {
   logo.style.color = 'red',
      logo.textContent = 'Death Bus!!!!'
})
logo.addEventListener('mouseout', () => {
   logo.style.color = '',
      logo.textContent = 'Fun Bus';
})

const funBusImg = document.querySelector('.intro img')
const homeAnchor = document.querySelector('.nav a')
const allLinks = document.querySelectorAll('.nav a')
allLinks.forEach((item) => {
   item.setAttribute('href', 'https://learn.lambdaschool.com/')
   item.addEventListener('click', (event) => {
      event.preventDefault()
   })
})

homeAnchor.addEventListener('click', () => {
   funBusImg.setAttribute('src', 'img/busFire.jpg'),
      logo.style.color = 'red',
      logo.textContent = 'Death Bus!!!!'
})
homeAnchor.addEventListener('mouseout', () => {
   funBusImg.setAttribute('src', 'img/fun-bus.jpg'),
      logo.style.color = '',
      logo.textContent = 'Fun Bus';
})

const newP = document.createElement('p')
const nav = document.querySelector('.nav')
document.addEventListener('keydown', () => {
   nav.prepend(newP)
   newP.textContent = "You're Pushing A Key! Let Go!!!"
   newP.style.fontSize = '2rem'
})
document.addEventListener('keyup', () => {
   nav.removeChild(nav.childNodes[0])
})

const body = document.querySelector('body');
body.addEventListener('wheel', () => {
   body.style.backgroundColor = 'lightyellow',
      setTimeout(() => {
         body.style.backgroundColor = 'white'
      }, 200)
})

const bottomImg = document.querySelector('.content-destination img');
window.addEventListener('resize', () => {
   bottomImg.src = 'img/fun-bus.jpg',
      setTimeout(() => {
         bottomImg.src = 'img/destination.jpg'
      }, 2000)
})


const introH2 = document.querySelector('.intro h2')
window.addEventListener('load', (event) => {
   introH2.textContent = 'The page has finished loading! This text will disappear soon.',
      introH2.style.fontSize = '6rem',
      setTimeout(() => {
         introH2.textContent = 'Welcome to Fun Bus',
            introH2.style.fontSize = '4rem'
      }, 6000)
})



const header = document.querySelector('header')
const newDiv = document.createElement('div');
newDiv.style.height = '9rem';
newDiv.style.width = '50%';
newDiv.style.margin = '0 auto';

const newForm = document.createElement('form');
newForm.classList.add('textForm');

const newLabel = document.createElement('label');
newLabel.style.fontSize = '2rem';
newLabel.textContent = 'This is a spot to put in some text: ';

const newInput = document.createElement('input');
newInput.type = 'text';
newInput.style.border = '1px solid black';
newInput.placeholder = "Hey! Fill Me Up!!"

const newBr = document.createElement('br');

const newResetButton = document.createElement('button');
newResetButton.textContent = 'Reset';
newResetButton.style.border = '1px solid black';
newResetButton.style.fontSize = '1.5rem';
newResetButton.style.margin = '1% 10% 0 10%';
newResetButton.type = 'reset';
newResetButton.classList.add('resetBtn')

const newSubmitButton = document.createElement('button');
newSubmitButton.textContent = 'Submit: Push me!';
newSubmitButton.style.fontSize = '1.5rem';
newSubmitButton.style.border = '1px solid black';
newSubmitButton.type = 'submit';

const newFormP = document.createElement('p');
newFormP.style.fontSize = '2rem';
newFormP.textContent = 'Push a button'

body.prepend(newDiv);
newDiv.append(newForm);
newForm.append(newLabel);
newLabel.append(newInput)
newForm.append(newBr);
newForm.append(newResetButton);
newForm.append(newSubmitButton);
newForm.append(newFormP)

const getForm = document.querySelector('.textForm');
const getFormP = document.querySelector('.textForm p');
console.log(getFormP)

getForm.addEventListener('reset', (event) => {
   getFormP.textContent = 'You Pushed The Reset Button!!! Now push Me!';

   setTimeout(() => {
      getFormP.textContent = 'Push a button'
   }, 3000)
})

getForm.addEventListener('submit', (event) => {
   event.preventDefault()
   body.textContent = 'You Pushed the Submit Button!';
   body.style.fontSize = '6rem';
   let count = 3;
   setTimeout(() => {
      setInterval(() => {
         if (count > 0) {
            body.textContent = `The page will reload in ${count} seconds.`;
            count--;
         }
      }, 1000);
   }, 1000)

   setTimeout(() => {
      body.textContent = '';
      location.reload();
   }, 5000)
})

const getResetButton = document.querySelector('.resetBtn')
getFormP.addEventListener('click', () => {
   getFormP.style.backgroundColor = 'red';
   setTimeout(() => {
      getFormP.style.backgroundColor = 'white'
   }, 2000);
})

console.log(document)