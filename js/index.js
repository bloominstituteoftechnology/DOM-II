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

  "smeagol": {
    "img-src": "img/smeagol.jpg",
    "h1": "Desolation of Smaug <br> is the best LOTR <br> movie",
    "button": "ARAGORN is the first big problem. In the book he is both a ranger from the north, but also a man destined to be king. He knows who he is, and he has an expectation of that destiny. Likewise in the book he has 'spiritual' awareness. Aragorn is descended, not merely from men, but from Numenor: so he already has in him some of the blood of the Elves. Now Jackson gives all foresight to the Elves - making the men merely, men. But the whole point is that the-man-born-to-be-king has the spiritual awareness of the great kings of old.Thus, in book II at the river it is Aragorn, not Legolas (as in Jackson's version), who is aware of a shadow growing in his heart. And, more significantly, it is Aragorn who in the book takes the palantir by his right (Gandalf actually bows to give it to him). Gandalf counsels him not to use it, but Aragorn knows who he is. So he looks in the palantir and shows Sauron the sword. He challenges Sauron, and then wrenches the palantir away from the Eye to use as HE wills, not as Sauron wills. In so doing he sees the black fleet, and so knows the threat. That's why he takes the path of the dead. And when he goes under the Dimholt he REALLY summons the dead. The exchange in the film between Aragorn and the Geoffrey-Rush-Pirates-of-the-Caribbean-look-alike ghost is feeble in the film. In the book Aragorn does not doubt who he is: he calls them, not barters with them."
  },

  "cta": {
    "h1": "DOM <br> Is <br> Awesome",
    "button": "wanna read review for the worst lotr movie??? click here",
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




//forEach method used in NAVs

let allSelectors = document.querySelectorAll('a');

allSelectors.forEach(function(selector, index, selectors) {
  selector.innerHTML = siteContent[`nav`][`nav-item-${index+1}`]
  
})



//added append and prepend methods
let newNav = document.querySelector("nav");

var newNavEnd = document.createElement("a");
newNav.appendChild(newNavEnd);
newNavEnd.innerHTML = "Learn More";
newNavEnd.style.color = "green"

var newNavBegin = document.createElement("a");
newNav.prepend(newNavBegin);
newNavBegin.innerHTML = "DOM";
newNavBegin.style.color = "green"

//created selectors for imgs

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//created selector for cta

let ctaTxt = document.querySelector(".cta-text h1");
ctaTxt.innerHTML = siteContent["cta"]["h1"];

let ctaBtn = document.querySelector(".cta-text button");
ctaBtn.innerHTML = siteContent["cta"]["button"];



//created Selector for all h4 tags

let h4Tag = document.querySelectorAll("h4");
h4Tag[0].innerHTML = siteContent["main-content"]["features-h4"];
h4Tag[1].innerHTML = siteContent["main-content"]["about-h4"];
h4Tag[2].innerHTML = siteContent["main-content"]["services-h4"];
h4Tag[3].innerHTML = siteContent["main-content"]["product-h4"];
h4Tag[4].innerHTML = siteContent["main-content"]["vision-h4"];
h4Tag[5].innerHTML = siteContent["contact"]["contact-h4"];


//created Selector for all p tags

let pTag = document.querySelectorAll("p");
pTag[0].innerHTML = siteContent["main-content"]["features-content"];
pTag[1].innerHTML = siteContent["main-content"]["about-content"];
pTag[2].innerHTML = siteContent["main-content"]["services-content"];
pTag[3].innerHTML = siteContent["main-content"]["product-content"];
pTag[4].innerHTML = siteContent["main-content"]["vision-content"];
pTag[5].innerHTML = siteContent["contact"]["address"];
pTag[6].innerHTML = siteContent["contact"]["phone"];
pTag[7].innerHTML = siteContent["contact"]["email"];
pTag[8].innerHTML = siteContent["footer"]["copyright"];


//1.Scroll. 
// 2.hover over cta img and cta text
// 3.click on about
// 4.doubleclick on features
// 5.right click on window
// 6. hover over greatidea logo
// 7. click cta button
// 8. try resizing windows


//window Event Listener
//context menu
window.addEventListener('contextmenu', ()=>{
  alert("right clicking not allowed!!")
})
//wheel
window.addEventListener('wheel',() =>{
  alert("no scrolling allowed")
  alert("Look at the truth")
})
//dblclick
h4Tag[0].addEventListener('dblclick', () =>{
  event.target.style.border = "100px solid purple"
  alert("Lost! Lost! My Precious is lost!!")
})

//mouseenter
let logoEL = document.getElementById("logo-img");
logoEL.addEventListener("mouseenter", () => {
  event.target.style.border = "2px solid black";
  });
//click

h4Tag[1].addEventListener('click',()=>{
  alert("stop clicking everything please.")
  event.target.style.border = "50px solid yellow";
  alert("ahh!! what did you do to my website.") 
})

//mouseover

ctaImg.addEventListener("mouseover", () =>{
  ctaImg.setAttribute('src', siteContent["smeagol"]["img-src"])
})

//mouseover

ctaTxt.addEventListener("mouseover",()=>{
  ctaTxt.innerHTML = siteContent["smeagol"]["h1"];
})

//resize

window.addEventListener("resize", ()=>{
  alert("resizing won't help you hide from the truth")
})

//click

ctaBtn.addEventListener("click", ()=>{
  ctaBtn.innerHTML = siteContent["smeagol"]["button"];
})





