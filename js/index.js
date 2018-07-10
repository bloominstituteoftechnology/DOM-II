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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//QUERY SELECTORS and Element Creation


let myContainer = document.querySelector(".container");

//nav



let newNavItem1 = document.createElement("a");
let newNavItem2 = document.createElement("a");
let t1 = document.createTextNode("Propaganda");
let t2 = document.createTextNode("Kittens");


let nav = document.querySelector("nav");
newNavItem1.appendChild(t1);
newNavItem2.appendChild(t2);




nav.appendChild(newNavItem1);
nav.prepend(newNavItem2);

let navItems = document.querySelectorAll("nav a");


//cta


let ctaNewImg = document.createElement("img");
ctaNewImg.setAttribute('src', "img/kitty1.jpg");
ctaNewImg.style.display = "none";
ctaNewImg.style.width = "15%";
ctaNewImg.style.height = "15%";
ctaNewImg.className = "cat";

let ctaNewImg2 = document.createElement("img");
ctaNewImg2.setAttribute('src', "img/kitty2.jpg");
ctaNewImg2.style.display = "none";
ctaNewImg2.style.width = "15%";
ctaNewImg2.style.height = "15%";
ctaNewImg2.className = "cat2";

let ctaNewImg3 = document.createElement("img");
ctaNewImg3.setAttribute('src', "img/kitty3.jpg");
ctaNewImg3.style.display = "none";
ctaNewImg3.style.width = "15%";
ctaNewImg3.style.height = "15%";
ctaNewImg3.className = "cat3";


let ctaWhole = document.querySelector(".cta");

ctaWhole.prepend(ctaNewImg);
ctaWhole.appendChild(ctaNewImg2);
ctaWhole.appendChild(ctaNewImg3);



let ctaHeader = document.querySelector(".cta-text h1");
let ctaButton = document.querySelector(".cta-text button");
let ctaLogo = document.querySelector("#cta-img");

//main content

let mainContentHeaders = document.querySelectorAll(".text-content h4");
let mainContentText = document.querySelectorAll(".text-content p");
let mainContentImg = document.querySelector("#middle-img");

//contact

let contactHeader = document.querySelector(".contact h4");
let contactText = document.querySelectorAll(".contact p");

//footer

let footer = document.querySelector("footer p");


//HTML MANIPULATION

//window or container

window.addEventListener("wheel", (event) => {
  mainContentText.forEach((element) => element.style.color = "blue");
  event.stopPropagation();
})

window.addEventListener("beforeprint", (event) => {
  alert("No Printing Allowed!");
})

myContainer.parentElement.addEventListener("keydown", (event) => {
  TweenMax.to("#cta-img", 3, { x: -800, rotation: 360, scale: 0 });
  event.stopPropagation();
});



//nav



newNavItem1.setAttribute("href", "#");
newNavItem2.setAttribute("href", "#");

navItems[1].innerHTML = siteContent["nav"]["nav-item-1"];
navItems[2].innerHTML = siteContent["nav"]["nav-item-2"];
navItems[3].innerHTML = siteContent["nav"]["nav-item-3"];
navItems[4].innerHTML = siteContent["nav"]["nav-item-4"];
navItems[5].innerHTML = siteContent["nav"]["nav-item-5"];
navItems[6].innerHTML = siteContent["nav"]["nav-item-6"];


navItems.forEach((element) => element.style.color = "green");

navItems.forEach((element) => element.addEventListener("click", (event) => {
  TweenMax.to(element, 1, { y: 20 });
  event.stopPropagation();
}));

navItems[0].addEventListener("click", (event) => {
  ctaNewImg.style.display = "inline";
  TweenMax.to(".cat", 3, { x: 200, ease: Bounce.easeOut });
});

logo.addEventListener("mouseenter", (event) => {
  ctaNewImg2.style.display = "inline";
  TweenMax.to(".cat2", 3, {y:100, ease:Bounce.easeOut});
});

logo.addEventListener("mouseleave", (event) => {
  ctaNewImg3.style.display = "inline";
  TweenMax.to(".cat3", 3, {y:50, ease:Bounce.easeOut});
});

//cta


ctaHeader.innerHTML = "DOM<br> Is<br> Awesome";
ctaButton.innerHTML = siteContent["cta"]["button"];
ctaLogo.setAttribute('src', siteContent["cta"]["img-src"]);

ctaButton.addEventListener("dblclick", (event) => {
  TweenMax.to(event.target, 6, { ease: Elastic.easeOut.config(1, 0.3), y: -300 });
  event.target.style.color = 'red';
});



//main content

mainContentHeaders[0].innerHTML = siteContent["main-content"]["features-h4"];
mainContentHeaders[1].innerHTML = siteContent["main-content"]["about-h4"];
mainContentHeaders[2].innerHTML = siteContent["main-content"]["services-h4"];
mainContentHeaders[3].innerHTML = siteContent["main-content"]["product-h4"];
mainContentHeaders[4].innerHTML = siteContent["main-content"]["vision-h4"];

mainContentText[0].innerHTML = siteContent["main-content"]["features-content"];
mainContentText[1].innerHTML = siteContent["main-content"]["about-content"];
mainContentText[2].innerHTML = siteContent["main-content"]["services-content"];
mainContentText[3].innerHTML = siteContent["main-content"]["product-content"];
mainContentText[4].innerHTML = siteContent["main-content"]["vision-content"];

mainContentImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);





//contact

contactHeader.innerHTML = siteContent["contact"]["contact-h4"];
contactText[0].innerHTML = siteContent["contact"]["address"];
contactText[1].innerHTML = siteContent["contact"]["phone"];
contactText[2].innerHTML = siteContent["contact"]["email"];

//footer

footer.innerHTML = siteContent["footer"]["copyright"];

