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
    "count": 0,
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.querySelector("#logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//---Stretch: Button (Project Dom 1)
// We'll hide a lot of the page until the button is clicked.
const bottomHalf = document.querySelectorAll(".main-content, .contact");
bottomHalf.forEach(element => element.style.display = "none");
// Now, to add an eventListener to the button and function that runs when button is clicked
const button = document.querySelector(".cta-text button");
button.addEventListener("click", function() {
  let displayCheck = document.querySelector(".main-content").style.display;
  if (displayCheck === "none") {
    bottomHalf.forEach(element => element.style.display = "block");
  } else {
    bottomHalf.forEach(element => element.style.display = "none");
  }
  siteContent["contact"]["count"]++;
  document.querySelector("#buttonCounter").innerHTML = `The button has been clicked ${siteContent["contact"]["count"]} time${siteContent["contact"]["count"] > 1 ? `s`:``}.`;
})
//---------End Stretch: Button

//---Event Listeners (Project Dom 2)
// Simple (annoying) modal when your right click anywhere in the viewport
document.addEventListener("contextmenu", (e) => {
  alert('I see you right-clickin\'');
  e.preventDefault(); // Prevents Context Menu from Opening
});
// Change the CTA image to a picture of Patrick the Starfish
const ctaLogo = document.querySelector("section img");
ctaLogo.addEventListener("mouseenter", () => {
  ctaLogo.src = 'img/header-alt.jpg';
});
ctaLogo.addEventListener("mouseleave", () => {
  ctaLogo.src = 'img/header-img.png';
});
// Learned below from Wes Bos' Javascript 30
document.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}`);
  if (!audio) return; //If the keydown doesn't corresponed to an assigned keycode, immediately end the function
  audio.currentTime = 0; //If an audio file is already playing, go to the beginning of it.
  audio.play();
})
// Double click the Copyright notice for insight into my mental status
const footer = document.querySelector("footer");
footer.addEventListener("dblclick", () => {
  const original = siteContent["footer"]["copyright"];
  const modified = "Ronald is running out of bloody ideas.";
  if (footer.innerText === original) {
    footer.innerText = modified;
  } else {
    footer.innerText = original;
  }
});
// Keep your mouse over the Contact header
const contactHead = document.querySelector(".contact h4");
let fontSize = 14;
contactHead.addEventListener("mouseover", () => {
  let incrementSize = setInterval(() => {
    if (fontSize >= 64) {
      fontSize = 64;
      clearInterval(incrementSize);
    } else {
      fontSize++;
    }
    contactHead.style["font-size"] = `${fontSize}px`;
  }, 100);
});
// Scroll Wheel Fun is in the Header Section Below
// A little message for copycats. Look in the CTA Section
// ------
// Change background color of container upon resize
// ---A joyous result of collobration between
// --- Calvin Tirrell, Herbert Hodgeson, and me
const cont = document.querySelector(".container");
window.addEventListener("resize", () => {
  cont.style["background-color"] = "lightgrey";
});
//---------End vent Listeners (Project Dom 2)

//---Header 
// Insert Nav Items into Nav Bar
const nav = document.querySelector("nav");
let navItem = document.querySelectorAll("nav a");
navItem.forEach((element, index) => {
  element.innerHTML = siteContent["nav"][`nav-item-${index + 1}`];
});
// Adding Two <a> Tags to the Nav-Bar. Some Functions:
const newElem = element => document.createElement(`${element}`);
const newText = text => document.createTextNode(`${text}`);
// Now the actual creation and slapping them into the DOM
// Front
const frontElem = newElem(`a`);
frontElem.appendChild(newText(`Front`));
nav.prepend(frontElem);
// Back
const backElem = newElem(`a`);
backElem.appendChild(newText('Back'));
nav.appendChild(backElem);
// Scroll Wheel Fun (DOM 2 Project)
navItem = document.querySelectorAll("nav a");
let wheelIndex = 0;
document.addEventListener("wheel", () => {
  wheelIndex++;
  if (wheelIndex >= 8) {
    wheelIndex = 0;
  }
  navItem[wheelIndex].classList.add("bordered");
  if (wheelIndex === 0) {
    navItem[7].classList.remove("bordered");
  } else {
    navItem[wheelIndex - 1].classList.remove("bordered");
  }
});
//---------End Header  

//---CTA
const ctaHeading = document.querySelectorAll(".cta-text")
ctaHeading[0].firstElementChild.innerHTML = siteContent.cta["h1"];
ctaHeading[0].lastElementChild.innerHTML = siteContent.cta["button"];

// const ctaLogo = document.querySelector("section img");
// This variable is initialized in the Event Listener Section
ctaLogo.src = 'img/header-img.png';

// Button Counter
const buttonCounter = newElem("p");
buttonCounter.appendChild(newText(`The button yearns for your click.`));
buttonCounter.setAttribute("id","buttonCounter");
buttonCounter.style["font-size"] = "14px";
buttonCounter.style["margin-top"] = "16px";
ctaHeading[0].appendChild(buttonCounter);
// Copy Message
// A little message for copycats. 
document.addEventListener("copy", function() {
  console.log('copying');
  const copyMessage = newElem("p");
  copyMessage.appendChild(newText("Copy with care! :)"));
  copyMessage.style["font-size"] = "24px";
  copyMessage.style["margin-top"] = "16px";
  ctaHeading[0].appendChild(copyMessage);
})
//---------End CTA 

//---Main-Content 
const topContent = document.querySelector(".top-content");
topContent.children[0].firstElementChild.innerHTML = siteContent["main-content"]["features-h4"];
topContent.children[0].lastElementChild.innerHTML = siteContent["main-content"]["features-content"];
topContent.children[1].firstElementChild.innerHTML = siteContent["main-content"]["about-h4"];
topContent.children[1].lastElementChild.innerHTML = siteContent["main-content"]["about-content"];

const middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

const bottomContent = document.querySelector(".bottom-content")
bottomContent.children[0].firstElementChild.innerHTML = siteContent["main-content"]["services-h4"];
bottomContent.children[0].lastElementChild.innerHTML = siteContent["main-content"]["services-content"];
bottomContent.children[1].firstElementChild.innerHTML = siteContent["main-content"]["product-h4"];
bottomContent.children[1].lastElementChild.innerHTML = siteContent["main-content"]["product-content"];
bottomContent.children[2].firstElementChild.innerHTML = siteContent["main-content"]["vision-h4"];
bottomContent.children[2].lastElementChild.innerHTML = siteContent["main-content"]["vision-content"];
//---------End Main-Content 

//---Contact 
// const contactHead = document.querySelector(".contact h4");
// Above var declared in Event Listener Section.
contactHead.innerHTML = siteContent["contact"]["contact-h4"];

const contactBody = document.querySelectorAll(".contact p");
contactBody[0].innerHTML = siteContent["contact"]["address"];
contactBody[1].innerHTML = siteContent["contact"]["phone"];
contactBody[2].innerHTML = siteContent["contact"]["email"];
//---------End Contact 

//---Footer 
// const footer = document.querySelector("footer");
// Above var declared in Event Listener Section.
footer.innerText = siteContent["footer"]["copyright"];
//---------End Footer 
