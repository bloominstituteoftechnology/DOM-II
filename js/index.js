// Your code goes here
console.log("Test!");

// variables to point to parts of DOM being changed
const navigation = document.querySelector(".nav");
const logoHeading = document.querySelector(".logo-heading")
const header = document.querySelector("header");
const topImg = document.querySelector(".img-content")
const textContent = document.querySelectorAll(".text-content");
const allH4Text = document.querySelectorAll("h4");
// Event Listeners
navigation.addEventListener('mouseover', (event) => {
  console.log("We sensed a mouse dancing above a link.");
  event.stopPropagation();
});
logoHeading.addEventListener('click', (event) => {
  event.currentTarget.parentNode.style.color = "blue";
  console.log("Ouch! That hurt!");
});
