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
let logo = document.querySelector(".logo");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navElements = document.querySelectorAll("a");
navElements[0].innerHTML = siteContent["nav"]["nav-item-1"];
navElements[1].innerHTML = siteContent["nav"]["nav-item-2"];
navElements[2].innerHTML = siteContent["nav"]["nav-item-3"];
navElements[3].innerHTML = siteContent["nav"]["nav-item-4"];
navElements[4].innerHTML = siteContent["nav"]["nav-item-5"];
navElements[5].innerHTML = siteContent["nav"]["nav-item-6"];

for(let i = 0; i < navElements.length; i++) {
  navElements[i].style.color = 'green';
}

let nav = document.querySelector("nav");

let navLogIn = document.createElement("a");
let navLogInText = document.createTextNode("Log In");
navLogIn.style.color = 'green';
navLogIn.appendChild(navLogInText);
nav.appendChild(navLogIn);

let navSignUp = document.createElement("a");
let navSignUpText = document.createTextNode("Sign Up");
navSignUp.style.color = 'green';
navSignUp.appendChild(navSignUpText);
nav.appendChild(navSignUp);

let ctaImg = document.querySelector(".cta img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let ctaH1 = document.querySelector(".cta h1");
ctaH1.innerHTML = siteContent["cta"]["h1"];

let ctaBtn = document.querySelector(".cta button");
ctaBtn.innerHTML = siteContent["cta"]["button"];

let h4Elements = document.querySelectorAll('h4');
h4Elements[0].innerHTML = siteContent["main-content"]["features-h4"];
h4Elements[1].innerHTML = siteContent["main-content"]["about-h4"];
h4Elements[2].innerHTML = siteContent["main-content"]["services-h4"];
h4Elements[3].innerHTML = siteContent["main-content"]["product-h4"];
h4Elements[4].innerHTML = siteContent["main-content"]["vision-h4"];

h4Elements[5].innerHTML = siteContent["contact"]["contact-h4"];

let pElements = document.querySelectorAll("p");
pElements[0].innerHTML = siteContent["main-content"]["features-content"];
pElements[1].innerHTML = siteContent["main-content"]["about-content"];
pElements[2].innerHTML = siteContent["main-content"]["services-content"];
pElements[3].innerHTML = siteContent["main-content"]["product-content"];
pElements[4].innerHTML = siteContent["main-content"]["vision-content"];

pElements[5].innerHTML = siteContent["contact"]["address"];
pElements[6].innerHTML = siteContent["contact"]["phone"];
pElements[7].innerHTML = siteContent["contact"]["email"];

pElements[8].innerHTML = siteContent["footer"]["copyright"];

let middleImg = document.querySelector(".middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  alert('keydown event\n\n' + 'key: ' + keyName);
});

ctaBtn.addEventListener('click', (event) => {
  event.target.style.color = 'green';

  setTimeout(() => {
    event.target.style = '';
  }, 5000);
}, false);

ctaImg.addEventListener('dblclick', (event) => {
  event.target.style = 'border: 1px solid green';

  setTimeout(() => {
    event.target.style = '';
  }, 5000);
});

nav.addEventListener('mouseover', (event) => {
  event.target.style = 'border: 1px solid green';

  setTimeout(() => {
    event.target.style = '';
    event.target.style.color = 'green';
  }, 5000);
});

middleImg.addEventListener('dragstart', (event) => {
  event.target.style = 'border-radius: 50%';

  setTimeout(() => {
    event.target.style= '';
  }, 5000);
});

logo.addEventListener('mouseleave', (event) => {
  event.target.style = 'border: 1px solid green';

  setTimeout(() => {
    event.target.style = '';
  }, 5000);
});

for (let i = 0; i < h4Elements.length; i++) {
  h4Elements[i].addEventListener('mousemove', (event) => {
    event.target.style.color = 'green';

    setTimeout(() => {
      event.target.style.color ='';
    }, 5000);
  });
}

for (let i = 0; i < pElements.length; i++) {
  pElements[i].addEventListener('contextmenu', (event) => {
    event.target.style.color = 'green';

    setTimeout(() => {
      event.target.style.color ='';
    }, 5000);
  });
}

ctaH1.addEventListener('mouseup', (event) => {
  event.target.style.color = 'green';

  setTimeout(() => {
    event.target.style.color ='';
  }, 5000);
});

document.addEventListener('copy', function(e){
  e.clipboardData.setData('text/plain', 'Great Idea!');
  e.clipboardData.setData('text/html', '<b>Great Idea!</b>');
  e.preventDefault(); // We want our data, not data from any selection, to be written to the clipboard
});