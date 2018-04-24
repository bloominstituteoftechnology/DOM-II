const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "Contact",
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

// // Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// DOM I Assignment 

// ## Task 1: Create selectors to point your data into elements
//  * Create selectors by using any of the DOM element's methods
//  * Note that IDs have been used on all images.  Use the IDs to update src path content

// let navItems = document.querySelectorAll('nav a');

// navItems.forEach(function(element){
//   navItems.setAttribute("innerHTML" ['nav'][element])
// })

let navItems = document.getElementsByTagName("a");
navItems[0].innerHTML = (siteContent["nav"]["nav-item-1"])
navItems[1].innerHTML = (siteContent["nav"]["nav-item-2"])
navItems[2].innerHTML = (siteContent["nav"]["nav-item-3"])
navItems[3].innerHTML = (siteContent["nav"]["nav-item-4"])
navItems[4].innerHTML = (siteContent["nav"]["nav-item-5"])


//new nav item and make font colors greens
let navContainer = document.querySelector('nav');
let newNavAnchor= document.createElement('a');

newNavAnchor.innerHTML = "Lambda";
navContainer.prepend(newNavAnchor);

navItems[0].style.color = 'green';
navItems[1].style.color = 'green';
navItems[2].style.color = 'green';
navItems[3].style.color = 'green';
navItems[4].style.color = 'green';
navItems[5].style.color = 'green'; 


// 

let mainCTA = document.querySelector('h1');
mainCTA.innerHTML = (siteContent['cta']['h1']);

let ctaButton = document.querySelector('button');
ctaButton.innerHTML = (siteContent['cta']['button']);

let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);


let docH4 = document.getElementsByTagName('h4');

docH4[0].innerHTML = (siteContent['main-content']['features-h4']);
docH4[1].innerHTML = (siteContent['main-content']['about-h4']);
docH4[2].innerHTML = (siteContent['main-content']['services-h4']);
docH4[2].innerHTML = (siteContent['main-content']['product-h4']);
docH4[3].innerHTML = (siteContent['main-content']['vision-h4']);



let midImage = document.getElementById('middle-img');
midImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

let mainContentP = document.getElementsByTagName('p');
mainContentP[0].innerHTML = (siteContent['main-content']['features-content']);
mainContentP[1].innerHTML = (siteContent['main-content']['about-content']);

mainContentP[2].innerHTML = (siteContent['main-content']['product-content']);
mainContentP[3].innerHTML = (siteContent['main-content']['vision-content']);

//footer

docH4[5].innerHTML = (siteContent['contact']['contact-h4']);

mainContentP[5].innerHTML = (siteContent['contact']['address']);
mainContentP[6].innerHTML = (siteContent['contact']['phone']);
mainContentP[7].innerHTML = (siteContent['contact']['email']);

//copyright

mainContentP[8].innerHTML = (siteContent['footer']['copyright']);

// DOM II Assignment

// * Create 10 unique event listeners based on the reference file in the objective.  

// 1. changes cta font to red on button click
let grabButton = document.querySelector('button');

let grabMainCTA = document.querySelector('.cta-text h1');

grabButton.addEventListener('click', () => {
  grabMainCTA.style.color = 'red';
});


// 2. on mousing over cta image, cta image disapears cta copy is reduced to 10px 
let grabCTAimage = document.querySelector('#cta-img');

grabCTAimage.addEventListener('mouseenter', () => {
  grabCTAimage.style.display = 'none';
  grabMainCTA.style.fontSize = '10px';
})

// 3. cta copy is set to 200px on mousing over and out cta copy 
grabMainCTA.addEventListener('mouseleave', () => {
  grabMainCTA.style.fontSize = '200px';
})

// 4. cta copy is set to 10px when window object is resized 
window.addEventListener('resize', () => {
  grabMainCTA.style.fontSize = '9px';
})

 
// 5. whenever a keyboard key is pressed an alert appears showing what key was pressed

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  alert('key: ' + keyName);
});


// 6. if you place the mouse over the middle image and try to right click a message will be displayed in an alert.

let grabMiddelImg = document.querySelector('#middle-img');

grabMiddelImg.addEventListener('contextmenu', () => {
  alert(`Don't even think about lifting this image!`);
})


// 7.  if you copy anything from page and then try to paste it, the copied content will not appear, rather , a special message will appear instead.

document.addEventListener('copy', function(e){
  e.clipboardData.setData('text/plain', 'Hello, Mr. Chris Honda');
  e.clipboardData.setData('text/html', '<b>Hello, Mr. Chris Honda!</b>');
  e.preventDefault(); // We want our data, not data from any selection, to be written to the clipboard
});


// 8. On initial page load  an alert will appear

window.addEventListener('load', () => {
  alert('Prepare to be amazed by another Lambda School project!')
})

// 9. on window scroll background color of container will change

let pageContainer = document.querySelector('.container')

window.addEventListener('scroll', () => {
  pageContainer.style.backgroundColor = "violet"
});


// 10. Upon double clicking anywhere in the document the background will turn white

document.addEventListener('dblclick', () => {
    pageContainer.style.backgroundColor = "white";
});

// * Using the 10 unique events, find ways to update the DOM in creative ways.  For example you could change colors, animate objects, remove objects, etc.


