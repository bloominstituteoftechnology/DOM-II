// Your code goes here
console.log("Test!");

// variables to point to parts of DOM being changed
const mainPage = document.querySelector(".home");
const navigation = document.querySelector(".nav");
const logoHeading = document.querySelector(".logo-heading")
const headerIntro = document.querySelector(".intro");
const topImg = document.querySelector(".img-content")

//Multiple items to cache
const textContent = document.querySelectorAll(".text-content");
const allH4Text = document.querySelectorAll("h4");
// Event Listeners
navigation.addEventListener('mouseover', (event) => {
  console.log("We sensed a mouse dancing above a link.");
  event.stopPropagation();
});
logoHeading.addEventListener('click', (event) => {
  event.currentTarget.parentNode.style.color = "red";
  console.log("Ouch! That hurt!");
  console.log("Wait a minute, am I bleeding??")
});
headerIntro.addEventListener('mouseover', (event) => {
  event.currentTarget.style.width = "110%";
  headerIntro.addEventListener('mouseleave', (event) => {
    event.currentTarget.style.width = "100%";
    event.stopPropagation();
  });
});
