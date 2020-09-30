// Your code goes here
const nav = document.querySelector('.nav');

nav.addEventListener('mouseover', (event) =>
{
    nav.style.backgroundcolor = 'green'
});

const logoHeading = document.querySelector('.logo-heading');


const navLinks = document.querySelectorAll(['.nav a']);

navLinks.forEach((element) =>
{
    element.addEventListener('mouseover', event =>
    {

        element.style.color = 'green';


    })
})

const image = document.querySelectorAll('img');



const footer = document.querySelectorAll('.footer');




const signUpButton = document.querySelectorAll('.btn')



signUpButton.forEach((element) =>
{
    element.addEventListener('click', event =>
    {
        alert('you need the super secret password to sign up for Fun Bus');
    })
})













