

const mainHeader = document.querySelector(".main-navigation h1");
const navBar = document.querySelectorAll("a");
const body = document.querySelector("body");
const destinations = document.querySelectorAll(".destination");
const img = document.querySelectorAll("img");
const secondHeading = document.querySelectorAll("h2");
const aAwaits = document.querySelectorAll(".text-content");
const panA = document.querySelector(".intro");
const mFat = document.querySelector(".content-destination");
const foot = document.querySelector(".footer");
const moot = document.querySelector("section > img");

// Change site font color
const onload = function(event){
    document.body.style.color = "green";
}
window.addEventListener('load',onload);

const onset = function(event){
    document.body.style.color = "white";
}
window.addEventListener('dblclick', onset);

// Changing Title h1
const first = function(event){
    mainHeader.textContent = 'Hello World'
}

mainHeader.addEventListener('mouseover', first)

const second = function(event){
    mainHeader.textContent = 'Fun Bus'
}

mainHeader.addEventListener('click', second)