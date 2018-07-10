// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// REMEMBER, you can accomplish the assignment in many different ways. You could literally use getElementByTag name to accomplish everything if you wanted:

// Update the nav links test
let selectedNavLinks = document.querySelectorAll("nav a");
selectedNavLinks.forEach((link, i) => {
  link.innerHTML = siteContent.nav[`nav-item-${i+1}`];
})

// Update CTA
let ctaText = document.getElementsByClassName("cta-text")[0];

ctaText.getElementsByTagName("h1")[0].innerHTML = siteContent["cta"]["h1"];
ctaText.getElementsByTagName("button")[0].innerHTML = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);
// console.log(document.getElementsByClassName("cta")[0])

// Update MainContent
let textContentList = document.querySelectorAll(".text-content");

textContentList[0].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["features-h4"];
textContentList[0].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["features-content"];
textContentList[1].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["about-h4"];
textContentList[1].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["about-content"];
textContentList[2].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["services-h4"];
textContentList[2].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["services-content"];
textContentList[3].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["product-h4"];
textContentList[3].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["product-content"];
textContentList[4].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["vision-h4"];
textContentList[4].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["vision-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Update Contact
let contact = document.getElementsByClassName("contact")[0];
contact.getElementsByTagName("h4")[0].innerHTML = siteContent["contact"]["contact-h4"]
contact.getElementsByTagName("p")[0].innerHTML = siteContent["contact"]["address"]
contact.getElementsByTagName("p")[1].innerHTML = siteContent["contact"]["phone"]
contact.getElementsByTagName("p")[2].innerHTML = siteContent["contact"]["email"]

// Update Footer
let footer = document.querySelector("footer");
footer.getElementsByTagName("p")[0].innerHTML = siteContent["footer"]["copyright"];

// Add New Content
// Change navigation text color
selectedNavLinks.forEach((link,i) => {
  link.style.color = "green";
})

// Add two items to navigation
selectedNavLinks = document.getElementsByTagName("nav")[0];
let createNewNode = (name) => {
  let newNode = document.createElement("a");
  newNode.innerHTML = name;
  return newNode;
}
selectedNavLinks.prepend(createNewNode("Extra Item 1"));
selectedNavLinks.append(createNewNode("Extra Item 2"));