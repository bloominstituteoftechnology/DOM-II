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

// GSAP
CustomEase.create("bouncey", "M0,0 C0,0 0.012,0.368 0.022,0.378 0.025,0.382 0.063,0.767 0.12,0.804 0.176,0.84 0.219,-0.009 0.23,0 0.231,0.001 0.235,0.08 0.266,0.172 0.309,0.305 0.335,0.489 0.386,0.486 0.472,0.479 0.435,0.033 0.522,-0.014 0.549,-0.029 0.599,0.255 0.616,0.282 0.626,0.298 0.65,0.305 0.662,0.306 0.673,0.306 0.687,0.281 0.694,0.278 0.719,0.263 0.726 0.02 0.744,0 0.769,-0.029 0.783,0.201 0.818,0.186 0.835,0.178 0.835,0.029 0.856,0.01 0.873 -0.007 0.852,0.122 0.872,0.12 0.881,0.118 0.887,0.01 0.9,0 0.91,-0.009 0.906,0.081 0.918,0.08 0.927,0.078 0.932,0.014 0.948,0.014 0.983,0.014 0.999,0 1,0");
// footer custom animation
let footerClick = document.querySelector("footer");
footerClick.addEventListener("click", () => {TweenMax.to(footerClick, 2, {ease: "bouncey", scale:1.5, y: 100})})
// anchor custom animation
let aHov = document.querySelectorAll("a");
for (let i = 0; i < aHov.length; i++) {
  let self = aHov[i];
  self.addEventListener('click', () => { 
    TweenMax.to(aHov, 1.7, { ease: "bouncey", scale:1.3, y: -15});
  })
};
// nav logo cta-img animations
TweenMax.to("nav", 2.5, { ease: SlowMo.ease.config(0.1, 0.7, false), x: -182 });
TweenMax.to(".logo", 2.5, { ease: SlowMo.ease.config(0.1, 0.7, false), x: 698 });
TweenMax.to("#cta-img", 2.5, {rotation:360});

// drag
let dragged = document.getElementById("draggable");
document.addEventListener("drag", function( event ) {
}, false);

// dragstart
document.addEventListener("dragstart", function( event ) {
  dragged = event.target;
  event.target.style.opacity = .5;
}, false);

//dragend
document.addEventListener("dragend", function( event ) {
  event.target.style.opacity = "";
}, false);

// drag over
document.addEventListener("dragover", function( event ) {
  event.preventDefault();
}, false);

//dragenter
document.addEventListener("dragenter", function( event ) {
  if ( event.target.className == "dropzone" ) {
      event.target.style.background = "green";
  }
}, false);

//dragleave
document.addEventListener("dragleave", function( event ) {
  if ( event.target.className == "dropzone" ) {
      event.target.style.background = "";
  }
}, false);

// drop
document.addEventListener("drop", function( event ) {
  event.preventDefault();
  if ( event.target.className == "dropzone" ) {
      event.target.style.background = "";
      dragged.parentNode.removeChild( dragged );
      event.target.appendChild( dragged );
  }
}, false);

//focus
let formed = document.querySelector("form");
formed.addEventListener("focus", function( event ) {
  event.target.style.background = "lightgreen";    
}, true);

//blur
formed.addEventListener("blur", function( event ) {
  event.target.style.background = "";    
}, true);

//contextmenu
formed.addEventListener("contextmenu", () => {alert('User Name Here')});

//keydown
document.addEventListener('keydown', (e) => {
  const keyName = e.key;
  alert('keydown event\n\n' + 'key: ' + keyName);
})

// mouseenter / mouseleave

let heyT = document.querySelector('.logo');
heyT.addEventListener('mouseleave', () => {heyT.classList.toggle("heyToggle")})
heyT.addEventListener('mouseenter', () => {heyT.classList.toggle("heyToggle")})


//doubleclick
let dbl = document.querySelector('.middle-img')
dbl.addEventListener("dblclick", () => {alert('Stop Poking Me!!')});

//submit button 
btn2 = document.querySelector(".buttonSubmit")
btn2.addEventListener('click', () => {  //click
  alert('I will never submit!');
  });
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Start Nav
// let newNav1 = document.createElement('a');
// let text = document.createTextNode("Pics");
// newNav1.appendChild(text);
// document.querySelector("nav").appendChild(newNav1);

// let newNav2 = document.createElement('a');
// let text2 = document.createTextNode("Forum");
// newNav2.appendChild(text2);
// document.querySelector("nav").prepend(newNav2);


let navBar = document.querySelectorAll("a");
navBar.forEach((navColor) => {navColor.style.color = "green";})
navBar.forEach((weight) => {weight.style.fontWeight = "900"})
navBar.forEach((size) => {size.style.fontSize = "18px"})
navBar[0].innerHTML = "(Click)Services";
navBar[1].innerHTML = "Product";
navBar[2].innerHTML = "Vision";
navBar[3].innerHTML = "Features";
navBar[4].innerHTML = "About";
navBar[5].innerHTML = "Contact(Me)";
// end nav

//start CTA

let headerImg = document.querySelector("#cta-img");
headerImg.setAttribute('src', siteContent['cta']['img-src']);

let headerOne = document.querySelector("h1");
headerOne.innerHTML = "DOM <br /> is Awesome!";
headerOne.style.width = "241px";
headerOne.style.height = "216px";
headerOne.style.color = "green";

let btn = document.querySelector("button")
btn.innerHTML = "Get Started";

//mouseover / click
btn.addEventListener('mouseover', (e) => {btn.classList.toggle("btnHover")});
btn.addEventListener('mouseleave', (e) => {btn.classList.toggle("btnHover")});

btn.addEventListener('click', () => {headerImg.classList.toggle('whatToggle')});
// end CTA

let middleImg = document.querySelector("#middle-img");
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let contentT = document.querySelectorAll("h4");
// contentT.forEach(function(h4color){
//   h4color.style.color = "green";
// });
contentT.forEach((h4Color) => {h4Color.style.color = "green"});

contentT[0].innerHTML = "Features";
contentT[1].innerHTML = "About";
contentT[2].innerHTML = "Services";
contentT[3].innerHTML = "Product";
contentT[4].innerHTML = "Vision";

let contentP = document.querySelectorAll("p");
contentP.forEach((bol) => {bol.style.fontWeight = "900";})
contentP[0].innerHTML = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
contentP[1].innerHTML = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
contentP[2].innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
contentP[3].innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
contentP[4].innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
// end text content

contentT[5].innerHTML = "Contact";
contentP[5].innerHTML = "123 Way 456 Street <br /> Somewhere, USA" ;
contentP[6].innerHTML = "1 (888) 888-8888";
contentP[7].innerHTML = "sales@greatidea.io";
contentP[8].innerHTML = "Copyright Great Idea! 2018 (Click Me)";

