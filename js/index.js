//variables
const busImg = document.querySelector('.intro img')
const welcome = document.querySelector('.intro h2')
const letsGo = document.querySelector('.content-section h2')
const letsGoParagraph = document.querySelector('.lets-go')
const adventureAwaits = document.querySelector('.adventure')
const adventureImg = document.querySelector('.img-content .one')
const destination = document.querySelector('.destination')
const formName = document.querySelector('form .name')
const form = document.querySelector('form')
const body = document.querySelector('body')
const formBtn = document.querySelector('form .btn')
const contentSection = document.querySelector('.content-section')
console.log(form)


// 1. mouseover
busImg.addEventListener('mouseover', () => {
  console.log('mouse went over')
  busImg.style.width = '95%';
});

welcome.addEventListener('mouseover', () => {
  console.log('mouse went over')
  busImg.style.width = '95%';
});


// 2. mouseout
busImg.addEventListener('mouseout', () => {
  console.log('mouse went out')
  busImg.style.width = '100%';
});

// 3. click and stopPropagation()
letsGo.addEventListener('click', (e) => {
  console.log('header clicked')
  letsGoParagraph.style.color = 'blue';
  letsGoParagraph.classList.toggle('change');
  e.stopPropagation()
});

contentSection.addEventListener('click', () => {
  console.log('section clicked')
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

//7. select plus stopPropagation()
formName.addEventListener('select', (e) => {
  console.log('name form selected')
  formName.style.fontSize = '2rem'
  e.stopPropagation()
});

form.addEventListener('select', () => {
  console.log(' whole form selected')
  form.style.fontSize = '2.5'
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