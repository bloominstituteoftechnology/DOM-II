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
let nav = document.getElementsByTagName('nav');
nav = nav[0].children;
nav[0].innerHTML = siteContent["nav"]['nav-item-1'];
nav[1].innerHTML = siteContent["nav"]['nav-item-2'];
nav[2].innerHTML = siteContent["nav"]['nav-item-3'];
nav[3].innerHTML = siteContent["nav"]['nav-item-4'];
nav[4].innerHTML = siteContent["nav"]['nav-item-5'];
nav[5].innerHTML = siteContent["nav"]['nav-item-6'];
let logo = document.querySelector(".logo");

logo.src = siteContent["nav"]["img-src"];
logo.addEventListener('click', () => {
  logo.setAttribute('style', 'background-color: rgb(' + rand(0, 255) + ', ' + rand(0, 255) + ', ' + rand(0, 255) + ')');
  console.log(logo);

})


let cta = document.getElementsByClassName('cta-text');
cta = cta[0]['children'];
cta[0].innerHTML = siteContent['cta']['h1'];
cta[1].innerHTML = siteContent['cta']['button'];
cta[1].addEventListener('click', () => {
  TweenMax.to(cta[0], 7, {
    scale: 5,
    opacity: 0,
    onComplete: () => {
      cta[1].addClass('d-none');
    }
  });
  TweenMax.to(cta[1], 7, {
    rotation: 1080,
    opacity: 0.1
  })
});
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent['cta']['img-src']);
ctaImg.addEventListener('mouseenter', () => {
  TweenMax.to("#cta-img", 3, {
    rotation: 720,
    scale: 0.1
  });
});
ctaImg.addEventListener('mouseleave', () => {
  TweenMax.to("#cta-img", 3, {
    rotation: -720,
    scale: 1.0
  });
});

let mainContent = document.getElementsByClassName('main-content');
mainContent = mainContent[0]['children'];
mainContent[0]['children'][0]['children'][0].innerHTML = siteContent['main-content']['features-h4'];
mainContent[0]['children'][0]['children'][1].innerHTML = siteContent['main-content']['features-content'];
mainContent[0]['children'][1]['children'][0].innerHTML = siteContent['main-content']['about-h4'];
mainContent[0]['children'][1]['children'][1].innerHTML = siteContent['main-content']['about-content'];
let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
mainContent[2]['children'][0]['children'][0].innerHTML = siteContent['main-content']['services-h4'];
mainContent[2]['children'][0]['children'][1].innerHTML = siteContent['main-content']['services-content'];
mainContent[2]['children'][1]['children'][0].innerHTML = siteContent['main-content']['product-h4'];
mainContent[2]['children'][1]['children'][1].innerHTML = siteContent['main-content']['product-content'];
mainContent[2]['children'][2]['children'][0].innerHTML = siteContent['main-content']['vision-h4'];
mainContent[2]['children'][2]['children'][1].innerHTML = siteContent['main-content']['vision-content'];

let contact = document.getElementsByClassName('contact');
contact = contact[0]['children'];
contact[0].innerHTML = siteContent['contact']['contact-h4'];
contact[1].innerHTML = siteContent['contact']['address'];
contact[2].innerHTML = siteContent['contact']['phone'];
contact[3].innerHTML = siteContent['contact']['email'];
contact = document.querySelector('.contact');
contact.addEventListener('mouseenter', () => {
  contact.style.color = 'rgb(' + rand(0, 255) + ', ' + rand(0, 255) + ', ' + rand(0, 255) + ')';
});
contact.addEventListener('mouseleave', () => {
  contact.style.color = 'rgb(' + rand(0, 255) + ', ' + rand(0, 255) + ', ' + rand(0, 255) + ')';
});

let footer = document.getElementsByTagName('footer');
footer = footer[0]['children'];
footer[0].innerHTML = siteContent['footer']['copyright'];

nav = document.querySelector('nav');
let home = document.createElement('a');
home.innerHTML = 'Home';
nav.prepend(home);

let blog = document.createElement('a');
blog.innerHTML = 'Blog';
nav.appendChild(blog);

let navtoo = document.querySelectorAll('a');
for (let a = 0; a < navtoo.length; a++) {
  navtoo[a].setAttribute('style', 'color: green');
  navtoo[a].addEventListener('mouseenter', () => {
    TweenMax.to(navtoo[a], 1, {
      scale: .1,
      opacity: .1
    });
  });
  navtoo[a].addEventListener('mouseleave', () => {
    TweenMax.to(navtoo[a], 1, {
      scale: 1,
      opacity: 1
    });
  })
}

let body = document.querySelector('body');
body.setAttribute('style', 'background-color: lightgrey');

let btn = document.querySelector('button');
btn.setAttribute('style', 'box-shadow: 3px 3px red');
btn.addEventListener('mouseover', () => {
  TweenMax.to(btn, 1, {
    rotation: 460,
    scale: 2
  });
});


window.addEventListener('scroll', messItUp);

function messItUp() {
  TweenMax.to(mainContent[0], 3, {
    x: rand(-50, 50),
    y: rand(-50, 50),
    skewX: rand(-50, 50),
    skewY: rand(-50, 50)
  });
  TweenMax.to(mainContent[1], 3, {
    x: rand(-50, 50),
    y: rand(-50, 50),
    skewX: rand(-50, 50),
    skewY: rand(-50, 50)
  });
  TweenMax.to(mainContent[2], 3, {
    x: rand(-50, 50),
    y: rand(-50, 50),
    skewX: rand(-50, 50),
    skewY: rand(-50, 50)
  });
}

function rand(min, max) {
  return Math.floor(Math.random() * Math.floor(max - min)) + min;
}