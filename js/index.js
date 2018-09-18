let animateHeading = document.querySelector('.logo-heading');
animateHeading.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'cyan';
});
//-------------------------------------------------------------------------
let animateBTN = document.querySelectorAll('.btn');
for (let i = 0; i<animateBTN.length; i++) {
    animateBTN[i].addEventListener('click', () => {
    event.target.style.color = 'red'
 })
}
//------------------------------------------------------------------------