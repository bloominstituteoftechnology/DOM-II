/* ========================

  Old DOM I Lesson stuff

=========================== */

const siteContent = {
  'nav': {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  'cta': {
    'h1': 'DOM Is Awesome',
    'button': 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4':'Features',
    'features-content': 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4':'About',
    'about-content': 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4':'Services',
    'services-content': 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4':'Product',
    'product-content': 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4':'Vision',
    'vision-content': 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  'contact': {
    'contact-h4' : 'Contact',
    'address' : '123 Way 456 Street Somewhere, USA',
    'phone' : '1 (888) 888-8888',
    'email' : 'sales@greatidea.io',
  },
  'footer': {
    'copyright' : 'Copyright Great Idea! 2018'
  },
};

// Example: Update the img src for the logo
const logoElement = document.getElementById('logo-img');
logoElement.setAttribute('src', siteContent['nav']['img-src']);

// Task 1: Create selectors to point your data into elements
let navLinkElements = document.querySelectorAll('nav a');

const ctaTextElements = document.querySelector('.cta-text');
const ctaH1Element = ctaTextElements.getElementsByTagName('h1')[0];
const ctaButtonElement = ctaTextElements.getElementsByTagName('button')[0];
const ctaImgElement = document.getElementById('cta-img');

const sectionHeaderElements = document.querySelectorAll('.text-content h4');
const sectionTextElements = document.querySelectorAll('.text-content p');
const mainImg = document.getElementById('middle-img');

const contactElements = document.getElementsByClassName('contact')[0].children;

const footer = document.querySelector('footer p');


// Task 2: Update the HTML with the JSON data
for (let i = 0; i < navLinkElements.length; i++) {
  navLinkElements[i].innerHTML = siteContent['nav'][`nav-item-${i+1}`];
}

ctaH1Element.innerHTML = siteContent['cta']['h1'].replace(/ /g, '<br>');
ctaButtonElement.innerHTML = siteContent['cta']['button'];
ctaImgElement.setAttribute('src', siteContent['cta']['img-src']);

const mainContent = Object.entries(siteContent['main-content']);
const headers = mainContent.filter(prop => prop[0].indexOf('-h4') > -1);
const contents = mainContent.filter(prop => prop[0].indexOf('-content') > -1);

for (let i = 0; i < headers.length; i++) {
  sectionHeaderElements[i].innerHTML = headers[i][1];
  sectionTextElements[i].innerHTML = contents[i][1];
}

mainImg.setAttribute('src', 'img/mid-page-accent.jpg');

for (let i = 0; i < contactElements.length; i++) {
  contactElements[i].innerHTML = Object.entries(siteContent['contact'])[i][1];
}

footer.innerHTML = siteContent['footer']['copyright'];

// Task 3: Add new content
for (let i = 0; i < navLinkElements.length; i++) {
  navLinkElements[i].style.color = 'green';
}

const navElements = document.getElementsByTagName('nav')[0];
const firstNavLinkElement = document.createElement('a');
const lastNavLinkElement = document.createElement('a');
firstNavLinkElement.innerHTML = 'First';
firstNavLinkElement.style.color = 'green';
firstNavLinkElement.href = '#';
lastNavLinkElement.innerHTML = 'Last';
lastNavLinkElement.style.color = 'green';
lastNavLinkElement.href = '#';

navElements.prepend(firstNavLinkElement)
navElements.appendChild(lastNavLinkElement)

/* ========================

  New DOM II Lesson stuff

=========================== */

// 1, 2, 3 of 10
navLinkElements = document.querySelectorAll('nav a');
Array.from(navLinkElements).map(function(navLink){
  navLink.addEventListener('mouseover', function(e) {
    e.target.style.color = 'coral';
  });

  navLink.addEventListener('mouseout', function(e) {
    e.target.style.color = 'cadetblue';
  });

  navLink.addEventListener('click', function(e) {
    e.target.style.color = 'firebrick';
  });
});

// 4 of 10
window.addEventListener('keydown', e => {
  const keyName = e.key;
  ctaButtonElement.innerHTML = `Why did you type ${keyName}?`;
});

// 5, 6 of 10
ctaImgElement.addEventListener('dragstart', e => {
  e.target.style.opacity = .25;
});
ctaImgElement.addEventListener('dragend', e => {
  e.target.style.opacity = 1;
});
ctaImgElement.addEventListener('dragend', e => {
  e.target.style.opacity = 1;
});

// 7, 8, 9, 10  of 10
const containerElement = document.getElementsByClassName('container')[0];
const ctaElement = document.getElementsByClassName('cta')[0];
const mainElement = document.getElementsByClassName('main-content')[0];
const contactElement = document.getElementsByClassName('contact')[0];
const pageElements = [containerElement, ctaElement, mainElement, contactElement];
const transitionStyle = 'all .4s ease-out';

for (let i = 0; i < pageElements.length; i++) {
  pageElements[i].style.opacity = 0;
  pageElements[i].style.transition = transitionStyle;
}

containerElement.style.transform = 'translateX(1em)';
ctaElement.style.transform = 'scale(.92)';
mainElement.style.transform = 'translateY(1em)';

window.addEventListener('load', function(e) {
  const timeoutID = window.setTimeout(function() {
    containerElement.style.opacity = 1;
    containerElement.style.transform = 'translateX(0)';
  }, 500);
});

containerElement.addEventListener('transitionend', function(e) {
  ctaElement.style.opacity = 1;
  ctaElement.style.transform = 'scale(1)';
}, false);

ctaElement.addEventListener('transitionend', function(e) {
  mainElement.style.opacity = 1;
  mainElement.style.transform = 'translateY(0)';
}, false);

mainElement.addEventListener('transitionend', function(e) {
  contactElement.style.opacity = 1;
}, false);















