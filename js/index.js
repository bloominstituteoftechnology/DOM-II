

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
let logo = document.getElementById('logo-img');
console.log(logo)
logo.setAttribute('src', siteContent["nav"]["img-src"])
let menu = document.getElementsByTagName["nav"];
menuNav = document.querySelectorAll('a')
// console.log(menuNav.length)
menuNav[0].innerHTML = siteContent['nav']['nav-item-1']
menuNav[1].innerHTML = siteContent['nav']['nav-item-2']
menuNav[2].innerHTML = siteContent['nav']['nav-item-3']
menuNav[3].innerHTML = siteContent['nav']['nav-item-4']
menuNav[4].innerHTML = siteContent['nav']['nav-item-5']
menuNav[5].innerHTML = siteContent['nav']['nav-item-6']



let ctaText = document.querySelector(".cta-text h1");
ctaText.innerHTML = (siteContent["cta"]["h1"]);

let ctaTxt1 = document.getElementsByClassName("cta-text")[0];

ctaTxt1.getElementsByTagName("h1")[0].innerHTML = siteContent["cta"]["h1"];
ctaTxt1.getElementsByTagName("button")[0].innerHTML = siteContent["cta"]["button"];

let midImg = document.getElementById("cta-img");
midImg.setAttribute('src', siteContent["cta"]["img-src"])

let rightImg = document.getElementById("middle-img");
rightImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])



// 
let textPtag = document.querySelectorAll("p");//top-content
let textH4tag = document.querySelectorAll("h4");
console.log(textH4tag)

 textH4tag[0].innerHTML = siteContent["main-content"]["features-h4"];
 textPtag[0].innerHTML = siteContent["main-content"]["features-content"];

//  let aboutContent = document.querySelector(".top-content .text-content"); 
//   aboutContent.innerHTML = ("p", siteContent["main-content"]["about-content"])


 textH4tag[1].innerHTML = siteContent["main-content"]["about-h4"];
 textPtag[1].innerHTML = siteContent["main-content"]["about-content"];
 textH4tag[2].innerHTML = siteContent["main-content"]["services-h4"];
 textPtag[2].innerHTML = siteContent["main-content"]["services-content"];
 textH4tag[3].innerHTML = siteContent["main-content"]["product-h4"];
 textPtag[3].innerHTML = siteContent["main-content"]["product-content"];
 textH4tag[4].innerHTML = siteContent["main-content"]["vision-h4"];

 textPtag[4].innerHTML = siteContent["main-content"]["vision-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


let contact = document.getElementsByClassName("contact")[0];
contact.getElementsByTagName("h4")[0].innerHTML = siteContent["contact"]["contact-h4"]
contact.getElementsByTagName("p")[0].innerHTML = siteContent["contact"]["address"]
contact.getElementsByTagName("p")[1].innerHTML = siteContent["contact"]["phone"]
contact.getElementsByTagName("p")[2].innerHTML = siteContent["contact"]["email"]


let footer = document.querySelector("footer");
footer.getElementsByTagName("p")[0].innerHTML = siteContent["footer"]["copyright"];

// Add New Content
// Change navigation text color
menuNav.forEach((link,i) => {
  link.style.color = "red";
})

// Add two items to navigation
menuNav = document.getElementsByTagName("nav")[0];
let createNewNode = (name) => {
  let newNode = document.createElement("a");
  newNode.innerHTML = name;
  return newNode;
}
menuNav.prepend(createNewNode("Nav 1"));
menuNav.append(createNewNode("Nav 2"));

const customNav = document.querySelector('.customNav')
//console.log(customNav)
customNav.addEventListener('mouseover', (event) => {event.target.style.color="yellow"
// setTimeout=>{event.target.style.color = "";
// }, 500).false); 
setTimeout(function() {
  event.target.style.color = "";
  }, 5000);
},false);

customNav.addEventListener('mouseover', (event) => {event.target.style.backgroundColor="blue"
setTimeout(function() {
  event.target.style.backgroundColor = "";
  }, 5000);
},false);

const img = document.querySelector('.middle-img')
img.addEventListener('mouseover', (event) => {event.target.style.border="10px solid blue"
setTimeout(function() {
  event.target.style.border = "";
  }, 5000);
},false);
// customNav.setTimeout((event) => {
//   event.target.style.color = "";
// }, 500);
// }, false);