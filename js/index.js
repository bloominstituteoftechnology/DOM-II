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


let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//************************** Task  *******************************

let navLinks = document.querySelectorAll("nav a");
navLinks.forEach((element, i) => {
    element.innerHTML = siteContent["nav"]["nav-item-" + (i + 1)];
    element.style = "color: blue"
})

let ctaH1 = document.querySelectorAll(".cta-text h1");
ctaH1[0].innerHTML = siteContent["cta"]["h1"]


let ctaOther = document.querySelectorAll(".cta-text");
ctaOther[0].lastElementChild.innerHTML = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let topContent = document.querySelectorAll(".top-content .text-content");
topContent[0].firstElementChild.innerHTML = siteContent["main-content"]["features-h4"];
topContent[0].lastElementChild.innerHTML = siteContent["main-content"]["features-content"];

topContent[1].firstElementChild.innerHTML = siteContent["main-content"]["about-h4"];
topContent[1].lastElementChild.innerHTML = siteContent["main-content"]["about-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let bottomContent = document.querySelectorAll(".bottom-content .text-content");
bottomContent[0].firstElementChild.innerHTML = siteContent["main-content"]["services-h4"];
bottomContent[0].lastElementChild.innerHTML = siteContent["main-content"]["services-content"];

bottomContent[1].firstElementChild.innerHTML = siteContent["main-content"]["product-h4"];
bottomContent[1].lastElementChild.innerHTML = siteContent["main-content"]["product-content"];

bottomContent[2].firstElementChild.innerHTML = siteContent["main-content"]["vision-h4"];
bottomContent[2].lastElementChild.innerHTML = siteContent["main-content"]["vision-content"];

let contactHead = document.querySelector(".contact h4")
contactHead.innerHTML = siteContent.contact["contact-h4"]

let contactMain = document.querySelectorAll(".contact p")
contactMain[0].innerHTML = siteContent["contact"]["address"]
contactMain[1].innerHTML = siteContent["contact"]["phone"]
contactMain[2].innerHTML = siteContent["contact"]["email"]

let footer = document.querySelector("footer")
footer.innerHTML = siteContent["footer"]["copyright"];

let lastNav = document.createElement("A");
lastNav.innerHTML = "Last";
let navNav = document.querySelector("nav");
navNav.appendChild(lastNav);
let firstNav = document.createElement("A");
firstNav.innerHTML = "First";
navNav.prepend(firstNav);

//******************* Event Listener *******************

//********************* Wheel **************************
window.addEventListener('wheel', () => {
    alert("I guess you'll have to find another way down the page(Cant Scroll)")

})

//********************* Double Click *******************
ctaOther[0].addEventListener('dblclick', () => {
    event.target.style.border = "75px solid black"
    alert("How dare you double click me!!!")
})

//********************* Mouseenter *********************

let logoImg = document.getElementById("logo-img");
logoImg.addEventListener("mouseenter", () => {
    event.target.style.border = "2px solid black";
});

//*********************** Resize ***********************

window.addEventListener("resize", () => {
    alert("Still trying to navigate this page huh?")
})
//*********************** Click ************************

ctaOther.addEventListener("click", () => {
    ctaOther.innerHTML = siteContent["cta"]["button"];
    alert("Stop in the name of Love!")
})