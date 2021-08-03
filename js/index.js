// Your code goes here

// Fun Bus - Click
const funBusTitle = document.querySelector(".logo-heading");

function turnBlue() {
    
    if(funBusTitle.style.color !== "blue"){
        funBusTitle.style.color = "blue";
    } else if (funBusTitle.style.color === "blue"){
        funBusTitle.style.color = "#000000";
    } 
}

funBusTitle.addEventListener("click", turnBlue);


// Welcome To Fun Bus! - Mouseover 
const introTitle = document.querySelector(".intro h2")

function randomRGB() {
    const randomR = Math.floor(Math.random()*255);
    const randomG = Math.floor(Math.random()*255);
    const randomB = Math.floor(Math.random()*255);
    introTitle.style.color = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

introTitle.addEventListener("mouseover", randomRGB);

console.log(randomRGB());