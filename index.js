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
logo.setAttribute('src', "https://cdn.drawception.com/images/panels/2017/4-19/qa3eAkHP1T-6.png")

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", "https://img.etsystatic.com/il/fba1be/502755140/il_570xN.502755140_e5b7.jpg?version=1")

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", "https://pre00.deviantart.net/1f2c/th/pre/f/2016/178/8/4/r_lyeh_rising_by_welshpixie-da7sxa8.png")

//Navigation

// let navBar = document.getElementsByName("nav");
// TweenMax.to("nav", 15, {y:10, scale:0.9});


let services = document.getElementsByTagName("a")[0];
services.innerHTML = "Services";

services.addEventListener('dblclick', () => { //dblclick  
  alert("Check out our cool services!");
});

let product = document.getElementsByTagName("a")[1];
product.innerHTML = "Product";
let vision = document.getElementsByTagName("a")[2];
vision.innerHTML = "Vision";
let features = document.getElementsByTagName("a")[3];
features.innerHTML = "Features";
let about = document.getElementsByTagName("a")[4];
about.innerHTML = "About"
let contact = document.getElementsByTagName("a")[5];
contact.innerHTML = "Contact";

contact.addEventListener('mouseover', () => { //mouseover   
    TweenMax.to("a", 120, {x:29, y:19, scale:2}); //animation 
    });

//let greatIdea = document.querySelector("#logo-img")

//CTA
let h1Message = document.getElementsByTagName("h1")[0];
h1Message.innerHTML = "DOM Is Awesome";

h1Message.addEventListener('cut', () => {
alert('turn back now');
});

let button = document.getElementsByTagName("button")[0];
button.innerHTML = "Get Started";

button.addEventListener('click', () =>{ //click 
  alert("don't click chuthulu");
});

let askQuestion = document.getElementsByTagName("inspect")[0];
askQuestion.innerText = "  ";

askQuestion.addEventListener('click', () => { //click 
  prompt();
});


let codePic = document.querySelector("#cta-img")
//chuthulu animations
TweenMax.to("#cta-img", 60, {x:0, rotation:360, scale: 0.1}); //animation 
codePic.addEventListener('mouseup', () =>{ //mouseup 4of10
  alert("What Have You DONE!");
});
codePic.addEventListener('click', () => { //click 
  TweenMax.to("#cta-img", 120, {x:90, width:"223px", height:"333px", scale: 9}, //animation 
  h1Message.innerHTML = "D00M Is Awesome"); 
});


//Main content 

// let mainContent = document.getElementsByClassName('main-content');
// mainContent.addEventListener('copy', (e) => {
//   e.preventDefault();
//   alert("You tryin to steal my words, yo?");
// });

let featuresH4 = document.getElementsByTagName('h4')[0];
featuresH4.innerHTML = "Features";
let featureContent = document.getElementsByTagName('p')[0];
featureContent.innerHTML = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

featureContent.addEventListener('copy', () => { //copy  
  alert("You trying to steal my words, yo?");
})

let aboutH4 = document.getElementsByTagName('h4')[1];
aboutH4.innerHTML = "About";
let aboutContent = document.getElementsByTagName('p')[1];
aboutContent.innerHTML = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
aboutContent.addEventListener('mouseover',()=>{
  TweenMax.to("p", 120, {x:3, rotate: 15, width: 6});
});

let servicesH4 = document.getElementsByTagName('h4')[2];
servicesH4.innerHTML = "Services";
let servicesContent = document.getElementsByTagName('p')[2];
servicesContent.innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
let productH4 = document.getElementsByTagName('h4')[3];
productH4.innerHTML = "Product"
let productContent = document.getElementsByTagName('p')[3];
productContent.innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
let visionH4 = document.getElementsByTagName('h4')[4];
visionH4.innerHTML = "Vision";
let visionContent = document.getElementsByTagName('p')[4];
visionContent.innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let otherPic = document.querySelector(".middle-img");
otherPic.addEventListener('dragend', (e) =>{ //dragend 
  e.preventDefault();
  alert("RAAAAWWWAAAARRRR");
});
TweenMax.to(".middle-img", 10, {x:0, rotation:360, }); //animation  
otherPic.addEventListener('fullscreenchange',() => {
  TweenMax.to(".middle-img", 100, {rotation: 360, scale: 10})
});

//Contact

let contactH4 = document.getElementsByTagName('h4')[5];
contactH4.innerHTML = "Contact";
let address = document.getElementsByTagName('p')[5];
address.innerHTML = "123 Way 456 Street Somewhere, USA";

address.addEventListener('copy', (e) => { //copy again
    e.preventDefault(); 
    alert("where you trying to go with that?");
});

let phone = document.getElementsByTagName('p')[6];
phone.innerHTML = "1 (888) 888-8888";
let email = document.getElementsByTagName('p')[7];
email.innerHTML = "sales@greatidea.io";

email.addEventListener('contextmenu', () => { //contextmenu 
  alert('Enter Your Email PLease');
  prompt();
});

//footer
let footer = document.getElementsByTagName('p')[8];
footer.innerHTML = "Copyright Great Idea! 2018"

footer.addEventListener('mousedown', () => { //mousedown
  alert("D00M LLC");
 });


//Changing color of nav links to green
let navigation = document.querySelectorAll("a");
let i;
for (i = 0; i < navigation.length; i++) {
  navigation[i].style.color = "purple";
}


 
