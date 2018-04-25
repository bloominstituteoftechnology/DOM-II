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


//Appending Children
let nav7 = document.createElement('a');
let nav8 = document.createElement('a');

let parent = document.querySelector('nav')
parent.appendChild(nav7);
parent.appendChild(nav8);


//navBar
let navBar = document.querySelectorAll('a');
var navLinks = Object.values(siteContent.nav);

for (let i = 0; i < navBar.length; i++) {
  navBar[i].innerHTML = navLinks[i]
  navBar[i].style.color = 'green'}  

nav7.innerHTML = 'Prices';
nav8.innerHTML = 'Login';

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


//CTA
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

let ctaText = document.querySelector("h1");
ctaText.innerHTML = siteContent.cta.h1;

let button = document.querySelector("button")
button.innerHTML = siteContent.cta.button;


//Main Content
let contentTitles = document.querySelectorAll('h4');
contentTitles[0].innerHTML = siteContent["main-content"]["features-h4"];
contentTitles[1].innerHTML = siteContent["main-content"]["about-h4"];
contentTitles[2].innerHTML = siteContent["main-content"]["services-h4"];
contentTitles[3].innerHTML = siteContent["main-content"]["product-h4"];
contentTitles[4].innerHTML = siteContent["main-content"]["vision-h4"];

let contentText = document.querySelectorAll("p");
contentText[0].innerHTML = siteContent["main-content"]["features-content"];
contentText[1].innerHTML = siteContent["main-content"]["about-content"];
contentText[2].innerHTML = siteContent["main-content"]["services-content"];
contentText[3].innerHTML = siteContent["main-content"]["product-content"];
contentText[4].innerHTML = siteContent["main-content"]["vision-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);


//Contact
// contentTitles[5].innerHTML = siteContent["contact"]["contact-h4"];

contentText[5].innerHTML = siteContent["contact"]["address"];
contentText[6].innerHTML = siteContent["contact"]["phone"];
contentText[7].innerHTML = siteContent["contact"]["email"];


//Footer
contentText[8].innerHTML = siteContent["footer"]["copyright"];


// CTA Event Listeners

//1 Change ctaText red on mouseover ctaImg
ctaImg.addEventListener('mouseover', () => {
  ctaText.style.color = 'red';
});

//2 Change ctaImg purple on mouseover middleImg
middleImg.addEventListener('mouseover', () => {
  ctaText.style.color = 'purple';
});

//3 Window alert on CTA button
button.addEventListener('click', ()=> {
  window.alert('Greensock is also Amazeballs!')
});

//4 Change Contact into Button dropdown toggle
document.getElementById("myBtn").onclick = function() {myFunction()};
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

//5 Keydown to make Body Red
let body = document.querySelector("body");
body.addEventListener("keydown", () => {
  body.style.backgroundColor = "red";
  });

//6 Keyup to make body white again because red is hard on the eyes lol
body.addEventListener("keyup", () => {
  body.style.backgroundColor = "white";
  });

//7 and 8 Added two event listeners to make CTA image appear and dissapear
ctaImg.addEventListener("mouseenter", ()=> {
  ctaImg.style.visibility = "hidden";
});

ctaImg.addEventListener("mouseleave", ()=>{
  ctaImg.style.visibility = "visible";
});

//9 Wheel Event on Body to make Middle Image disappear
body.addEventListener("wheel", ()=>{
  middleImg.style.display = "none"
})

//10 click even to change feature text innerhtml and background
let featureText = contentText[0];
featureText.addEventListener("click", ()=> {
  contentText[0].innerHTML = 'No copying!!!'
  contentText[0].style.background = 'grey'
})