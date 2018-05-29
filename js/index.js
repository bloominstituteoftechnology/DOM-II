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

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


//event listener for mouse over on logo
logo.addEventListener("mouseover", () => {
  logo.style.transform = "rotate(180deg)";
}); 


//event listener for mouseleave on logo
logo.addEventListener("mouseleave", () => {
  logo.style.transform = "rotate(0deg)";
});

const a = document.createElement('a');
const p = document.querySelector('nav').appendChild(a);
p.innerHTML = "Examples"

const l = document.createElement('a');
const m = document.querySelector('nav').appendChild(l);
m.innerHTML = "Portfolio"


let navTop= document.querySelectorAll("nav a");
navTop[0].innerHTML = siteContent["nav"]["nav-item-1"]
navTop[0].style.color = "green";
navTop[1].innerHTML = siteContent["nav"]["nav-item-2"]
navTop[1].style.color = "green";
navTop[2].innerHTML = siteContent["nav"]["nav-item-3"]
navTop[2].style.color = "green";
navTop[3].innerHTML = siteContent["nav"]["nav-item-4"]
navTop[3].style.color = "green";
navTop[4].innerHTML = siteContent["nav"]["nav-item-5"]
navTop[4].style.color = "green";
navTop[5].innerHTML = siteContent["nav"]["nav-item-6"]
navTop[5].style.color = "green";
navTop[6].style.color = "green";
navTop[7].style.color = "green";

// Event Listener for nav > Services upon click
navTop[0].addEventListener("click", () => {
  if (navTop[0].style.color === "blue") {
    navTop[0].style.color = "green";
    navTop[0].style.fontWeight = "normal";
  } else {
  navTop[0].style.color = "blue";
  navTop[0].style.fontWeight = "bold";
  }
});



let callToAction = document.querySelector(".cta .cta-text h1");
callToAction.innerHTML = "DOM<br>Is<br>Awesome";


let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute("src", siteContent["cta"]["img-src"]);

let ctaButton = document.querySelector(".cta .cta-text button");
ctaButton.innerHTML = siteContent["cta"]["button"];


//event listener for hover over button. Makes image opacity 50%
ctaButton.addEventListener("mouseover", () => {
  ctaImage.style.opacity = ".5";
 })

//event listener for clicking on button
ctaButton.addEventListener("click", () => {
  if (callToAction.innerHTML === "DOM<br>Is<br>Awesome") {
  callToAction.innerHTML = "LAMBDA<br>Is<br>Awesome!";
  callToAction.style.color = "red";
} else if (callToAction.innerHTML === "LAMBDA<br>Is<br>Awesome!") {
  callToAction.innerHTML = "DOM<br>Is<br>Awesome";
  callToAction.style.color = "black";
}
});


let topHeaders = document.querySelectorAll(".top-content .text-content h4");
topHeaders[0].innerHTML = siteContent["main-content"]["features-h4"];
topHeaders[1].innerHTML = siteContent["main-content"]["about-h4"];


let topParagraphs = document.querySelectorAll(".top-content .text-content p");
topParagraphs[0].innerHTML = siteContent["main-content"]["features-content"];
topParagraphs[1].innerHTML = siteContent["main-content"]["about-content"];

let midImage = document.getElementById("middle-img");
midImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//event listener for mouse over on middle image
midImage.addEventListener("mouseover", () => {
  midImage.style.transform = "rotate(180deg)";
}); 

//event listener for mouseleave on middle image
midImage.addEventListener("mouseleave", () => {
  midImage.style.transform = "rotate(0deg)";
});

let botHeaders = document.querySelectorAll(".bottom-content .text-content h4");
botHeaders[0].innerHTML = siteContent["main-content"]["services-h4"];
botHeaders[1].innerHTML = siteContent["main-content"]["product-h4"];
botHeaders[2].innerHTML = siteContent["main-content"]["vision-h4"];

let botParagraphs = document.querySelectorAll(".bottom-content .text-content p");
botParagraphs[0].innerHTML = siteContent["main-content"]["services-content"];
botParagraphs[1].innerHTML = siteContent["main-content"]["product-content"];
botParagraphs[2].innerHTML = siteContent["main-content"]["vision-content"];

let contactHeader = document.querySelector(".contact h4");
contactHeader.innerHTML = siteContent["contact"]["contact-h4"];

// event listener for contact header
contactHeader.addEventListener("mouseup", () => {
  contactHeader.style.color = "purple";
  contactHeader.style.fontSize = "20px";
}, false);

let contactParagraphs = document.querySelectorAll(".contact p");
contactParagraphs[0].innerHTML = siteContent["contact"]["address"];
contactParagraphs[1].innerHTML = siteContent["contact"]["phone"];
contactParagraphs[2].innerHTML = siteContent["contact"]["email"];

// event listeners for right-click  on contact paragraphs
contactParagraphs[0].addEventListener("contextmenu", () => {
  contactParagraphs[0].style.color = "blue";
  contactParagraphs[0].style.background = "orange";
 })

 contactParagraphs[1].addEventListener("contextmenu", () => {
  contactParagraphs[1].style.color = "blue";
  contactParagraphs[1].style.background = "orange";
 })

 contactParagraphs[2].addEventListener("contextmenu", () => {
  contactParagraphs[2].style.color = "blue";
  contactParagraphs[2].style.background = "orange";
 })

let footerStuff = document.querySelector("footer p");
footerStuff.innerHTML = siteContent["footer"]["copyright"];


// Event Listener for footer upon click
footerStuff.addEventListener("click", () => {
  if (footerStuff.style.color === "red") {
    footerStuff.style.color = "black";
  footerStuff.style.fontWeight = "normal";
  } else {
  footerStuff.style.color = "red";
  footerStuff.style.fontWeight = "bold";
  }
}
);
