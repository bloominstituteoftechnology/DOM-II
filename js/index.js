// Your code goes here
// `mouseover`
// this will be used to change the color of text in the h2s if the mouse passes over the first h2 "Welcome To Fun Bus!".
const h2Mouse = document.querySelector('.intro h2');
const h2Target = document.querySelectorAll('h2');
h2Mouse.addEventListener('mouseover', event => {
  h2Target[0].style.color='red'
  h2Target[1].style.color='green'
  h2Target[2].style.color = 'blue'
  h2Target[3].style.color = 'orange'}
  );
//`keydown`


// `wheel`
// when the first paragragh is wheeled over it changes the color of all text in the paragraphs
const pWheel = document.querySelector('.intro p');
const pTarget = document.querySelectorAll('p');
pWheel.addEventListener('wheel', event => {
  pTarget[0].style.color='green'
  pTarget[1].style.color='orange'
  pTarget[2].style.color = 'red'
  pTarget[3].style.color = 'blue'
  pTarget[4].style.color='green'
  pTarget[5].style.color='orange'
  pTarget[6].style.color = 'red'
  pTarget[7].style.color = 'blue'
  pTarget[8].style.color='green'
  pTarget[9].style.color='orange'
}
  );
//`drag / drop`

//`load`

//`focus`

//`resize`

// `scroll`

//`select`

//`dblclick`