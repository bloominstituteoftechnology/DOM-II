// Your code goes here

let navLink = document.querySelectorAll(".nav-link");

navLink[0].addEventListener("mouseover", (event) =>
{
    navLink[0].style.backgroundColor = "orange";
});

navLink[0].addEventListener("mouseout", function ()
{
    navLink[0].style.backgroundColor = "white";
});

