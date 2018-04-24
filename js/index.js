const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street <br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


let aElement = document.querySelectorAll("a");
for(let i =0 ;i < aElement.length - 1; i++ ){
  aElement[i].innerHTML = `${siteContent["nav"][`nav-item-${i+1}`]}`;
  aElement[i].style.color = "green";
  aElement[i].style.fontFamily = "Impact,Charcoal,sans-serif";
}

let navElement = document.querySelector("nav");

var newAEnd = document.createElement("a");
navElement.appendChild(newAEnd);
newAEnd.innerHTML = "Anything";

var newABegin = document.createElement("a");
navElement.prepend(newABegin);
newABegin.innerHTML = "Beginning";

let h1Element = document.querySelector("h1");
h1Element.innerHTML = siteContent["cta"]["h1"];


let buttonElement = document.querySelector("button");
buttonElement.innerHTML = siteContent["cta"]["button"];
buttonElement.style.backgroundColor = "black";

let h4Element = document.querySelectorAll("h4");
h4Element[0].innerHTML = siteContent["main-content"]["features-h4"];
h4Element[0].style.color = "blue";

h4Element[1].innerHTML = siteContent["main-content"]["about-h4"];
h4Element[1].style.color = "blue";

let pElement = document.querySelectorAll("p");
pElement[0].innerHTML = siteContent["main-content"]["features-content"];

pElement[1].innerHTML = siteContent["main-content"]["about-content"];

h4Element[2].innerHTML = siteContent["main-content"]["services-h4"];

h4Element[3].innerHTML = siteContent["main-content"]["product-h4"];

h4Element[4].innerHTML = siteContent["main-content"]["vision-h4"];

pElement[2].innerHTML = siteContent["main-content"]["services-content"];

pElement[3].innerHTML = siteContent["main-content"]["product-content"];

pElement[4].innerHTML = siteContent["main-content"]["vision-content"];

h4Element[5].innerHTML = siteContent["contact"]["contact-h4"];

pElement[5].innerHTML = siteContent["contact"]["address"];

pElement[6].innerHTML = siteContent["contact"]["phone"];

pElement[7].innerHTML = siteContent["contact"]["email"];

pElement[8].innerHTML = siteContent["footer"]["copyright"];



let container = document.querySelector('.container');
let myVideo = document.querySelector('.queenPuppet');
let myMiddleImg = document.querySelector('.middle-img');
let body = document.querySelector('body');

buttonElement.addEventListener('mouseover', () => {
  container.style.transform = 'rotate(180deg)';
});

buttonElement.addEventListener('mouseout', () => {
  container.style.transform = 'rotate(0deg)';
});

document.addEventListener("scroll", function (event) {
  body.style.backgroundColor = "#F5F5F5";
});

document.addEventListener('keydown', () => {
  alert('You are moving down!!');
});

aElement[0].addEventListener('dblclick', () => {
  container.style.display = "none";
});


window.addEventListener("resize", function() {
  setTimeout(function(){ alert("i am irritating "); }, 3000);
});


window.addEventListener("mousemove", function() {
  body.style.backgroundColor = "gray";
});


myMiddleImg.addEventListener("contextmenu", function(e) {
  e.preventDefault();
  myMiddleImg.innerHTML = `<iframe id = 'ik_player_iframe' width="100%" height="315" class="queenPuppet"
                          src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1">
                          </iframe>`
});

myMiddleImg.addEventListener("dragstart", function() {
  body.style.backgroundColor = "black";
});




myMiddleImg.addEventListener("dragend", function() {
  body.style.backgroundColor = "blue";
});


