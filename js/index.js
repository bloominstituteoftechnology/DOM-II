// Your code goes here


let navA = document.querySelectorAll('.nav a');
let busImg = document.querySelectorAll("header .intro img");
const h1Tag = document.querySelector('h1');

h1Tag.addEventListener('mouseover', event =>
{
    h1Tag.textContent = "Fun Bus Here For you!";
    h1Tag.style.fontSize = "6em";
    h1Tag.style.fontFamily = 'cursive';
});
h1Tag.addEventListener('mouseout', event =>
{
    h1Tag.textContent = "Fun Bus";
    h1Tag.style.fontSize = "2em";
    h1Tag.style.fontFamily = 'sans-serif';
});

navA[0].addEventListener('click', event => 
{
    event.target.style.backgroundColor = "yellow";
    event.target.style.color = "purple";
    if (navA[0].backgroundColor === "yellow" || navA[0].backgroundColor === "red")
    {
        navA[0].backgroundColor === "green";
    } else if (navA[0].backgroundColor === green)
    {
        navA[0].backgroundColor === "red";
    }
});

navA[0].addEventListener('dblclick', event =>
{
    event.target.style.backgroundColor = "white";
    event.target.style.color = 'purple';
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

navA[2].addEventListener('mouseover', event =>
{
    navA[2].style.backgroundColor = "#99ff66";
    navA[2].style.color = "white";
});

navA[2].addEventListener('mouseout', event =>
{
    navA[2].style.backgroundColor = 'white';
    navA[2].style.color = 'rgb(51, 0, 102)';
});

navA[3].addEventListener('mouseover', event =>
{
    navA[3].style.backgroundColor = '#ffff66';
    navA[3].style.color = 'rbg(51, 0, 102)';
});

navA[3].addEventListener('mouseout', event =>
{
    navA[3].style.backgroundColor = 'white';
    navA[3].style.color = 'rbg(51, 0, 102)';
});

busImg[0].addEventListener('mouseover', event =>
{
    busImg[0].style.backgroundColor = "red";
    // busImg.style.width = "600px";
    // busImg.style.height = "400px";
});
// src="img/fun-bus.jpg"