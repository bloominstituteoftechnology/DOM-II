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

window.addEventListener("load", function(event) {
  alert("All resources finished loading. Welcome to a Great Idea!");
});

//Header Section
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
logo.addEventListener("dragstart", function() {
  alert("This item cannot be moved.")
}, false);

const a = document.createElement('a')
const p = document.querySelector('nav').appendChild(a);
const b = document.createElement('a')
const q = document.querySelector('nav').prepend(b)
// nav.length.innerHTML = "Taco"

let nav = document.querySelectorAll("nav a");
nav[0].innerHTML = "Whats up";
nav[1].innerHTML = siteContent["nav"]["nav-item-1"];
nav[2].innerHTML = siteContent["nav"]["nav-item-2"];
nav[3].innerHTML = siteContent["nav"]["nav-item-3"];
nav[4].innerHTML = siteContent["nav"]["nav-item-4"];
nav[5].innerHTML = siteContent["nav"]["nav-item-5"];
nav[6].innerHTML = siteContent["nav"]["nav-item-6"];
nav[7].innerHTML = "Hi There"
nav.forEach (i => {
  i.style.color = "green"; i.setAttribute('href', '#')
});

//CTA Section
let ctaH1 = document.querySelector(".cta-text h1");
ctaH1.innerHTML = siteContent["cta"]["h1"];
ctaH1.addEventListener("mouseover", () => {
  ctaH1.style.color = "blue";
});
ctaH1.addEventListener("mouseout", () => {
  ctaH1.style.color = "black";
});

let ctaButton = document.querySelector(".cta-text button");
ctaButton.innerHTML = siteContent["cta"]["button"];
ctaButton.addEventListener("click", () => {
  ctaButton.style.background = "gray";
});
ctaButton.addEventListener("auxclick", () => {
  alert("Please click with primary(left) button.")
});

let ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
ctaImg.addEventListener("mouseenter", () => {
  ctaImg.style.border = "1px solid red"
})
ctaImg.addEventListener("mouseleave", () => {
  ctaImg.style.border = ""
})
ctaImg.addEventListener("click", function() {
  midImg.style.visibility = "visible";
});
ctaImg.addEventListener("dragend", function() {
  alert("This item cannot be moved.")
}, false);

//Main Content Section
let topH4 = document.querySelectorAll(".top-content .text-content h4");
topH4[0].innerHTML = siteContent["main-content"]["features-h4"];
topH4[1].innerHTML = siteContent["main-content"]["about-h4"];

let topP = document.querySelectorAll(".top-content .text-content p");
topP[0].innerHTML = siteContent["main-content"]["features-content"];
topP[1].innerHTML = siteContent["main-content"]["about-content"];
// topP.addEventListener("select", function() {
//   alert('You have selected some text.');
// });

let midImg = document.querySelector(".middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
midImg.addEventListener("dblclick", function() {
  this.style.visibility = "hidden";
});


let bottomH4 = document.querySelectorAll(".bottom-content .text-content h4");
bottomH4[0].innerHTML = siteContent["main-content"]["services-h4"];
bottomH4[1].innerHTML = siteContent["main-content"]["product-h4"];
bottomH4[2].innerHTML = siteContent["main-content"]["vision-h4"];

let bottomP = document.querySelectorAll(".bottom-content .text-content p");
bottomP[0].innerHTML = siteContent["main-content"]["services-content"];
bottomP[1].innerHTML = siteContent["main-content"]["product-content"];
bottomP[2].innerHTML = siteContent["main-content"]["vision-content"];

//Contact Section
let contactH4 = document.querySelector(".contact h4");
contactH4.innerHTML = siteContent["contact"]["contact-h4"];

let contactP = document.querySelectorAll(".contact p");
contactP[0].innerHTML = siteContent["contact"]["address"];
contactP[1].innerHTML = siteContent["contact"]["phone"];
contactP[2].innerHTML = siteContent["contact"]["email"];

//Footer Section
let footerP = document.querySelector("footer p");
footerP.innerHTML = siteContent["footer"]["copyright"];

//Events
document.addEventListener('keypress', (j) => {
  alert(`Thanks for pressing ${event}`)
})