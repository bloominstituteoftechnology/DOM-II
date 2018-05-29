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

let navItems = document.querySelectorAll('nav a');
navItems[0].innerHTML = "Services";
navItems[1].innerHTML = "Product";
navItems[2].innerHTML = "Vision";
navItems[3].innerHTML = "Features";
navItems[4].innerHTML = "About";
navItems[5].innerHTML = "Contact";

document.querySelector('.cta-text h1').innerText = 'DOM\n Is\n Awesome';
document.querySelector('.cta-text button').innerText = 'Get Started';
document.getElementById("cta-img").setAttribute('src', siteContent["cta"]["img-src"]);

let title = document.querySelectorAll('.text-content h4');
title[0].innerHTML = 'Features';
title[1].innerHTML = 'About';
title[2].innerHTML = 'Services';
title[3].innerHTML = 'Product';
title[4].innerHTML = 'Vision';

let description = document.querySelectorAll('.text-content p');
description[0].innerText = siteContent["main-content"]["features-content"];
description[1].innerText = siteContent["main-content"]["about-content"];
description[2].innerText = siteContent["main-content"]["services-content"];
description[3].innerText = siteContent["main-content"]["product-content"];
description[4].innerText = siteContent["main-content"]["vision-content"];

document.getElementById("middle-img").setAttribute('src', siteContent["main-content"]["middle-img-src"]);

document.querySelector('.contact h4').innerText = 'Contact';
let contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].innerText = siteContent["contact"]["address"];
contactInfo[1].innerText = siteContent["contact"]["phone"];
contactInfo[2].innerText = siteContent["contact"]["email"];

document.querySelector('footer p').innerText = siteContent["footer"]["copyright"];

//Event Listeners
function colorChanger() {
  if (this === navItems[0]) {
  this.style.color = 'red';
} else if (this === navItems[1]) {
  this.style.color = 'orange';
} else if (this === navItems[2]) {
  this.style.color = 'gold';
} else if (this === navItems[3]) {
  this.style.color = 'green';
} else if (this === navItems[4]) {
  this.style.color = 'blue';
} else if (this === navItems[5]) {
  this.style.color = 'purple';
  }
}
navItems[0].addEventListener("mouseover", colorChanger);
navItems[1].addEventListener("mouseover", colorChanger);
navItems[2].addEventListener("mouseover", colorChanger);
navItems[3].addEventListener("mouseover", colorChanger);
navItems[4].addEventListener("mouseover", colorChanger);
navItems[5].addEventListener("mouseover", colorChanger);

function awesome() {
  this.innerText = 'Jennifer\n is\n awesome';
}
document.querySelector('.cta-text h1').addEventListener("click", awesome);

function noRightClicks() {
  alert("Why would you right click on my website?")
}
document.addEventListener("contextmenu", noRightClicks);


let n = 0;
let buttonText=[`Don't Click me`, `I said don't click me`, `Please stop`, `Why would you click me?`, `This is hurting me`, `I didn't do anything wrong`, `You are going to kill me`, `What kind of freak are you`, `Stop it before you kill me`, `Somebody he-`];

function noClicking(){
    if (n < buttonText.length) {
      this.innerText = buttonText[n];
    } else if (n === buttonText.length){
      this.innerText = ``;
    } else if (n > buttonText.length + 3){
      alert("You killed my favorite button");
        }
    n++;
  }
document.querySelector('.cta-text button').addEventListener("click", noClicking);

function disappear() {
    document.querySelector('.cta-text button').innerText = `Don't take my picture!`;
}
function reappear() {
    document.querySelector('.cta-text button').innerText ='Thanks for returning my picture'
}
document.getElementById("cta-img").addEventListener("dragstart", disappear)
document.getElementById("cta-img").addEventListener("dragend", reappear)

function beep() {
  this.innerText = 'Beep';
}
function boop() {
  this.innerText = 'Boop';
}
title[0].addEventListener("mouseleave", beep);
title[1].addEventListener("mouseleave", boop);
title[2].addEventListener("mouseleave", beep);
title[3].addEventListener("mouseleave", boop);
title[4].addEventListener("mouseleave", beep);



function invert() {
  this.style.filter = "invert(100%)";
}
document.getElementById("middle-img").addEventListener("dblclick", invert);


function copied() {
  this.innerText = 'You stole my copyright!';
}
document.querySelector('footer p').addEventListener("copy", copied);

function print() {
  alert("No need to do that");
}
document.addEventListener("keydown", print);
