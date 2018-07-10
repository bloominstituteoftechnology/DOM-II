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

window.addEventListener('keydown', (event)=>{
  console.log("keydown pressed");
})


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
logo.addEventListener('message', (event) => {
  console.log("Message from messanger");
});
// REMEMBER, you can accomplish the assignment in many different ways. You could literally use getElementByTag name to accomplish everything if you wanted:

//navigation bar
let navBarLinks = document.querySelectorAll("nav a");
navBarLinks.forEach((navLink, i) => {
  //innerHTML edit text within the html tags
  //siteContent object, nav key value, [nav-item(key value for the nav object)]
  navLink.innerHTML = siteContent.nav[`nav-item-${i+1}`];
})


//cta section

//header
let ctaText = document.querySelector(".cta-text h1");
ctaText.innerHTML = siteContent.cta[`h1`];
ctaText.addEventListener('copy', (event) => {
  console.log("copied content to clipboard")
})

//button
let ctaButton = document.querySelector(".cta-text button");
ctaButton.innerHTML = siteContent.cta['button'];
ctaButton.addEventListener('click', (event) => {
  console.log("button was clicked");
  ctaButton.style.color = "red";
  event.stopPropagation();
})


//img source
let ctaImg = document.querySelector(".cta img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
ctaImg.addEventListener('mouseover', (event) => {
  // ctaImg.style.scale(2);
  // ctaImg.style.border 10px solid red;
  
  console.log("mouseover");
});

//main-content section

 
// headerMain.innerHTML = siteContent["main-content"][];

//headers and paragraphs
//common variables h4, p, .text-content finding way to loop through three variables
let mainContent = document.querySelectorAll(".text-content");

//first mainContent Section, all elements with h4 at 0 position, change HTML contents, with contents in siteContent
mainContent[0].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["features-h4"];
mainContent[0].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["features-content"];
mainContent[1].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["about-h4"];
mainContent[1].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["about-content"];
mainContent[2].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["services-h4"];
mainContent[2].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["services-content"];
mainContent[3].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["product-h4"];
mainContent[3].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["product-content"];
mainContent[4].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["vision-h4"];
mainContent[4].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["vision-content"];


//main content image
let mainImg = document.querySelector(".main-content img");
mainImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);



//contact section

//header
let contactHeader = document.querySelector(".contact h4");
contactHeader.innerHTML = siteContent["contact"]["contact-h4"];
contactHeader.addEventListener('auxclick', (event) => {
  console.log("non-primary key pressed");
})


//contact information

//tried looping
// let contactInfo = document.querySelectorAll(".contact p");
// contactInfo.forEach((info, i) => {
//   contactInfo.innerHTML = (object.values(siteContent));
  
// });

let contactInfo = document.getElementsByClassName("contact")[0];

contactInfo.getElementsByTagName("p")[0].innerHTML = siteContent["contact"]["address"];
contactInfo.getElementsByTagName("p")[1].innerHTML = siteContent["contact"]["phone"];
contactInfo.getElementsByTagName("p")[2].innerHTML = siteContent["contact"]["email"];


//footer

let footerInfo = document.querySelector("footer p");
footerInfo.innerHTML = siteContent["footer"]["copyright"];


