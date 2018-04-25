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
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

// Pass in content [], elements to update []
// if elements to update length is at least as long as content, proceed, othersie return false
const updateHTML = function (content, elements) {
  if (elements.length >= content.length) {
    content.forEach((x, i) => {
      elements[i].innerHTML = x;
    });
  }
  return false;
};

const createArray = function (obj, selector) {
  let result = [];
  for (let i in obj) {
    if (i.includes(selector)) {
      result.push(obj[i]);
    }
  }
  return result;
};

const createNewElement = function (nodeType, innerText, className) {
  const newNode = document.createElement(nodeType);
  newNode.innerHTML = innerText;
  if (className) newNode.className = className;
  return newNode;
};

// Create selectors
const navLinks = document.querySelectorAll('nav a'),
  ctaHeader = document.querySelectorAll('.cta-text h1'),
  ctaButton = document.querySelectorAll('.cta-text button'),
  mainContentHeaders = document.querySelectorAll('.main-content h4'),
  mainContent = document.querySelectorAll('.main-content p'),
  contactEle = document.querySelectorAll('.contact > *'),
  footerEle = document.querySelectorAll('footer > *'),

  nav = document.querySelector('nav'),

  headerLogo = document.getElementById('logo-img'), // image
  ctaImg = document.getElementById('cta-img'), // image
  mainContentImg = document.getElementById('middle-img'); // image

// Update HTML with JSON data
updateHTML(createArray(siteContent['nav'], 'nav-item'), navLinks);
updateHTML(createArray(siteContent['cta'], 'h1'), ctaHeader);
updateHTML(createArray(siteContent['cta'], 'button'), ctaButton);
updateHTML(createArray(siteContent['main-content'], 'h4'), mainContentHeaders);
updateHTML(createArray(siteContent['main-content'], 'content'), mainContent);
updateHTML(createArray(siteContent['contact'], ''), contactEle);
updateHTML(createArray(siteContent['footer'], ''), footerEle);

headerLogo.src = siteContent['nav']['img-src'];
ctaImg.src = siteContent['cta']['img-src'];
mainContentImg.src = siteContent['main-content']['middle-img-src'];


// Playing around with drag and drop events
let textContents = document.querySelectorAll('.text-content'),
    dragSource;

textContents.forEach(x => {
  // Add draggable attribute to text-content divs
  x.setAttribute('draggable', 'true');

  // Event: Drag Start
  x.addEventListener('dragstart', (event) => {
    console.log('Drag start');
    event.target.classList.add('active-drag-element');
    event.dataTransfer.setData('text', event.target.innerHTML); // Define drag data
    dragSource = event.srcElement; // Save source data
  });

  // Event: Drag End
  x.addEventListener('dragend', (event) => {
    console.log('Drag end');
    event.target.classList.remove('active-drag-element');
    event.dataTransfer.clearData(); // Remove drag data
  });

  // Event: Drag Over -- turns element into a drop zone
  x.addEventListener('dragover', (event) => {
    console.log('Drag over');
    event.preventDefault(); // Necessary to allow drop
  });

  // Event: Drop -- turns element into a drop zone
  x.addEventListener('drop', (event) => {
    console.log('Dropped');
    event.preventDefault(); // Necessary to allow drop
    dragSource.innerHTML = event.currentTarget.innerHTML; // Swap innerHTML for source and destination
    event.currentTarget.innerHTML = event.dataTransfer.getData('text');
  });
});

// Event: Double Click -- turns element into an editable element
textContents.forEach(x => {
  x.addEventListener('dblclick', (event) => {
    console.log('Double click');
    
    let srcEle = event.target,
        editEle = createNewElement('textarea', srcEle.innerHTML, 'edit-content');
    
    event.target.parentNode.replaceChild(editEle, srcEle);
    event.currentTarget.setAttribute('draggable', 'false');
  });
});

// Event: Click
window.addEventListener('click', (event) => {
  console.log('click');

  // Find any editable elements and convert back to static element
  if(event.target.className !== 'edit-content'){
    let editContentEle = document.querySelectorAll('.edit-content');

    editContentEle.forEach(x => {
      let staticEle = createNewElement('p', x.value, '');
      x.parentNode.replaceChild(staticEle, x);
      
      textContents.forEach(x => {
        x.setAttribute('draggable', 'true');
      });
    });
  }

  // If clicking outside context menu, close it
  if(!event.target.classList.contains('context-menu-link')){
    let contextMenu = document.querySelector('.context-menu');
    contextMenu.classList.remove('active');
  }
});

// Event: Context Menu
navLinks.forEach(x => {
  x.addEventListener('contextmenu', (event) => {
    console.log('Context menu');
    event.preventDefault();

    let contextMenu = document.querySelector('.context-menu');
    contextMenu.style.top = `${event.pageY}px`;
    contextMenu.style.left = `${event.pageX}px`;
    contextMenu.classList.add('active');
  });
});