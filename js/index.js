const navigationAnchors = document.querySelectorAll(".nav-container .nav .nav-link");
const images = document.querySelectorAll("img");
const body = document.querySelector("body");
const headings = document.querySelectorAll("h2");

navigationAnchors.forEach(function(a) {
    a.addEventListener("mouseover", function(event){
        if(event.target.style.color === "") {
            event.target.style.color = "#92C5C9";
        } else {
            event.target.style.color = "";
        }
    })
    a.addEventListener("click", function() {
        preventDefault();
    })
})

headings.forEach(function(h2) {
    h2.addEventListener("mouseover", function(event){
        if(event.target.style.color === "") {
            event.target.style.color = "#366F4E";
        } else {
            event.target.style.color = "";
        }
    })
})

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  alert('keydown event\n\n' + 'key: ' + keyName);
});

const MouseWheelHandler = function(e) {
    body.classList.add("noScroll");
    var e = window.event;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    this.style.width = Math.max(100, Math.min(this.width + (30 * delta))) + "px";

    this.addEventListener("mouseleave", function() {
        body.classList.remove("noScroll");
    })
}

images.forEach(function(img) {
    img.addEventListener("mousewheel", MouseWheelHandler, false);
    img.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
})

let dragImage1 = document.querySelector(".img1");
let dragImage2 = document.querySelector(".img2");
const containers = document.querySelectorAll(".text-content");

containers.forEach(function(container) {
  dragImage1.addEventListener("dragstart", function() {
    container.addEventListener("drop", drop1);
    container.addEventListener("dragover", dragover);
    container.addEventListener("dragenter", dragenter);
    container.removeEventListener("drop", drop2);
  })
  dragImage2.addEventListener("dragstart", function() {
      container.addEventListener("drop", drop2);
      container.addEventListener("dragover", dragover);
      container.addEventListener("dragenter", dragenter);
      container.removeEventListener("drop", drop1);
  })
})

function dragover (event) {
  event.preventDefault();
}
function dragenter (event) {
  event.preventDefault();
}
function drop1 (event) {
  event.target.append(dragImage1);
}
function drop2 (event) {
  event.target.append(dragImage2);
}

window.addEventListener("load", function(event) {
    alert("All resources finished loading!");
  });

  window.addEventListener("resize", function() {
    let w = window.outerWidth;
    let h = window.outerHeight;
    let txt = "Window size: width=" + w + ", height=" + h;
    console.log(txt);
  })

  window.addEventListener('scroll', function(event) {
    console.log(window.scrollY);
});

buttons = document.querySelectorAll(".btn");

const buttonSignUpHandler = function() {
    var form = document.createElement("form");
    form.setAttribute('class',"form");
    form.setAttribute('method',"post");
    form.setAttribute('action',"submit.php");

    var name = document.createElement("input");
    name.setAttribute('type',"text");
    name.setAttribute('value',"Full Name");

    var phone = document.createElement("input");
    phone.setAttribute('type',"text");
    phone.setAttribute('value',"Phone Number");

    var submit = document.createElement("input");
    submit.setAttribute('type',"submit");
    submit.setAttribute('value',"Submit");

    form.appendChild(name);
    form.appendChild(phone);
    form.appendChild(submit);

    document.getElementsByClassName('home')[0].appendChild(form);
}

buttons.forEach(function(btn) {
    btn.addEventListener("click", buttonSignUpHandler);
})
const bottomBoxes = document.querySelectorAll(".destination");
const bottomHeadings = document.querySelectorAll("h4");
// bottomBoxes.forEach(function(dest) {
//     dest.addEventListener("click", erase);
// })
bottomHeadings.forEach(function(h4) {
    h4.addEventListener("click", erase);
})

function erase(event) {
    event.target.style.display = 'none';
}

