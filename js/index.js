// mouse over

const catchMe = document.querySelector('.logo-heading');
catchMe.addEventListener('mouseover', () => {
  console.log(catchMe);
  catchMe.style.opacity = '0';
  catchMe.style.cursor = 'pointer';
});

//mouse out

const found = document.querySelector('.logo-heading');
found.addEventListener('mouseout', () => {
  found.style.opacity = '1';
  catchMe.style.cursor = 'pointer';
});

//scroll

const [red, green, blue] = [98, 87, 81];
const page = document.querySelector('body');

window.addEventListener('scroll', () => {
  const y = 0.1 + (window.scrollY || window.pageYOffset) / 908;
  const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);
  page.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

//click

const signUp = document.querySelectorAll('.btn');
signUp.forEach(button => {
  button.addEventListener('click', e => {
    alert('Signed Up!');
  });
});

// const scaleUp = document.querySelectorAll('.card-img-top').forEach(item => {
//   item.addEventListener('mouseenter', event => {
//    item.style.transform = "scale(1.2)";
//   item.style.transition = 'all 0.5s';
//   })
// })
