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
logo.setAttribute("src", siteContent["nav"]["img-src"]);
logo.addEventListener("mouseup", () => {
  logo.style = "transform: skewY(20deg)";
})

let navBar = document.querySelector("nav");
navBar.style = "display: flex; justify-content: space-between;";
navBar.addEventListener("keydown", () => {
  navBar.style.background = "yellow";
})

let nav1 = document.querySelectorAll("nav a");
nav1[0].innerHTML = siteContent["nav"]["nav-item-1"];
nav1[1].innerHTML = siteContent["nav"]["nav-item-2"];
nav1[2].innerHTML = siteContent["nav"]["nav-item-3"];
nav1[3].innerHTML = siteContent["nav"]["nav-item-4"];
nav1[4].innerHTML = siteContent["nav"]["nav-item-5"];
nav1[5].innerHTML = siteContent["nav"]["nav-item-6"];
for (let i = 0; i < nav1.length; i++) {
  nav1[i].addEventListener("mouseenter" , () => {
    nav1[i].style.color = "green";
  })
}


let ctaText = document.getElementsByClassName("cta-text")[0];

ctaText.getElementsByTagName("h1")[0].innerHTML = siteContent["cta"]["h1"];
ctaText.getElementsByTagName("h1")[0].addEventListener("mousedown", () => {
  ctaText.style.color = "purple";
})
ctaText.getElementsByTagName("button")[0].innerHTML = siteContent["cta"]["button"]; 
ctaText.getElementsByTagName("button")[0].addEventListener("click", () => {
  alert("You clicked me!");
});

//let ctaText = document.querySelector(".cta-text");
//ctaText.innerHTML = "DOM <br>Is <br>Awesome";
//ctaText.style = "font-family: Bangers; letter-spacing: 0px;";

//let button = document.getElementsByTagName("button");
//button.innerHTML = siteContent["cta"]["button"];

//ctaText.getElementsByTagName("button").innerHTML = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);
ctaImg.addEventListener("mouseover", () => {
  ctaImg.style = "width: 100px;";
});
ctaImg.addEventListener("mouseleave", () => {
  ctaImg.style = "width: 40%;";
});

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
middleImg.addEventListener("mousemove", () => {
  middleImg.style = "opacity: 0.5;";
});


let mainContent = document.querySelector(".main-content");
mainContent.style = "display: flex; justify-content: space-evenly; flex-wrap: wrap; align-text: left;";

let subHeads = document.querySelectorAll(".main-content  h4");
subHeads[0].innerHTML = siteContent["main-content"]["features-h4"];
subHeads[1].innerHTML = siteContent["main-content"]["about-h4"];
subHeads[2].innerHTML = siteContent["main-content"]["services-h4"];
subHeads[3].innerHTML = siteContent["main-content"]["product-h4"];
subHeads[4].innerHTML = siteContent["main-content"]["vision-h4"];
for (let i = 0; i < subHeads.length; i++) {
  subHeads[i].addEventListener("dblclick" , () => {
    subHeads[i].style.color = "blue";
  })
}


let paragraphs = document.querySelectorAll(".main-content  p");
paragraphs[0].innerHTML = siteContent["main-content"]["features-content"];
paragraphs[1].innerHTML = siteContent["main-content"]["about-content"];
paragraphs[2].innerHTML = siteContent["main-content"]["services-content"];
paragraphs[3].innerHTML = siteContent["main-content"]["product-content"];
paragraphs[4].innerHTML = siteContent["main-content"]["vision-content"];
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].addEventListener("select", () => {
    paragraphs[i].style.color = "brown";
  })
}


let contactHead = document.querySelector(".contact  h4");
contactHead.innerHTML = siteContent["contact"]["contact-h4"];

let contactContent = document.querySelectorAll(".contact p");
contactContent[0].innerHTML = siteContent["contact"]["address"];
contactContent[1].innerHTML = siteContent["contact"]["phone"];
contactContent[2].innerHTML = siteContent["contact"]["email"];
contactContent.style = "margin-top: 5px;";

let footer = document.querySelector("footer");
footer.innerHTML = siteContent["footer"]["copyright"];
footer.addEventListener("drag", () => {
  footer.style = "font-size: 4.8rem;";
});


nav1.addEventListener("mouseover", () => {
  nav1.style = "color: green;";
});