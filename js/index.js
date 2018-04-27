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

let logoImg = document.getElementById("logo-img");
logoImg.setAttribute("src", "img/logo.png");

// Event Listener: Double Click

logoImg.addEventListener('dblclick', () => {
  alert("Sorry, this is not a link!")
}); 

// IMAGES

let headerImage = document.getElementById("cta-img");
headerImage.setAttribute("src", "img/header-img.png");

middleImage = document.getElementById("middle-img");
middleImage.setAttribute("src", "img/mid-page-accent.jpg");

// Event Listener: Double Click

headerImage.addEventListener('dblclick', () => {
  alert("Sorry, this is not a link!")
});

middleImage.addEventListener('dblclick', () => {
  alert("Sorry, this is not a link!")
});

// NAVIGATION

let services = document.getElementsByTagName("a")[0];
services.innerHTML = "Services";

product = document.getElementsByTagName("a")[1];
product.innerHTML = "Product";

vision = document.getElementsByTagName("a")[2];
vision.innerHTML = "Vision";

features = document.getElementsByTagName("a")[3];
features.innerHTML = "Features";

about = document.getElementsByTagName("a")[4];
about.innerHTML = "About"

contact = document.getElementsByTagName("a")[5];
contact.innerHTML = "Contact";

// Event Listener: Mouseover

services.addEventListener('mouseover', () => {
  services.style.backgroundColor = "orange";
}); 

product.addEventListener('mouseover', () => {
  product.style.backgroundColor = "orange";
}); 

vision.addEventListener('mouseover', () => {
  vision.style.backgroundColor = "yellow";
}); 

features.addEventListener('mouseover', () => {
  features.style.backgroundColor = "green";
}); 

about.addEventListener('mouseover', () => {
  about.style.backgroundColor = "blue";
}); 

contact.addEventListener('mouseover', () => {
  contact.style.backgroundColor = "violet";
}); 


// CTA

let ctaText = document.getElementsByTagName("h1")[0];
ctaText.innerHTML = "DOM Is Awesome";

button = document.getElementsByTagName("button")[0];
button.innerHTML = "Get Started";

// Event Listener: Double Click

ctaText.addEventListener('dblclick', () => {
  alert("Sorry, this is not a link!")
});

// Event Listener: Click

button.addEventListener('click', () => {
  button.style.height = '100px';
  button.style.backgroundColor = "orange";
}); 

// MAIN CONTENT

let featuresH4 = document.getElementsByTagName('h4')[0];
featuresH4.innerHTML = "Features";

featureContent = document.getElementsByTagName('p')[0];
featureContent.innerHTML = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let aboutH4 = document.getElementsByTagName('h4')[1];
aboutH4.innerHTML = "About";

aboutContent = document.getElementsByTagName('p')[1];
aboutContent.innerHTML = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let servicesH4 = document.getElementsByTagName('h4')[2];
servicesH4.innerHTML = "Services";

servicesContent = document.getElementsByTagName('p')[2];
servicesContent.innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let productH4 = document.getElementsByTagName('h4')[3];
productH4.innerHTML = "Product"

productContent = document.getElementsByTagName('p')[3];
productContent.innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let visionH4 = document.getElementsByTagName('h4')[4];
visionH4.innerHTML = "Vision";

visionContent = document.getElementsByTagName('p')[4];
visionContent.innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// Event Listener: Mouse Over

featuresH4.addEventListener('mouseover', () => {
  featuresH4.style.backgroundColor = "red";
});

featureContent.addEventListener('mouseover', () => {
  featureContent.style.backgroundColor = "red";
});

aboutH4.addEventListener('mouseover', () => {
  aboutH4.style.backgroundColor = "orange";
});

aboutContent.addEventListener('mouseover', () => {
  aboutContent.style.backgroundColor = "orange";
});

servicesH4.addEventListener('mouseover', () => {
  servicesH4.style.backgroundColor = "yellow";
});

servicesContent.addEventListener('mouseover', () => {
  servicesContent.style.backgroundColor = "yellow";
});

productH4.addEventListener('mouseover', () => {
  productH4.style.backgroundColor = "green";
});

productContent.addEventListener('mouseover', () => {
  productContent.style.backgroundColor = "green";
});

visionH4.addEventListener('mouseover', () => {
  visionH4.style.backgroundColor = "blue";
});

visionContent.addEventListener('mouseover', () => {
  visionContent.style.backgroundColor = "blue";
});

// CONTACT

let contactH4 = document.getElementsByTagName('h4')[5];
contactH4.innerHTML = "Contact";

address = document.getElementsByTagName('p')[5];
address.innerHTML = "123 Way 456 Street Somewhere, USA";

phone = document.getElementsByTagName('p')[6];
phone.innerHTML = "1 (888) 888-8888";

email = document.getElementsByTagName('p')[7];
email.innerHTML = "sales@greatidea.io";

// FOOTER

let footer = document.getElementsByTagName('p')[8];
footer.innerHTML = "Copyright Great Idea! 2018"