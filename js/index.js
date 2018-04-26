
const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-6": "About",
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
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

let aTag = document.getElementsByTagName("a");

for(let i = 0; i < aTag.length; i++) {
  aTag[i].style = "color: green";
}

for(let i = 0; i < aTag.length; i++) {
  aTag[i].innerHTML = siteContent["nav"]["nav-item-"+(i+1)]
}

  var testNode = document.createElement("a");
  testNode.innerHTML = "Back";
  aTag[5].appendChild(testNode);
  aTag[6].style.margin = "20px"
  

 console.log();
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Image of code snippet
let imag = document.getElementById("cta-img");
imag.setAttribute('src', siteContent["cta"]["img-src"])

//Middle image
let middleImag = document.getElementById("middle-img");
middleImag.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let ctaText = document.querySelector(".cta-text");
ctaText.childNodes[1].innerHTML = siteContent["cta"]["h1"];
ctaText.childNodes[3].innerHTML = siteContent["cta"]["button"];

let btnTag = document.getElementsByTagName("button");


   document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    alert('keydown event\n\n' + 'key: ' + keyName);
  });
  


middleImag.addEventListener("mouseenter", function(){
middleImag.style = "height: 200px";
middleImag.style = "width: 600px";
});

let btn = ctaText.childNodes[3];

console.log(logo);

logo.addEventListener("mouseover", function(){
  TweenLite.to("#logo-img", 2, {x:-100, y:100,z:-20, transformOrigin:"0% 100%"});   
    
  setTimeout(function() {
    TweenLite.to("#logo-img", 1, {x:0, y:0, z:0});  
  }, 2000);
  
});

ctaText.childNodes[1].addEventListener("copy", function() {
  alert("Stop stealing my Stuffff!");
 });


window.addEventListener("resize", function() {
 alert("Stop it Dude!");
});

btn.addEventListener("dblclick", function() {   
  ctaText.childNodes[1].style = "margin-bottom: 40px";
  ctaText.childNodes[1].style = "color: darkblue";

  // reset the color after a short delay
  setTimeout(function() {
    ctaText.childNodes[1].style = "margin-top: 40px";
  }, 2000);
}, false);


//let btn = ctaText.childNodes[3];

btn.addEventListener('click', (event) => {
  TweenMax.to("#cta-img", 2, {    
    rotation: 360
  });
});

let topContent = document.querySelector(".top-content");
topContent.childNodes[1].children[0].innerHTML = siteContent["main-content"]["features-h4"];
topContent.childNodes[1].children[1].innerHTML = siteContent["main-content"]["features-content"];

topContent.childNodes[3].children[0].innerHTML = siteContent["main-content"]["about-h4"];
topContent.childNodes[3].children[1].innerHTML = siteContent["main-content"]["about-content"];
// topContent.childNodes[2].innerHTML = siteContent["main-content"]["features-h4"];
// topContent.childNodes[3].innerHTML = siteContent["main-content"]["about-content"];


let bottomContent = document.querySelector(".bottom-content");
bottomContent.childNodes[1].children[0].innerHTML = siteContent["main-content"]["features-h4"];
bottomContent.childNodes[1].children[1].innerHTML = siteContent["main-content"]["features-content"];

bottomContent.childNodes[3].children[0].innerHTML = siteContent["main-content"]["about-h4"];
bottomContent.childNodes[3].children[1].innerHTML = siteContent["main-content"]["about-content"];


let contact = document.querySelector(".contact");
contact.childNodes[1].innerHTML = siteContent["contact"]["contact-h4"];
contact.childNodes[3].innerHTML = siteContent["contact"]["address"];
contact.childNodes[5].innerHTML = siteContent["contact"]["phone"];
contact.childNodes[7].innerHTML = siteContent["contact"]["email"];

contact.addEventListener("mousedown", function() { 
  TweenLite.to(".contact", 2, {x: 75, y: 0, itemOrigin: "50% 50%"});

  setTimeout(function() {
    TweenLite.to(".contact", 2, {x: 0, y: 0, itemOrigin: "50% 50%"});  
  }, 2000); 

});

let footer = document.getElementsByTagName("footer");
footer[0].innerHTML = siteContent["footer"]["copyright"];


//console.log(footer);