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
    "about-h4":"About <double click here>",
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
let head = document.querySelector('header');
head.style.borderBottom = "2px solid blue";

document.querySelector('#text').addEventListener('keypress', () => {
  document.querySelector('#text').style.backgroundColor = 'red';
})

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let cta = document.getElementById('cta-img');
cta.src = siteContent['cta']['img-src'];
cta.addEventListener('mouseup', () =>{
  cta.style.opacity = '0.2';
})


let mid = document.getElementById('middle-img');
mid.src = siteContent['main-content']['middle-img-src'];
mid.style.borderRadius = "25px";
mid.addEventListener('click',(event) => {
  event.target.style.visibility = 'hidden';
})

let navbar = document.querySelectorAll('header nav a');
navbar.forEach((x,index) => {
  x.innerText = siteContent["nav"][`nav-item-${index+1}`];
  x.style.color = 'green';
});

let first = document.createElement("a");
let last = document.createElement("a");
let home = document.createTextNode('Home');
let link = document.createTextNode('Links');
let nav = document.querySelector('nav');
first.appendChild(home);
last.appendChild(link)
nav.appendChild(last);
nav.prepend(first);


let ctaContent = document.querySelector('.cta .cta-text');
ctaContent.querySelector('h1').innerText = siteContent['cta']['h1'];
ctaContent.querySelector('button').innerText = siteContent['cta']['button'];
ctaContent.addEventListener('click', (event)=> {event.target.style.color = 'red'});
ctaContent.style.border = '3px black solid';
ctaContent.style.borderRadius = '10px';
ctaContent.querySelector('button').style.backgroundColor = 'yellow';
ctaContent.querySelector('button').addEventListener('click', ()=>{alert('Hello')})
ctaContent.querySelector('h1').addEventListener('mouseover', (event)=>{
  event.target.style.backgroundColor = 'blue'
  setTimeout(function() {
    event.target.style.backgroundColor = '';
    }, 800);
});


let contentTitle = document.querySelectorAll('.text-content h4');
contentTitle[0].innerText = siteContent['main-content']['features-h4'];
contentTitle[1].innerText = siteContent['main-content']['about-h4'];
contentTitle[2].innerText = siteContent['main-content']['services-h4'];
contentTitle[3].innerText = siteContent['main-content']['product-h4'];
contentTitle[4].innerText = siteContent['main-content']['vision-h4'];
contentTitle[0].style.backgroundColor = 'red';
contentTitle[0].addEventListener('mouseover',()=>{
  console.log('Bye Bye');
})
contentTitle[1].addEventListener('dblclick', ()=>{
  alert('Double Clicked')
})

let content = document.querySelectorAll('.text-content p');
content[0].innerText = siteContent['main-content']['features-content'];
content[1].innerText = siteContent['main-content']['about-content'];
content[2].innerText = siteContent['main-content']['services-content'];
content[3].innerText = siteContent['main-content']['product-content'];
content[4].innerText = siteContent['main-content']['vision-content'];

let contact = document.querySelector('.contact h4');
contact.innerText = siteContent['contact']['contact-h4'];
contact.style.color = 'teal';

let contactContent = document.querySelectorAll('.contact p')
contactContent[0].innerText = siteContent['contact']['address'];
contactContent[1].innerText = siteContent['contact']['phone'];
contactContent[2].innerText = siteContent['contact']['email'];

let footer = document.querySelector('footer p');
footer.innerText = siteContent['footer']['copyright'];
footer.style.color = 'purple';

