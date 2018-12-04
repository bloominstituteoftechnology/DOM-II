const imgs = document.querySelectorAll("img");
const body = document.querySelector("body");
const navLinks = document.querySelectorAll("nav a");

// ===================== Window Events =============

window.addEventListener("load", e => alert("window has fully loaded"));

window.addEventListener("resize", e => alert(`Ooh, let's resize then`));

// ====================== Keyboard Events ===========

window.addEventListener("keypress", e =>
  confirm(`You just pressed the ${e.key} key.`)
);

window.addEventListener("copy", e => {
  let confirmed = confirm("Ooh, you really tryinna take my lorem like that?");
  if (confirmed) {
    e.target.style.visibility = "hidden";
    alert("You sure are crazzy tryinna take my lorem. Well, now you cant");
  } else {
    alert(
      "Good, and i hope you learned your lesson about takin' peoples stuff! Remember, all text in red are mine"
    );
    body.style.color = "red";
  }
});

window.addEventListener("cut", e =>
  alert(`You really must want this lorem text...You know they're free, right?`)
);

// ============= Mouse Events ====================

window.addEventListener("mouseover", e => (e.target.style.fontSize = "2rem"));

window.addEventListener("mouseout", e => (e.target.style.fontSize = ""));

const btns = document.querySelectorAll(".btn");
btns.forEach(btn => {
  btn.addEventListener("click", e => {
    // ====== Puttin a stop to all propagation ========
    e.stopPropagation();
    e.target.style.border = "5px solid black";
  });
});

window.addEventListener("click", e => {
  e.target.style.border = "1px solid red";
});

imgs.forEach(img =>
  img.addEventListener("dblclick", e => {
    e.stopPropagation();
    img.classList.toggle("dblclicked");
  })
);

imgs.forEach(img =>
  img.addEventListener("dragstart", e =>
    alert("This isn't the site for free images...crazy, this one.")
  )
);

//=================== Prevent Default =================

navLinks.forEach(link =>
  link.addEventListener("click", e => {
    e.preventDefault;
    e.target.style.color = "goldenrod";
  })
);
