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

let randColor = () => '#'+(Math.random()*0xFFFFFF<<0).toString(16);

// ~~~~~ Header ~~~~~
const a1 = document.createElement("a");
document.querySelector('nav').appendChild(a1);
const a2 = document.createElement("a");
document.querySelector('nav').prepend(a2);

let headerA = document.querySelectorAll('nav a');
headerA[0].innerHTML = "click";
headerA[0].addEventListener('click', () => { // 1st Event Listener
  headerA[0].style = `color: ${randColor()}`;
});
headerA[1].innerHTML = "mouseover";
headerA[1].addEventListener('mouseover', () => { // 2nd Event Listener
  headerA[1].style = `color: ${randColor()}`;
});
headerA[2].innerHTML = "mouseup";
headerA[2].addEventListener('mouseup', () => { // 3rd Event Listener
  headerA[2].style = `color: ${randColor()}`;
});
headerA[3].innerHTML = "dblclick";
headerA[3].addEventListener('dblclick', () => { // 4th Event Listener
  headerA[3].style = `color: ${randColor()}`;
});
headerA[4].innerHTML = 'mousemove';
headerA[4].addEventListener('mousemove', () => { // 5th Event Listener
  headerA[4].style = `color: ${randColor()}`;
});
headerA[5].innerHTML = 'auxclick';
headerA[5].addEventListener('auxclick', () => { // 6th Event Listener
  headerA[5].style = `color: ${randColor()}`;
});
headerA[6].innerHTML = 'wheel';
headerA[6].addEventListener('wheel', () => { // 7th Event Listener
  headerA[6].style = `color: ${randColor()}`;
});
headerA[7].innerHTML = 'keypress';
document.addEventListener('keypress', () => { // 8th Event Listener
  headerA[7].style = `color: ${randColor()}`;
});

headerA.forEach(a => a.style = 'color: green');

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// ~~~~~ CTA ~~~~~
let ctaH1 = document.querySelector('.cta-text h1');
ctaH1.innerHTML = siteContent['cta']['h1'];

let ctaButton = document.querySelector('.cta-text button');
ctaButton.innerHTML = siteContent['cta']['button'];
window.addEventListener('scroll', () => {
  ctaButton.style = `background-color: ${randColor()}`; // 9th Event Listener
});
ctaButton.addEventListener('mouseenter', () => {
  TweenMax.to(ctaImg, 1, {ease: Elastic.easeOut.config(1, 0.3), x: -475});
});

let ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);
ctaImg.addEventListener('mouseleave', () => {
  TweenMax.to(ctaImg, 1, {ease: Back.easeOut.config(1.7), x: 0});
});


// ~~~~~ Main Content ~~~~~
let mainContentAll = document.querySelector('.main-content');
window.addEventListener('resize', () => {
  mainContentAll.style.borderColor = randColor(); // 10th Event Listener
});

let mainContentTopH4 = document.querySelectorAll('.top-content .text-content h4');
mainContentTopH4[0].innerHTML = siteContent['main-content']['features-h4'];
mainContentTopH4[1].innerHTML = siteContent['main-content']['about-h4'];

let mainContentTopP = document.querySelectorAll('.top-content .text-content p');
mainContentTopP[0].innerHTML = siteContent['main-content']['features-content'];
mainContentTopP[1].innerHTML = siteContent['main-content']['about-content'];

let mainContentImg = document.querySelector('#middle-img');
mainContentImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let mainContentBottomH4 = document.querySelectorAll('.bottom-content .text-content h4');
mainContentBottomH4[0].innerHTML = siteContent['main-content']['services-h4'];
mainContentBottomH4[1].innerHTML = siteContent['main-content']['product-h4'];
mainContentBottomH4[2].innerHTML = siteContent['main-content']['vision-h4'];

let mainContentBottomP = document.querySelectorAll('.bottom-content .text-content p');
mainContentBottomP[0].innerHTML = siteContent['main-content']['services-content'];
mainContentBottomP[1].innerHTML = siteContent['main-content']['product-content'];
mainContentBottomP[2].innerHTML = siteContent['main-content']['vision-content'];

// ~~~~~ Contact ~~~~~
let contactH4 = document.querySelector('.contact h4');
contactH4.innerHTML = siteContent['contact']['contact-h4'];

let contactP = document.querySelectorAll('.contact p');
contactP[0].innerHTML = siteContent['contact']['address'];
contactP[1].innerHTML = siteContent['contact']['phone'];
contactP[2].innerHTML = siteContent['contact']['email'];


// ~~~~~ Footer ~~~~~
let footerP = document.querySelector('footer p');
footerP.innerHTML = siteContent['footer']['copyright'];