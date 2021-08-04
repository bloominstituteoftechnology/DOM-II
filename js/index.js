// Your code goes here

// First "Sign Me Up!"
let buttons = document.querySelectorAll(".btn");

buttons[0].addEventListener("mouseover", (event) =>
{
    buttons[0].style.backgroundColor = "red";

    let funBus = document.querySelector(".intro h2");
    funBus.style.backgroundColor = "green";
});

buttons[0].addEventListener("mouseout", function ()
{
    buttons[0].style.backgroundColor = "white";

    let funBus = document.querySelector(".intro h2");
    funBus.style.backgroundColor = "white";
});

// Second "Sign Me Up!"

buttons[1].addEventListener("wheel", (event) =>
{
    buttons[1].style.fontSize = "35px";
});

// Pick your destination image

let destinationImg = document.querySelector(".content-destination img");
let imgFontSize = "";

destinationImg.addEventListener("load", (event) =>
{
    let destinationTxt = document.querySelector(".content-destination p");
    imgFontSize = destinationTxt.style.fontSize;
});

destinationImg.addEventListener("click", (event) =>
{
    let destinationTxt = document.querySelector(".content-destination p");
    destinationTxt.style.fontSize = "35px";
    destinationTxt.style.backgroundColor = "purple";
});

destinationImg.addEventListener("mouseout", () =>
{
    let destinationTxt = document.querySelector(".content-destination p");
    destinationTxt.style.fontSize = imgFontSize;
    destinationTxt.style.backgroundColor = "white";
});

// let funBusImg = document.querySelector(".intro img");

// funBusImg.mouseover = function (event)
// {

// };


// window.onscroll = (event) =>
// {

// };

// function myFunction()
// {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
//     {
//         document.
//     }
//     else
//     {
//         document.
//     }
// };


// buttons[0].addEventListener.onclick = function(event)
// {
//     if (event.target === buttons[0])
//     {
//         console.log("Clicked the button!");
//     }
//     else
//     {
//         console.log("Clicked somewhere else...");
//     };
// };
