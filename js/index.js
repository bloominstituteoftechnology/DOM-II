// Your code goes here
const buttons = document.querySelectorAll('.btn');
const headerH1 = document.querySelector('.logo-heading');
const doc = this.document;
const headerH2 = document.getElementsByTagName('h2');
const img = document.getElementsByTagName('img');
const secoundImg = document.getElementsByTagName('img');
const aTag = document.getElementsByTagName('a');
const footer = document.getElementsByTagName('footer');
const page = this.document;
const load = document.querySelectorAll('.container.home');


// Click eventListener
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        const getName = prompt(`Welcome, can I get your name please.`);
        alert(`${getName} your destination awaits you!`);
        button.style.backgroundColor = "#4fc4b6";
    });
});


// Scroll eventListener
doc.addEventListener('scroll', function (event) {
    headerH1.innerHTML = "Fun Fun Bus!";
});

doc.addEventListener('mouseover', function (event) {
    headerH1.innerHTML = "Fun Bus!";
});


// Mouseover eventListener
headerH2[0].addEventListener('mouseover', function (event) {
    headerH2[0].style.color = "red";
    headerH2[0].innerHTML = "Welcome To Fun Fun Bus!";
});


// Mouseover eventListener
img[0].addEventListener('mouseover', function (event) {
    img[0].src = "https://images.pexels.com/photos/386010/pexels-photo-386010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
});


// Mouseleave eventlistener
secoundImg[1].addEventListener('mouseleave', function (event) {
    secoundImg[1].src = "https://images.pexels.com/photos/297755/pexels-photo-297755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
});



// Mouseleave eventlistener
secoundImg[2].addEventListener('mouseleave', function (event) {
    secoundImg[2].src = "https://images.pexels.com/photos/158441/venice-italy-sunset-grand-canal-158441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
});


// Mouseover eventListener
secoundImg[3].addEventListener('mouseover', function (event) {
    secoundImg[3].src = "https://images.pexels.com/photos/929032/pexels-photo-929032.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
});



// Mouseover eventListener
aTag[2].addEventListener('mouseover', function (event) {
    aTag[2].style.color = "red";
});



// Mouseover eventListener
aTag[2].addEventListener('mouseover', function (event) {
    aTag[2].style.color = "green";
});



/* Mouseleave eventlistener
footer.addEventListener('mouseleave', function (event) {
    footer.style.backgroundColor = "F2C166";
});
*/
// Resize eventListener
page.addEventListener('resize', function (event) {
    alert(`You are re-sizing the page!`);
});

//Load eventListener
load.forEach(function (buffer) {
    buffer.addEventListener('load', function (event) {
        console.log('All of the documents resources have finished loading');
    })
});