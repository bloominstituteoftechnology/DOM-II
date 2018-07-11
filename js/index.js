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
    "h1": "DOM <br>Is <br>Awesome",
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
    "address" : "123 Way 456 Street<br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//global variables
let deg = 0;
let isRobbieDancing = false;

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//my stuff
//navs
let navLinks = document.querySelectorAll('header nav a');
navLinks.forEach(nav => nav.style.color = 'green');
navLinks.forEach((nav, pos) => nav.innerText = siteContent.nav[`nav-item-${pos+1}`]);

//cta
let ctaBox = document.querySelector('.cta .cta-text');
ctaBox.querySelector('h1').innerHTML = siteContent.cta.h1;//innerHTML because I added <br> to siteContent.cta.h1
ctaBox.querySelector('button').innerText = siteContent.cta.button;

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

//main-content
//top content
let topContentBoxes = document.querySelectorAll('.main-content .top-content .text-content');
topContentBoxes[0].querySelector('h4').innerText = siteContent['main-content']['features-h4'];
topContentBoxes[0].querySelector('p').innerText = siteContent['main-content']['features-content'];
topContentBoxes[1].querySelector('h4').innerText = siteContent['main-content']['about-h4'];
topContentBoxes[1].querySelector('p').innerText = siteContent['main-content']['about-content'];

//create a new div, give it the class .text-content, create a header and paragraph, set their text,
//give new paragraph some padding, append header and paragrah to new div, prepend div to .top-content
let newTextBox = document.createElement('div');
newTextBox.className = 'text-content';
let newTextBoxHeader = document.createElement('h4');
let newTextBoxPara = document.createElement('p');
newTextBoxHeader.innerText = 'Listeners';
newTextBoxPara.innerHTML = 'Scroll wheel on cta img. Click animation on cta button. Mouse over adds underline, mouse out removes. Right click disabled and alerts. Dblclick flip upside down/rightside up. Key down styles all text to blue, up removes it. copy text issues alert. Auxclick hides items temporarily. Services link plays animation with sound on click.';
newTextBoxPara.style.paddingRight = '20px';
newTextBox.appendChild(newTextBoxHeader);
newTextBox.appendChild(newTextBoxPara);
document.querySelector('.main-content .top-content').prepend(newTextBox);

//give the other text-content p's some padding as well.
topContentBoxes.forEach(box => box.querySelector('p').style.paddingRight = '20px');


let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//bottom content
let bottomContentBoxes = document.querySelectorAll('.main-content .bottom-content .text-content');
bottomContentBoxes[0].querySelector('h4').innerText = siteContent['main-content']['services-h4'];
bottomContentBoxes[0].querySelector('p').innerText = siteContent['main-content']['services-content'];
bottomContentBoxes[1].querySelector('h4').innerText = siteContent['main-content']['product-h4'];
bottomContentBoxes[1].querySelector('p').innerText = siteContent['main-content']['product-content'];
bottomContentBoxes[2].querySelector('h4').innerText = siteContent['main-content']['vision-h4'];
bottomContentBoxes[2].querySelector('p').innerText = siteContent['main-content']['vision-content'];

//Contact
let contactEl = document.querySelector('.contact');
contactEl.querySelector('h4').innerText = siteContent['contact']['contact-h4'];
let contactParas = contactEl.querySelectorAll('p');
contactParas[0].innerHTML = siteContent['contact']['address'];
contactParas[1].innerText = siteContent['contact']['phone'];
contactParas[2].innerText = siteContent['contact']['email'];

//footer
let footerP = document.querySelector('footer p');
footerP.innerText = siteContent.footer.copyright;

//initial use of append before creating new text box for prepend, left because why not?
let newFooterP = document.createElement('p');
newFooterP.innerText = 'DOM is Great, Inc.';
document.querySelector('footer').append(newFooterP);

//1. wheel event
ctaImg.addEventListener('wheel', event => {
  event.preventDefault();
  deg += event.deltaY /10;
  event.target.style.transform = `rotate(${deg}deg)`;
});

//2. click event
ctaBox.querySelector('button').addEventListener('click', event => {
  let rotate = 0;
  let inter = setInterval(()=>{
    rotate += 1;
    if(rotate == 360){
      clearInterval(inter);
    }
    document.querySelector('body').style.transform = `rotate(${rotate}deg)`;
  }, 10);
});

//3. mouseover event
document.addEventListener('mouseover', event => {
  event.stopPropagation();
  event.target.style.textDecoration = "underline";
});

//4. mouseout event
document.addEventListener('mouseout', event => {
  event.stopPropagation();
  event.target.style.textDecoration = "none";
});

//5. contextmenu
document.addEventListener('contextmenu', event => {
  event.preventDefault();
  alert('That has been disabled.');
})

//6. dblclick
document.addEventListener('dblclick', event => {
  event.stopPropagation();
  let rot;
  let att = event.target.getAttribute('flipped');
  if(att == 'true'){
    event.target.setAttribute('flipped', 'false');
    rot = 0;
  }else{
    event.target.setAttribute('flipped', 'true');
    rot = 180;
  }
  event.target.style.transform = `rotate(${rot}deg)`;
});

//7. keydown
document.addEventListener('keydown', event => {
  document.querySelector('body').style.color = 'blue';
});

//8. keyup
document.addEventListener('keyup', () =>{
  document.querySelector('body').style.color = 'black';
});

//9. copy
document.addEventListener('copy', () =>{
  alert('Why you copying me brah?');
});

//10. auxclick
document.addEventListener('auxclick', event=>{
  event.target.style.visibility = 'hidden';
  setTimeout(() => {
    event.target.style.visibility = 'visible';
  }, 3000);
});

//experimental animations

//reimplementation of robbie dance
//create lefty and righty, style them, add them to body
let lefty = document.createElement('div');
lefty.style = 'position: fixed; z-index: 5; height: 150px; width: 200px; top: 10%; left: 0; transform: rotate(-90deg); transform-origin: bottom left; background-image: url("img/robbie.png"); background-size: contain; visibility: hidden;';
let righty = document.createElement('div');
righty.style = 'position: fixed; z-index: 5; height: 150px; width: 230px; background: white; top: 20%; right: 0; transform: rotate(90deg); transform-origin: bottom right; background-image: url("img/shout.png"); background-size: contain; visibility: hidden;'
document.querySelector('body').append(lefty, righty);

//add eventListener to first nav link
navLinks[0].addEventListener('click', event => {
  if(!isRobbieDancing){
    isRobbieDancing = true;
    let audio = new Audio('audio/6y2h2-xpiz2.ogg'); //grab audio file
    lefty.style.visibility = 'visible';
    righty.style.visibility = 'visible';//show my previously created divs
    lefty.style.animation = "leftRot 6s linear";//start left div's keyframe animation
    setTimeout(()=>{
      lefty.style.animation = "";
      lefty.style.visibility = 'hidden';
      isRobbieDancing = false;
    }, 6000);//reset animation after it's done
    audio.play();//start audio file
    setTimeout(function(){
      righty.style.animation = "rightShout 1s linear";
      setTimeout(function(){
        righty.style.animation = "";
        righty.style.visibility = 'hidden';
      }, 1000);//clean up after animation
    }, 5250);//wait 5.25 seconds to add the animation(timing it to the shout)
  }
})
