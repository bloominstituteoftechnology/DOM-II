//variables
const busImg = document.querySelector('.intro img')
const welcome = document.querySelector('.intro h2')
const letsGo = document.querySelector('.content-section h2')
const letsGoParagraph = document.querySelector('.lets-go')
const adventureAwaits = document.querySelector('.adventure')
const adventureImg = document.querySelector('.img-content .one')
const destination = document.querySelector('.destination')
const formName = document.querySelector('form .name')
const body = document.querySelector('body')
const formBtn = document.querySelector('form .btn')
// console.log(formBtn)


// 1. mouseover
busImg.addEventListener('mouseover', () => {
  console.log('mouse went over')
  busImg.style.width = '95%';
});


// 2. mouseout
busImg.addEventListener('mouseout', () => {
  console.log('mouse went out')
  busImg.style.width = '100%';
});

// 3. click
letsGo.addEventListener('click', () => {
  console.log('clicked')
  letsGoParagraph.style.color = 'blue';
  letsGoParagraph.classList.toggle('change');
});

// 4. select
adventureAwaits.addEventListener('click', () => {
  console.log('selected')
});

//5. wheel
adventureImg.addEventListener('wheel', () => {
  console.log('wheel')
});

//6. scroll
destination.addEventListener('scroll', () => {
  console.log('scrolled')
});

//7. select
formName.addEventListener('select', () => {
  console.log('selected')

  formName.style.fontSize = '2rem'
});

// 8. resize
window.addEventListener('resize', () => {
  console.log('resized')
  body.style.color = 'gray'
});

// 9.load 
window.addEventListener("load", () => {
  console.log("All resources finished loading!")
});

// 10. dblclick
formBtn.addEventListener("dblclick", () => {
  console.log("Form button double clicked!")
  formBtn.style.backgroundColor = 'blue'
});