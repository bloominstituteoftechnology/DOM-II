// Your code goes here

// Click eventListener
let buttons = document.querySelectorAll('.btn');
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        const getName = prompt(`Welcome, can I get your name please.`);
        alert(`${getName} your destination awaits you!`);
        button.style.backgroundColor = "#4fc4b6";
    });
});


// Scroll eventListener
let headerH1 = document.querySelector('.logo-heading');
let doc = this.document;
//console.log(document);
doc.addEventListener('scroll', function (event) {
    headerH1.innerHTML = "Fun Fun Bus!";
});
//console.log(headerH1);


// mouseover eventListener
let headerH2 = document.getElementsByTagName('h2');
headerH2[0].addEventListener('mouseover', function (event) {
    headerH2[0].style.color = "red";
    headerH2[0].innerHTML = " Welcome To Fun Fun Bus!";
});
//console.log(headerH2[0]);


let img = document.getElementsByTagName('img');
img[0].addEventListener('mouseover', function (event) {
    img[0].src = "https://images.pexels.com/photos/386010/pexels-photo-386010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
});
//console.log(img[0]);


let secoundImg = document.getElementsByTagName('img');
secoundImg[1].addEventListener('mouseleave', function (event) {
    secoundImg[1].src = "https://images.pexels.com/photos/297755/pexels-photo-297755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
});


secoundImg[2].addEventListener('mouseleave', function (event) {
    secoundImg[2].src = "https://images.pexels.com/photos/158441/venice-italy-sunset-grand-canal-158441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
});

secoundImg[3].addEventListener('mouseover', function (event) {
    secoundImg[3].src = "https://images.pexels.com/photos/929032/pexels-photo-929032.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
});
//console.log(img);


let aTag = document.getElementsByTagName('a');
aTag[2].addEventListener('mouseover', function (event) {
    aTag[2].style.color = "red";
});


aTag[2].addEventListener('mouseover', function (event) {
    aTag[2].style.color = "green";
});


let footer = document.getElementsByTagName('footer');
footer.addEventListener('mouseleave', function (event) {
    footer.style.backgroundColor = "F2C166";
});

// resize eventListener
//let page = document.getElementsByTagName('body');
//console.log(body);
//page.addEventListener('resize', function (event) {
//    page.backgroundColor = "#1c2123";
//});