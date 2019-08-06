// mouseover
const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', () => {
    logo.textContent = "Lets Go!";
})

//wheel
// const nav = document.querySelector('.nav a');
// nav.forEach((a) => {
//     a.addEventListener('wheel', () => {
//         a.style.fontSize = '2rem';
//     });
// });




//scroll
const home = document.querySelector('.home');
window.addEventListener('scroll', () => {
    home.style.background = '#E62739'
});

//keydown


window.addEventListener('keydown', (e) => {
  console.log(`This is my keypress: ${e.code}`);
});