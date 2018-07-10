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

// initial Pull

//-------------------------Nav-----------------------------------
let cta
let navItem1 = document.querySelector("nav a");
navItem1.innerHTML = siteContent["nav"]["nav-item-1"]
navItem1.style.color = "green";

let navItem2 = document.getElementsByTagName("a");
navItem2[1].innerHTML = siteContent["nav"]["nav-item-2"]
navItem2[1].style.color = "green";

let navItem3 = document.getElementsByTagName("a");
navItem3[2].innerHTML = siteContent["nav"]["nav-item-3"]
navItem3[2].style.color = "green";

let navItem4 = document.getElementsByTagName("a");
navItem4[3].innerHTML = siteContent["nav"]["nav-item-4"]
navItem4[3].style.color = "green";

let navItem5 = document.getElementsByTagName("a");
navItem5[4].innerHTML = siteContent["nav"]["nav-item-5"]
navItem5[4].style.color = "green";

let navItem6 = document.getElementsByTagName("a");
navItem6[5].innerHTML = siteContent["nav"]["nav-item-6"]
navItem6[5].style.color = "green";

//---------------------------CTA---------------------------------
let ctaH1 = document.querySelector(".cta-text h1");
ctaH1.innerHTML = "Dom<br>IS<br>AWESOME"

let ctaButton = document.querySelector(".cta-text button");
ctaButton.innerHTML = siteContent["cta"]["button"]

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

//----------------------Top Content--------------------------------------
let topContentH4 = document.querySelectorAll(".top-content h4");
topContentH4[0].innerHTML = siteContent["main-content"]["features-h4"]
topContentH4[1].innerHTML = siteContent["main-content"]["about-h4"]

let topContentP = document.querySelectorAll(".top-content p");
topContentP[0].innerHTML = siteContent["main-content"]["features-content"]
topContentP[1].innerHTML = siteContent["main-content"]["about-content"]

//--------------------------Middle Image----------------------------------
let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//-------------------------Bottom Content-----------------------------------
let botContentH4 = document.querySelectorAll(".bottom-content h4")
botContentH4[0].innerHTML = siteContent["main-content"]["services-h4"]
botContentH4[1].innerHTML = siteContent["main-content"]["product-h4"]
botContentH4[2].innerHTML = siteContent["main-content"]["vision-h4"]

let botContentP = document.querySelectorAll(".bottom-content P")
botContentP[0].innerHTML = siteContent["main-content"]["services-content"]
botContentP[1].innerHTML = siteContent["main-content"]["product-content"]
botContentP[2].innerHTML = siteContent["main-content"]["vision-content"]

//---------------------------Contact---------------------------------
let contactH4 = document.querySelector(".contact h4")
contactH4.innerHTML = siteContent["contact"]["contact-h4"]

let contactP = document.querySelectorAll(".contact p")
contactP[0].innerHTML = siteContent["contact"]["address"]
contactP[1].innerHTML = siteContent["contact"]["phone"]
contactP[2].innerHTML = siteContent["contact"]["email"]

//--------------------------Footer----------------------------------
let footer = document.querySelector("footer")
footer.innerHTML = siteContent["footer"]["copyright"]

//-----------------------Add Nav Elements-------------------------------------
navLink = document.getElementsByTagName("nav")[0];
let createNode = (addNav) => {
  let newNavItem = document.createElement("a")
  newNavItem.innerHTML = addNav;
  return newNavItem;
}

navLink.appendChild(createNode("End of Nav"));
navLink.prepend(createNode("Start of Nav"));

//-----------------------Events-------------------------------------

ctaImg.addEventListener("mouseenter", (event) => {
console.log("img was entered")
});

contactP[2].addEventListener("copy", (event) => {
  console.log("Email Copied. Expect an email")
  });

  contactP[1].addEventListener("cut", (event) => {
    console.log("Phone cut. Expect an Call")
    });

    document.addEventListener("scroll", (event) => {
    console.log("Page scrolled")
    "backgroundColor: black"
  });

  document.addEventListener("keypress", (event) => {
    console.log("someone is pressin buttons")
  });


  logo.addEventListener("mouseenter", (event) => {
    logo.setAttribute('src', "img/logo-lit.png")
    TweenMax.to(".logo", 3, {x:100, rotation:180, opacity: 0, scale:0.5});
  });
    logo.addEventListener("mouseleave", (event) => {
      logo.setAttribute('src', siteContent["nav"]["img-src"])
      TweenMax.to(".logo", 2, {x:0, rotation:360, opacity: 100, scale:1});
    
    });
