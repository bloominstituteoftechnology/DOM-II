// Your code goes here

//Mouseover
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', (event) => {
    console.log('change color')
    logoHeading.classList.toggle('change-color')
});

//Keydown
document.querySelector('body').addEventListener('keydown', myFunction)

function myFunction() {
    alert('UH-OH, you pressed a button!')
}