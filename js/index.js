const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
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
    "address" : "123 Way 456 Street Somewhere, USA",
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
ctaImg.src = 'img/header-img.png'

let middleImg = document.getElementById("middle-img");
middleImg.src = 'img/mid-page-accent.jpg';

let ctaH1 = document.querySelector('.cta-text h1');
ctaH1.innerHTML = siteContent.cta.h1;

let ctaButton = document.querySelector('.cta-text button');
ctaButton.innerHTML = siteContent.cta.button;

let h4 = document.getElementsByTagName('h4');
//contains "h4??" possible method?
//titles
h4[0].innerHTML = "Features";
h4[1].innerHTML =  siteContent["main-content"]["about-h4"];
h4[2].innerHTML = "Services";
h4[3].innerHTML = siteContent["main-content"]["vision-h4"];
h4[4].innerHTML =  siteContent["main-content"]["product-h4"];
h4[5].innerHTML =  siteContent["contact"]["contact-h4"];


let nav = document.querySelector(".container header nav");
let newArr = Object.values(siteContent.nav)
newArr.pop();

let endItem = document.createElement("a");
endItem.innerHTML = "End Item";

let startItem = document.createElement("a");
startItem.innerHTML = 'Start Item';

nav.append(endItem);
nav.prepend(startItem);

newArr.push("Location");
newArr.unshift("Home")

console.log(newArr)
console.log(nav)
console.log( Object.values(siteContent.nav).length)

let aTags = document.querySelectorAll("a");

const navFunction = function(){
  for(let i=0; i < newArr.length; i++) {
      aTags[i].innerHTML = newArr[i];
      aTags[i].style.color = "green";
  }
}
navFunction();

let content = document.querySelectorAll("p");
//main content
content[0].innerHTML = siteContent["main-content"]["features-content"];
content[1].innerHTML = siteContent["main-content"]["about-content"];
content[2].innerHTML = siteContent["main-content"]["services-content"];
content[3].innerHTML = siteContent["main-content"]["product-content"];
content[4].innerHTML = siteContent["main-content"]["vision-content"];
//Contact
content[5].innerHTML = siteContent["contact"]["address"];
content[6].innerHTML = siteContent["contact"]["phone"];
content[7].innerHTML = siteContent["contact"]["email"];
//Copyright
content[8].innerHTML = siteContent["footer"]["copyright"];


//Day 2
const button = document.querySelector('.cta-text button');
const theH1 = document.querySelector('.cta-text h1');
const navService = document.querySelector('#service');
const line = document.querySelector('.line');
const containerBG = document.querySelector('.container');
const bigLogo = document.querySelector('#cta-img')

theH1.addEventListener("mouseenter", (event) => {
  TweenMax.to("#cta-img", 5, { scale: 0.005})
})

theH1.addEventListener("mouseleave", (event) => {
  TweenMax.to("#cta-img", .3, { scale: 1})
})

bigLogo.addEventListener("mouseenter", (event) => {
  TweenMax.to("#cta-img", 5, { scale: 0.005})
})

bigLogo.addEventListener("mouseleave", (event) => {
  TweenMax.to("#cta-img", .3, { scale: 1})
})

containerBG.addEventListener("auxclick", (event) =>{
  event.target.style.background = "black";
  event.stopPropagation();
})
containerBG.addEventListener("dblclick", (event) =>{
  event.target.style.background = "none";
  event.stopPropagation();
})

line.addEventListener('wheel', (event) => {
  event.target.style.background = "green"
  event.target.style.height = "100px";
  event.target.innerHTML = "Congrats, you scrolled. ";
  console.log("line was clicked")
})

navService.addEventListener('mouseenter', (event) => {
  event.target.style.color = "red"
})

content[1].addEventListener('mouseenter', (event) => {
  event.target.style.color = "red"
})

h4[3].addEventListener('mouseenter', (event) => {
  event.target.style.color = "red"
})

theH1.addEventListener('click', (event) => {
  event.target.style.color = "blue";
})

button.addEventListener('click', (event) => {
  event.target.style.color = "red";
  event.target.style.background = "yellow"
  event.stopPropagation();
})

button.addEventListener('doubleclick', (event) => {
  event.target.innerHTML = "oops";
})

button.addEventListener('wheel', (event) => {
  event.target.rotate  = "oops";
  // event.shiftKey.style.color = 'blue';
})
