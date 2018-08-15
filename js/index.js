// Your code goes here
// mouseover;
// keydown;
// wheel;
// drag / drop;
// load;
// focus;
// resize;
// scroll;
// select;
// dblclick;

const navElement = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-link");
const menu = document.querySelector(".menu-img");
const firstHeading = Array.from(document.querySelectorAll("h1"));
const secondHeading = Array.from(document.querySelectorAll("h2"));
const imgLinks = Array.from(document.querySelectorAll("img"));
const invCtn = document.querySelector(".inverse-content");
const destDivs = Array.from(document.querySelectorAll(".destination"));
const signUpBtn = Array.from(document.querySelectorAll(".btn"));

menu.addEventListener("mouseover", event => {
  menu.style.cursor = "pointer";
});
menu.addEventListener("click", event => {
  navElement.classList.toggle("hidden");
  event.stopPropagation();

  navLinks.forEach((link, i) => {
    link.classList.toggle("hidden");
    link.addEventListener("mouseover", event => {
      link.style.fontWeight = "900";
    });
    link.addEventListener("mouseleave", event => {
      link.style.fontWeight = "400";
    });
    link.addEventListener("click", event => {
      event.preventDefault();
    });
  });
});

function myHeadings(arr) {
  for (let i in arr) {
    if (firstHeading[i]) {
      firstHeading[i].style.cursor = "pointer";
      userInput = document.createElement("input");
      userInput.setAttribute("type", "text");
      userInput.setAttribute("placeholder", "Header");
      firstHeading[i].addEventListener("dblclick", event => {
        event.target.parentNode.replaceChild(userInput, firstHeading[i]);
      });
      userInput.addEventListener("keypress", event => {
        if (event.key === "Enter") {
          newHeader = userInput.value;
        }
      });
      userInput.addEventListener("dblclick", event => {
        firstHeading[i].innerHTML = newHeader;
        event.target.parentNode.replaceChild(firstHeading[i], userInput);
      });
    }
    if (secondHeading[i]) {
      // "select" eventListener
      function getSelectedText() {
        let text = "";
        if (typeof window.getSelection != "undefined") {
          text = window.getSelection().toString();
        } else if (
          typeof document.selection != "undefined" &&
          document.selection.type == "Text"
        ) {
          text = document.selection.createRange().text;
        }
        return text;
      }
      secondHeading[i].addEventListener("dblclick", event => {
        event.target.innerHTML = getSelectedText();
      });
    }
  }
}

function myImg(arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i].addEventListener("mouseenter", event => {
      event.target.style.width = "80%";
      event.target.style.height = "80%";
    });
  }
}

invCtn.addEventListener("scroll", event => {
  event.target.style.overflowY = "scroll";
});

function myDiv(arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i].addEventListener("load", event => {
      event.target.style.backgroundColor = "red";
    });
  }
}

function myBtn(arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i].addEventListener("resize", event => {
      event.target.style.width = "50%";
      event.target.style.height = "20%";
    });
  }
}

myHeadings(firstHeading);
myHeadings(secondHeading);
myImg(imgLinks);
myDiv(destDivs);
myBtn(signUpBtn);
