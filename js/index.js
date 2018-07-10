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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//nav-bar
let nav = document.querySelector("nav").children;
const aLink = document.createElement("a");
const bLink = document.createElement("a");


document.querySelector("nav").prepend(bLink);


document.querySelector("nav").appendChild(aLink);

siteContent.nav["nav-item-0"] = "Home";
siteContent.nav["nav-item-7"] = "Webring";

function baseColorNav(){
for (let index = 0; index < nav.length; index++) {
  nav[index].innerHTML = siteContent.nav["nav-item-" + (index)]
  nav[index].style.color = "green";

}

}
baseColorNav();
//cta text
let ctaText = document.querySelector(".cta-text").children;

ctaText[0].innerText = siteContent.cta.h1;
ctaText[1].innerText = siteContent.cta.button;

//cta img

let ctaIMG = document.querySelector("#cta-img");
ctaIMG.setAttribute('src', siteContent.cta["img-src"]);


//text-content (main-content)
const contentTitles = ["features", "about", "services", "product", "vision"];


let textContent = document.querySelectorAll(".text-content");

for (let index = 0; index < textContent.length; index++) {
  textContent[index].children[0].innerText = siteContent["main-content"][contentTitles[index] + "-h4"]

  textContent[index].children[1].innerText = siteContent["main-content"][contentTitles[index] + "-content"]

}


//Main-content image
document.querySelector("#middle-img").setAttribute('src', siteContent["main-content"]["middle-img-src"]);


//contact

let contact = document.querySelector(".contact").children;

contact[0].innerText = siteContent.contact["contact-h4"];
contact[1].innerText = siteContent.contact["address"];
contact[2].innerText = siteContent.contact["phone"];
contact[3].innerText = siteContent.contact["email"];

//footer

document.querySelector("footer p").innerText = siteContent.footer.copyright;

const footer = document.querySelector("footer");
const createdButton = document.createElement("button");
const spacer = document.createElement("br");

footer.appendChild(spacer);

footer.appendChild(createdButton);

const flipButton = document.querySelector("footer button")

flipButton.innerText = "Australian use only"



//functions

const flip = () => {
  if (document.querySelector(".container").style.transform != "rotate(180deg)") {
    document.querySelector(".container").style.transform = "rotate(180deg)";
  } else {
    document.querySelector(".container").style.transform = "rotate(0deg)";
  }
}

// First event listener 
flipButton.addEventListener("click", flip);


let mediaPort = document.querySelector("#middle-content-div")


//the game that comes up when you press g
const cantTouchThisGame = () => {
  let gameConstructor = " ";

  //constructs the html for the game 
  for (let index = 0; index < 25; index++) {
    if (index % 5 === 0 && index != 0) {
      gameConstructor += `</div>`;
    }

    if (index % 5 === 0) {
      gameConstructor += `<div class='gamerow'>`;
    }
    gameConstructor += `<button class="gamebutton" id="button${index}" style="visibility:hidden" >Click Me</button>`;

  }

  //game styling
  mediaPort.innerHTML = gameConstructor;
  mediaPort.style.height = "25vh";
  mediaPort.style.display = "flex";
  mediaPort.style["flex-direction"] = "column";
  mediaPort.style["justify-content"] = "space-between";
  mediaPort.style.margin = "10px"


  let toCSS = document.querySelectorAll(".gamerow");

  for (let index = 0; index < toCSS.length; index++) {
    toCSS[index].style.display = "flex";
    toCSS[index].style["justify-content"] = "space-between";
  }

  //button styling
  document.querySelector(`#button${Math.floor(Math.random() * 24) } `).style.visibility = "visible";

  let buttons = document.querySelectorAll(".gamebutton");
  //adds event listeners for buttons (mouseover and onclick)
  for (let index = 0; index < buttons.length; index++) {
    //eventlistener number 3 (times 25)
    buttons[index].addEventListener("click", function () {
      alert("You Win!");


    });

    //event listener 4
    buttons[index].addEventListener("mouseover", function () {
      document.querySelector(`#button${index} `).style.visibility = "hidden";
      document.querySelector(`#button${Math.floor(Math.random() * 24)} `).style.visibility = "visible";

    });
  }



}



//Second event listener 
window.addEventListener("keypress", function (event) {
  console.log(event.key)
  if (event.key === 'g') {
    cantTouchThisGame();
  }
}, false);

let rotationCounter = 0;


var lastScrollTop = 0;
//event listener 5

window.addEventListener("scroll", function(){
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
    rotationCounter += 10;

      // downscroll code

      document.querySelector("#cta-img").style.transform = `rotate(${rotationCounter}deg)`;
   } else {
    rotationCounter -=10;

      // upscroll code

      document.querySelector("#cta-img").style.transform = `rotate(${rotationCounter}deg)`;
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);


//event listener six
document.querySelector("nav").addEventListener("mouseenter", function( event ) {
  for (let index = 0; index < nav.length; index++) {
   
    nav[index].style["font-size"] = "150%";
  
  }
});

//event listener 7
document.querySelector("nav").addEventListener("mouseleave", function( event ) {
  for (let index = 0; index < nav.length; index++) {
    
    nav[index].style["font-size"] = "100%";
  
  }
});


document.querySelector("nav").addEventListener("mouseover", function( event ) {
  for (let index = 0; index < nav.length; index++) {
    
    nav[index].style["font-size"] = "100%";
  
  }
});