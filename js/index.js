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

// Inclusion of bootstrap framework
const bla = document.querySelector("head");
bla.insertAdjacentHTML("afterbegin", `<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">`)

// Header - Content

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let selNavItem = document.querySelectorAll("nav a");
selNavItem.forEach((element, index) => {
  element.innerHTML = siteContent["nav"]["nav-item-" + (index + 1)];
})
// !Header-Content

// CTA - Content

let ctaHeading = document.querySelectorAll(".cta-text")

ctaHeading[0].firstElementChild.innerHTML = siteContent.cta["h1"];
ctaHeading[0].lastElementChild.innerHTML = siteContent.cta["button"];

// Modal- Implementation
// BTN Manipulation
ctaHeading[0].lastElementChild.setAttribute('type', 'button');
ctaHeading[0].lastElementChild.setAttribute('data-toggle', 'modal');
ctaHeading[0].lastElementChild.setAttribute('data-target', '#exampleModalCenter');
ctaHeading[0].firstElementChild.style = 'color: red';

// Function to inject HTML Snippet

let functionWorked = false;
ctaHeading[0].lastElementChild.addEventListener('mouseover', () => {
  // console.log("hey")
  let crazy = document.querySelector(".cta")

  if (functionWorked === false) {
    crazy.insertAdjacentHTML("beforeend", `<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalCenterTitle">Modal that cost me 1.5 hours of my Life</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          This Modal is brought to you by JavaScript Injection!
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`);
    functionWorked = !functionWorked;
  }
})
// !Modal Implementation

let ctaLogo = document.querySelector("section img");
ctaLogo.src = 'img/header-img.png';

// !CTA-Content

// Main-Content


let contentArr = [];
for (var prop in siteContent["main-content"]) {
  if (siteContent["main-content"].hasOwnProperty(prop) && prop !== "middle-img-src") {
    contentArr.push(prop);
  }
}
let j = 0;
let textContent = document.querySelectorAll(".text-content")
for (let i = 0; i < textContent.length; i++) {
  textContent[i].children[0].textContent = siteContent["main-content"][contentArr[j]];
  textContent[i].children[1].textContent = siteContent["main-content"][contentArr[j + 1]];
  j += 2;
}


let middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

// !Main-Content

// Contact-Content
let contactHead = document.querySelector(".contact h4")
contactHead.innerHTML = siteContent.contact["contact-h4"]

let contactBody = document.querySelectorAll(".contact p")
contactBody[0].innerHTML = siteContent["contact"]["address"]
contactBody[1].innerHTML = siteContent["contact"]["phone"]
contactBody[2].innerHTML = siteContent["contact"]["email"]

let footer = document.querySelector("footer")
footer.innerHTML = siteContent["footer"]["copyright"];

// Start DOM - II 
// 10 unique event-listeners 

let ctaImg = document.querySelector(".cta img")
let ctaTxt = document.querySelector(".cta h1")
let ctaDiv = document.querySelector(".cta-text")
let ctaDivM = document.querySelector(".cta")
let navBar = document.querySelectorAll("a")

document.addEventListener('copy', () => {
  alert("GOT YOU! STOP STEALING MY STUFF!!")
})

ctaImg.addEventListener("mouseover", () => {
  TweenMax.from(ctaImg, 2, {
    marginRight: 200,
    // ease: SlowMo.ease.config(0.8, 0.8, false),
  })
  // ctaImg.style = "visibility: hidden";
  // setTimeout(() => {
  //   ctaImg.removeAttribute("style");
  // }, 800)
})

ctaTxt.addEventListener("dblclick", () => {
  TweenMax.from(".box", 6, {
    marginLeft: 800,
    backgroundColor: "black",
    ease: SlowMo.ease.config(0.7, 0.7, false),
    rotation: 360
  });
  ctaDivM.style.justifyContent = "center"
  ctaTxt.style.fontSize = "20rem"
  ctaImg.style.display = "none"
  ctaDiv.style.margin = "0px"
})

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  alert('keydown event\n\n' + 'key: ' + keyName);
});

document.addEventListener('contextmenu', (event) => {
  alert('NO NO NO NO!');
});

document.addEventListener('wheel', (event) => {
  alert('WroomWroom');
});

document.addEventListener('dragstart', (event) => {
  alert('Leave that where it is my friend, I will find it!');
});

document.addEventListener('dragend', (event) => {
  alert(`Lucky you, I would've gotten you!`);
});

document.addEventListener('resize', (event) => {
  alert(`STOOP, I'm not sure if breakpoints work!! :(`);
}, false);

for (let index = 0; index < navBar.length; index++) {
  navBar[index].addEventListener("mouseup", () => {
    navBar[index].setAttribute("disabled", "")
  })
}
let specialVar = document.querySelector(".contact")
let logoV = document.querySelector(".logo")
window.onload = function () {
  TweenMax.from(specialVar, 2, {
    marginLeft: 800,
    ease: SlowMo.ease.config(0.7, 0.7, false),
  })
  TweenMax.from(logoV, 2, {
    marginRight: 400,
    // ease: SlowMo.ease.config(0.8, 0.8, false),
  })
}