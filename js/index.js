// Your code goes here
// Step 1: Get the reference to the element on the page
const logoHeading = document.querySelector('.logo-heading');
const mainNavigation = document.querySelector('.main-navigation');
const nav = document.querySelector('.nav');
const containerHome = document.querySelector('.container Home');
const contentSection = document.querySelector('.content-section');
const imgContent = document.querySelector('.img-content');
const destinationImg =
    document.querySelector('.destination-Img')
const footer = document.querySelector(".footer")



// Step 2: Add an Event Listener to the reference
logoHeading.addEventListener('click', (event) => {
    // Step 3: Do something with the event
    alert('logoHeading was clicked!')
});

mainNavigation.addEventListener('mouseover', (event) => {
    event.target.style.color = "purple";
})

containerHome.addEventListener('keypress', (event) => {
    alert('container was clicked!')
});

imgContent.addEventListener('dblclick', function (event) {
    event.toggle('hide');
});

destinationImg.addEventListener('mousemove', (event) => {
    event.target.style.color = "blue";
});

footer.addEventListener('keydown', (event) => {
    alert('footer was clicked!')
});