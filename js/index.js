// Your code goes here


let navA = document.querySelectorAll('.nav a');
let allImg = document.querySelectorAll(" img");
const h1Tag = document.querySelector('h1');

h1Tag.addEventListener('mouseover', event =>
{
    h1Tag.textContent = "Fun Bus Here For you!";
    h1Tag.style.fontSize = "6em";
});
h1Tag.addEventListener('mouseout', event =>
{
    h1Tag.textContent = "Fun Bus";
    h1Tag.style.fontSize = "2em";
});

navA[0].addEventListener('click', event => 
{
    event.target.style.backgroundColor = "yellow";
    if (navA[0].backgroundColor === "yellow" || navA[0].backgroundColor === "red")
    {
        navA[0].backgroundColor === "green";
    } else if (navA[0].backgroundColor === green)
    {
        navA[0].backgroundColor === "red";
    }
});

navA[1].addEventListener('mouseover', event =>
{
    navA[1].style.backgroundColor = "purple";
    navA[1].style.color = "white";
});

navA[1].addEventListener('mouseout', event =>
{
    navA[1].style.backgroundColor = "white";
    navA[1].style.color = 'rgb(51, 0, 102)';
});
