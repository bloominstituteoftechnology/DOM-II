const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "Contact",
    "nav-item-6": "About",
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
logo.setAttribute('src', siteContent["nav"]["img-src"])
//EventListener 1
logo.addEventListener('click', () => {
  alert("It's great you're here!")
});


//nav bar
let navBar = document.querySelectorAll("nav")[0];

//nav links
let nav = siteContent.nav;
let keys = Object.keys(nav);
let values = Object.values(nav);

for (let i = 0; i < keys.length; i++) {
  if (keys[i].includes("nav")) {
    navBar.children[i].innerHTML = values[i];
    navBar.children[i].className = keys[i];
  }
}

//prepend
let newLink = document.createElement("a");
let textNode = document.createTextNode("Home");
newLink.appendChild(textNode);
navBar.prepend(newLink);

//append
let newLink2 = document.createElement("a");
let textNode2 = document.createTextNode("Sign In");
newLink2.appendChild(textNode2);
navBar.appendChild(newLink2);

//color change
let navLinks = document.querySelectorAll("a");
navLinks.forEach((i) => {i.style.color = "green"});

//EventListener 2



//----------CTA----------//
let ctaH1 = document.querySelector("cta-text h1");
ctaH1.innerText = siteContent.cta.h1.split(' ').join('<br>');

// // make CTA text have new line for each word
// ctaTextH1.innerHTML = siteContent["cta"]["h1"].split(' ').join('<br>');
// ctaTextButton.innerHTML = siteContent["cta"]["button"];
// ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

let ctaButton = document.getElementsByTagName("button");
ctaButton[0].innerText = siteContent.cta.button;

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent.cta['img-src']);

let midPageImg = document.getElementById("middle-img");
midPageImg.setAttribute('src', siteContent['main-content']["middle-img-src"]);
//Event Listener
let imgDisapear = document.getElementById("middle-img");
imgDisapear.addEventListener('mouseout', () => {
  imgDisapear.style.display = 'none';
});


// h4 elements
let hFourElements = document.getElementsByTagName('h4');
hFourElements[0].innerHTML = siteContent['main-content']['features-h4'];
hFourElements[1].innerHTML = siteContent['main-content']['about-h4'];
hFourElements[2].innerHTML = siteContent['main-content']['services-h4'];
hFourElements[3].innerHTML = siteContent['main-content']['product-h4'];
hFourElements[4].innerHTML = siteContent['main-content']['vision-h4'];


// p elements
let pElements = document.getElementsByTagName("p");
pElements[0].innerHTML = siteContent['main-content']['features-content'];
pElements[1].innerHTML = siteContent['main-content']['about-content'];
pElements[2].innerHTML = siteContent['main-content']['services-content'];
pElements[3].innerHTML = siteContent['main-content']['product-content'];
pElements[4].innerHTML = siteContent['main-content']['vision-content'];
pElements[5].innerHTML = siteContent.contact.address;
pElements[6].innerHTML = siteContent.contact.phone;
pElements[7].innerHTML = siteContent.contact.email;
pElements[8].innerHTML = siteContent.footer.copyright; 









