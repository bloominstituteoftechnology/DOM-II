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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Creating Selectors

let nav = document.getElementsByTagName('nav'); //html collection
let nava = document.querySelector("nav"); // innerhtml
let a = document.querySelectorAll("a") //das da juan
console.log(nav, nava, a[3]); // okay so now I have an array like list
let h1cta = document.querySelector(".cta-text h1");
let cta = document.querySelector(".cta-text")
let butt = document.querySelector(".cta-text button");
let ctaimage = document.getElementById('cta-img');
let middleimg = document.getElementById("middle-img");
let toph4 = document.querySelectorAll(".top-content h4")
let topP = document.querySelectorAll(".top-content p")
let bottomh4 = document.querySelectorAll(".bottom-content h4")
let bottomP = document.querySelectorAll(".bottom-content p")
let contacth4 = document.querySelector(".contact h4")
let contactP = document.querySelectorAll(".contact p")
let footer = document.querySelector("footer p")
console.log(footer)

// And then adding the appropriate feature in this case text:
//nava.innerHTML = "Services";

//nav
a[0].innerHTML = siteContent['nav']['nav-item-1']
a[1].innerHTML = siteContent['nav']['nav-item-2']
a[2].innerHTML = siteContent['nav']['nav-item-3']
a[3].innerHTML = siteContent['nav']['nav-item-4']
a[4].innerHTML = siteContent['nav']['nav-item-5']
a[5].innerHTML = siteContent['nav']['nav-item-6']

// new a node with append
let textnode = document.createTextNode('Super')
let newA = document.createElement('a')
newA.appendChild(textnode);
nava.appendChild(newA);

// prepend
let newbutt = document.createElement("button");
let buttnode = document.createTextNode("ImmaButton");
newbutt.appendChild(buttnode);
nava.prepend(newbutt);

//color change
butt.style.color = 'green';
butt.style.backgroundColor = 'orange'
butt.style.border = 'thick dashed magenta'


//section
h1cta.innerHTML = "DOM <br> IS <br> AWESOME";
butt.innerHTML = "Get Started";
ctaimage.setAttribute('src', siteContent["cta"]['img-src'])
middleimg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// top content
toph4[0].innerHTML = siteContent['main-content']['features-h4']
topP[0].innerHTML = siteContent['main-content']['features-content']
toph4[1].innerHTML = siteContent['main-content']['about-h4']
topP[1].innerHTML = siteContent['main-content']['about-content']

// bottom content
bottomh4[0].innerHTML = siteContent['main-content']['services-h4']
bottomP[0].innerHTML = siteContent['main-content']['services-content']
bottomh4[1].innerHTML = siteContent['main-content']['product-h4']
bottomP[1].innerHTML = siteContent['main-content']['product-content']
bottomh4[2].innerHTML = siteContent['main-content']['vision-h4']
bottomP[2].innerHTML = siteContent['main-content']['vision-content']

//contact
contacth4.innerHTML = siteContent['contact']['contact-h4']

contactP[1].innerHTML = siteContent['contact']['phone']
contactP[2].innerHTML = siteContent['contact']['email']
let bottomup = siteContent['contact']['address']
let splitbottom = bottomup.split("")
splitbottom.splice(18, 0, "<br>")
let joined = splitbottom.join('')
console.log(joined)
let splitIndex = splitbottom.lastIndexOf("t")
console.log(splitIndex)
console.log()

contactP[0].innerHTML = joined

// footer

footer.innerHTML = siteContent['footer']['copyright']


//Event Listeners
// adding button making functionality 1/10

butt.addEventListener('click', (event) => {
   let btn = document.createElement("BUTTON");
   let t = document.createTextNode("CLICK ME");
   btn.appendChild(t);
   cta.appendChild(btn);
})



// keydown 2/10
document.addEventListener('keydown', (event) => {
  bottomh4[0].style.color = 'red'
})

// keyup 3/10
document.addEventListener('keyup', (event) => {
  bottomh4[1].style.color = 'blue'
})


//mouseenter 4/10
ctaimage.addEventListener('mouseenter', (event) => {
  middleimg.style.padding = '120px'
})

//mouseout 5/10
ctaimage.addEventListener('mouseout', (event) => {
  middleimg.style.padding = '0px'
})

// mouseup 6/10
ctaimage.addEventListener('mouseup', (event) =>{
  logo.style.backgroundColor = 'orchid'
})

//mousedown 7/10
ctaimage.addEventListener('mousedown', (event) =>{
  logo.style.backgroundColor = 'orange'
})

//dclick 8/10
ctaimage.addEventListener('dblclick', (event) =>{
  logo.style.backgroundColor = 'white'
})

//mousemove 9/10
cta.addEventListener('mouseleave', (event) =>{
  butt.remove()
})

//resive 10/10
window.addEventListener('resize', (w) =>{
  footer.style.outline = '2px dashed blue'
  footer.style.boxShadow = '2px 2px 0 0 red'
})




/* Okay so I want to make:
<div class="cta-text">
    <h1></h1>
    <button></button>
</div>

Into:

<div class="cta-text">
    <h1>DOM<br> Is<br> Awesome</h1>
    <button>Get Started</button>
</div>
*/

//So all I need to do is actually what is just here:.
// let h1cta = document.querySelector(".cta-text h1");
// h1cta.innerHTML = "DOM <br> IS <br> AWESOME";


/*
And none of the following so oh well create a new text entry and
So first I will create the temp text node for the br:
let node2 = document.createTextNode(" IS Awesome")
// and then create the actual new br:
let brcta = document.createElement("br");
//apped
brcta.appendChild(node2)
let cta_ = document.getElementsByClassName('cta-text')
console.log(cta_)
//And then  select the sectoin and insert
cta_.insertBefore(brcta, h1cta);
*/
