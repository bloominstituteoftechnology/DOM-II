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

//navigation
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
let nav = document.querySelectorAll("nav a");
nav[0].innerHTML=siteContent["nav"]["nav-item-1"];
nav[1].innerHTML=siteContent["nav"]["nav-item-2"];
nav[2].innerHTML=siteContent["nav"]["nav-item-3"];
nav[3].innerHTML=siteContent["nav"]["nav-item-4"];
nav[4].innerHTML=siteContent["nav"]["nav-item-5"];
nav[5].innerHTML=siteContent["nav"]["nav-item-6"];

//cta
let ctaH1= document.querySelector(".cta h1");
ctaH1.innerHTML=siteContent["cta"]["h1"];
let ctaButton =document.querySelector(".cta .cta-text button");
ctaButton.innerHTML = siteContent["cta"]["button"];
let header = document.getElementById('cta-img');
header.setAttribute('src',siteContent["cta"]['img-src'])

//main Content

let mainh4 = document.querySelectorAll(".text-content h4")
mainh4[0].innerHTML= siteContent["main-content"]["features-h4"];
mainh4[1].innerHTML= siteContent["main-content"]["about-h4"];
let mainp = document.querySelectorAll(".text-content p");
mainp[0].innerHTML = siteContent["main-content"]["features-content"]
mainp[1].innerHTML = siteContent["main-content"]["about-content"]
let midimage = document.getElementById('middle-img');
midimage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
let bottom=document.querySelectorAll('.bottom-content h4');
bottom[0].innerHTML =siteContent['main-content']['services-h4'];
bottom[1].innerHTML =siteContent['main-content']['product-h4'];
bottom[2].innerHTML =siteContent['main-content']['vision-h4'];
let bottomp=document.querySelectorAll('.bottom-content p');
bottomp[0].innerHTML=siteContent["main-content"][ "services-content"];
bottomp[1].innerHTML=siteContent["main-content"][ "product-content"];
bottomp[2].innerHTML=siteContent["main-content"][ "vision-content"];
//Contact
let contacth4= document.querySelector(".contact h4");
contacth4.innerHTML=siteContent["contact"][ "contact-h4"];
let contactp= document.querySelectorAll(".contact p");
contactp[0].innerHTML=siteContent["contact"][ "address"]
contactp[1].innerHTML=siteContent["contact"][ "phone"]
contactp[2].innerHTML=siteContent["contact"][ "email"]
let footerp =document.querySelector("footer p");
footerp.innerHTML=siteContent["footer"][ "copyright"]

//Events
ctaButton.addEventListener('click',(event)=>{
  //test
alert('hello world')

});

header.addEventListener('click',()=>{
ctaH1.style.color ="red";
});

midimage.addEventListener('click',(event)=>{
  event.target.parentElement.style.backgroundColor="blue";

});

let highlight = document.querySelectorAll('.text-content p')

highlight[0].addEventListener('click',(event)=>{
  event.target.classList.add('highlighted');
event.stopPropagation();
});

highlight[1].addEventListener('click',(event)=>{
  event.target.classList.add('highlighted');
event.stopPropagation();
});


highlight[2].addEventListener('click',(event)=>{
  event.target.classList.add('highlighted');
event.stopPropagation();
});


highlight[3].addEventListener('click',(event)=>{
  event.target.classList.add('highlighted');
event.stopPropagation();
});


highlight[4].addEventListener('click',(event)=>{
  event.target.classList.add('highlighted');
event.stopPropagation();
});

highlight[5].addEventListener('click',(event)=>{
  event.target.classList.add('highlighted');
event.stopPropagation();
});
