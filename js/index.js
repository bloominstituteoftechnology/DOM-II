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
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])



// let hmtlTag = document.getElementsByClassName(".lang");
// htmlTag.className = "en";
// let containerClass = document.getElementsByClassName(".container");

let navItems = document.querySelectorAll("a");

navItems[0].innerHTML = "Services";
navItems[1].innerHTML = "Product";
navItems[2].innerHTML = "Vision";
navItems[3].innerHTML = "Features";
navItems[4].innerHTML = "About";
navItems[5].innerHTML = "Contact";

let logoID = document.querySelector("#logo-img");
logoID.setAttribute("src", "img/logo.png");
logoID.setAttribute("alt", "Great Idea! Company logo.");

let ctaTextH1Class = document.querySelector(".cta h1");
ctaTextH1Class.innerHTML = "DOM Is Awesome (Scroll or click here)";

let ctaTextButtonClass = document.querySelector(".cta button");
ctaTextButtonClass.innerHTML = "double click here";

let ctaImageId = document.querySelector("#cta-img");
ctaImageId.setAttribute("src", "img/header-img.png");

let topContentH4Elements = document.querySelectorAll(".top-content .text-content h4");
topContentH4Elements[0].innerHTML = "Features (double-click me)";
topContentH4Elements[1].innerHTML = "About (double-click me)";

let topContentPElements = document.querySelectorAll(".top-content .text-content p");
topContentPElements[0].innerHTML = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis. ******PRESS ANY KEY or CLICK HERE.******";
topContentPElements[1].innerHTML = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis. ******PRESS ANY KEY or CLICK HERE.******";

let middleImageId = document.querySelector("#middle-img");
middleImageId.setAttribute("src", "img/mid-page-accent.jpg");

let bottomContentH4Elements = document.querySelectorAll(".bottom-content .text-content h4");
bottomContentH4Elements[0].innerHTML = "Services (copy me)";
bottomContentH4Elements[1].innerHTML = "Product (copy me)";
bottomContentH4Elements[2].innerHTML = "Vision (copy me)";

let bottomContentPElements = document.querySelectorAll(".bottom-content .text-content p");
bottomContentPElements[0].innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis. ******RESIZE WINDOW******";
bottomContentPElements[1].innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis. ******RESIZE WINDOW******";
bottomContentPElements[2].innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis. ******RESIZE WINDOW******";


let contactClassH4Element = document.querySelectorAll(".contact h4");
contactClassH4Element[0].innerHTML = "Contact (hover over me)";

let contactClassPElements = document.querySelectorAll(".contact p");
contactClassPElements[0].innerHTML = "123 Way 456 Street Somewhere, USA";
contactClassPElements[1].innerHTML = "1 (888) 888-8888";
contactClassPElements[2].innerHTML = "sales@greatidea.io";

let footerPElement = document.querySelectorAll("footer p");
footerPElement[0].innerHTML = "Copyright Great Idea! 2018";


navItems[0].style.cssText = "color:blue;";
navItems[1].style.cssText = "color:blue;"
navItems[2].style.cssText = "color:blue;"
navItems[3].style.cssText = "color:blue;"
navItems[4].style.cssText = "color:blue;"
navItems[5].style.cssText = "color:blue;"

let navTag = document.querySelector("nav"); //Parent node

let newAElement1  = document.createElement("a"); //Create a node
newAElement1.innerHTML = "HOVER ---->"; //Setting the content inbetween <a> tags
navTag.prepend(newAElement1); //insert node before first child

let newAElement2  = document.createElement("a"); //Create a node
newAElement2.innerHTML = "<---- HOVER "; //Setting the content inbetween <a> tags

navTag.appendChild(newAElement2);



// 1st (unique) event listener: mousemove
for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("mousemove", () => {
    navItems[i].style.background = "#e6f2ff";
    navItems[i].style.color = "darkblue";
    navItems[i].style.textDecoration = "none";
  });
}

// 2nd (unique) event listener: mouseleave
for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("mouseleave", () => {
    navItems[i].style.background = "";
    navItems[i].style.color = "blue";
  });
}

// 3rd (unique) event listener: dblclick
ctaTextButtonClass.addEventListener("dblclick", () => {
  ctaTextButtonClass.style.background = "#e6f2ff";
  ctaTextButtonClass.style.color = "darkblue";
});


for (let i = 0; i < topContentH4Elements.length; i++) {
  topContentH4Elements[i].addEventListener("dblclick" , () => {
    topContentH4Elements[i].style.color = "blue";
  })
}

// 4th (unique) event listener: dblclick
for (let i = 0; i < bottomContentH4Elements.length; i++) {
  bottomContentH4Elements[i].addEventListener("copy" , () => {
    bottomContentH4Elements[i].style.color = "red";
  })
}

// 4th (unique) event listener: mousedown
//mousedown event listener (correct)
for (let i = 0; i < topContentPElements.length; i++) {
  topContentPElements[i].addEventListener("mousedown" , () => {
    topContentPElements[i].style.color = "blue";
  })
}

// //keypress event listener (incorrect)
// for (let i = 0; i < topContentPElements.length; i++) {
//   topContentPElements[i].addEventListener("keypress" , () => {
//     topContentPElements[i].style.color = "blue";
//   })
// }

// 5th (unique) event listener: keypress
//keypress event listener (correct)
for (let i = 0; i < topContentPElements.length; i++) {
  document.addEventListener("keypress" , () => {
    topContentPElements[i].style.color = "red";
  })
}

// 6th (unique) event listener: resize
for (let i = 0; i < bottomContentPElements.length; i++) {
  window.addEventListener("resize" , () => {
    bottomContentPElements[i].style.color = "lightgreen";
  })
}

// 7th (unique) event listener: wheel
window.addEventListener("wheel", () => {
  ctaTextH1Class.style.background = "#e6f2ff";
  ctaTextH1Class.style.color = "magenta";
});

ctaTextH1Class.addEventListener("click", () => {
  ctaTextH1Class.style.background = "none ";
  ctaTextH1Class.style.color = "black ";
});

// 8th (unique) event listener: keydown
document.addEventListener("keydown", () => {
  ctaImageId.style.width = "25%";
  ctaImageId.style.height = "25%";
});

//9th (unique) event listener: keyup
document.addEventListener("keyup", () => {
  ctaImageId.style.width = "100%";
  ctaImageId.style.height = "100%";
});

//10th (unique) event listener: mouseenter
contactClassH4Element[0].addEventListener("mouseenter", () => {
  contactClassH4Element[0].style.fontSize = "200%";
});

contactClassH4Element[0].addEventListener("mouseleave", () => {
  contactClassH4Element[0].style.fontSize = "100%";
});

// ctaTextH1Class.style.animationName = "greenloop";
// ctaTextH1Class.style.animationDuration = "2s";
// ctaTextH1Class.style.animationIterationCount = "infinite";

// let textContentClass = querySelectorAll(".text-content");

// topContentH4Elements[0].addEventListener("keydown",  () => {
//   topContentH4Elements[0].style.color = "red";
// });


