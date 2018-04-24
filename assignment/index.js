const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "./images/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "./images/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "./images/mid-page-accent.jpg",
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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItems = siteContent.nav;
let keys = Object.keys(navItems);
let values = Object.values(navItems);

for (let i = 0; i < keys.length; i++) {
    if (keys[i] !== "img-src") {
        document.getElementsByTagName('nav')[0].children[i].innerHTML = values[i];
        document.getElementsByTagName('nav')[0].children[i].className = keys[i];
    }
}

//adding the image

document.getElementById('cta-img').src = siteContent.cta['img-src'];

//adding text to h1

//console.log(document.querySelector('.cta-text').getElementsByTagName('h1'));

document.querySelector('.cta-text').firstElementChild.innerHTML = siteContent.cta.h1;

document.querySelector('.cta-text').getElementsByTagName('button')[0].innerHTML = siteContent.cta.button;

// factory for adding h4s and p tags

let textContentDivs = document.getElementsByClassName('text-content');
//console.log(textContentDivs);
//console.log(Object.keys(siteContent['main-content']).filter(item => item.includes('h4')));
let h4Values = Object.keys(siteContent['main-content']).filter(item => item.includes('h4'));

let mainContentPs = Object.keys(siteContent['main-content']).filter(item => item.includes('content'));

for (let i = 0; i < h4Values.length; i++) {
    textContentDivs[i].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content'][h4Values[i]];
    textContentDivs[i].getElementsByTagName('p')[0].innerHTML = siteContent['main-content'][mainContentPs[i]];
};

document.getElementById('middle-img').src = siteContent["main-content"]["middle-img-src"];

let contactItems = Object.values(siteContent.contact);
//console.log(contactItems);
for (let i = 0; i < contactItems.length; i++) {
    document.querySelector('.contact').children[i].innerHTML = contactItems[i];
}

document.querySelector('footer').querySelector('p').innerHTML = siteContent.footer.copyright;

// ---------------------------------DOM II ------------------------

window.addEventListener('resize', () => {
    console.log("resized!")
});

let awesome = document.querySelector('.cta-text').getElementsByTagName('h1')[0]
let button = document.querySelector('.cta-text').getElementsByTagName('button')[0]
awesome.addEventListener('mouseover', () => {
    console.log("Ain' it?")
})

var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
var currentIndex = 0;

button.addEventListener('click', () => {
    setInterval(function () {
        document.querySelector('.cta').style.cssText = "background-color: " + colors[currentIndex];
        currentIndex++;
        if (currentIndex == undefined || currentIndex >= colors.length) {
            currentIndex = 0;
        }
    }, 1000);
});

let inter = {};
let codeImage = document.querySelector('#cta-img')
codeImage.addEventListener('mouseover', () => {
    console.log(inter)
    window.clearInterval(inter[`${codeImage}`]);
    inter[`${codeImage}`] = setInterval(function () {
        codeImage.style.transform = "rotate(2520deg)";
    }, 500);
    codeImage.style.transform = 'rotate(0deg)'
});

// ---

let ctaText = document.querySelector('.top-content')
ctaText.addEventListener('click', () => {
    ctaText.style.width = '50%'
})

// ----

ctaText.addEventListener('dblclick', () => {
    ctaText.style.width = '100%'
})

// ===

let ctaTextBottom = document.querySelector('.bottom-content')
ctaTextBottom.addEventListener('mouseover', () => {
    ctaTextBottom.style.transform = 'rotate(180deg)'
})

//---

ctaTextBottom.addEventListener('mouseleave', () => {
    ctaTextBottom.style.transform = 'rotate(0deg)'
})

//----

let phone = document.querySelector('.contact').children[2]
phone.addEventListener('click', () => {
    phone.style.fontSize = '80px'
})