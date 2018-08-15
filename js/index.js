// Your code goes here
console.log("Test!");

// variables to point to parts of DOM being changed
const mainPage = document.querySelector(".home");
const navigation = document.querySelector(".nav");
const logoHeading = document.querySelector(".logo-heading")
const headerIntro = document.querySelector(".intro");
const topImg = document.querySelector(".img-content")
const buttons = document.querySelectorAll(".btn");
const destination = document.querySelector(".destination-image");
//Multiple items to cache
const pText = document.querySelectorAll(".text-content");
const allH4Text = document.querySelectorAll("h4");
// Event Listeners
navigation.addEventListener('mouseover', (event) => {
  console.log("We sensed a mouse dancing above a link.");
  event.currentTarget.style.width = "80%";
  event.stopPropagation();
  });
  navigation.addEventListener('click', (event) => {
    event.preventDefault();
  });
logoHeading.addEventListener('click', (event) => {
  event.currentTarget.parentNode.style.color = "red";
  console.log("Ouch! That hurt!");
  console.log("Wait a minute, am I bleeding??");
  logoHeading.addEventListener('mouseleave', (event) => {
    event.currentTarget.parentNode.style.color = "pink";
    console.log("Be more careful next time!!!");
    event.stopPropagation();
  })
});
headerIntro.addEventListener('mouseover', (event) => {
  event.currentTarget.style.width = "110%";
  headerIntro.addEventListener('mouseleave', (event) => {
    event.currentTarget.style.width = "100%";
    event.stopPropagation();
  });
});
mainPage.addEventListener('keydown', (event) => {
  console.log("OI! You're pressing the keys too hard! STAHP");
});
headerIntro.addEventListener('dblclick', (event) => {
  console.log("I see you like to doubleclick. Me too.");
});

destination.addEventListener('mouseover', (event) => {
  event.currentTarget.parentNode.style.width = "600px";
});

buttons[0].addEventListener('mouseover', (event) => {
  event.currentTarget.style.width = "110%";

  buttons[0].addEventListener('mouseleave', (event) => {
    console.log("C'mon, why did you leave?");
    event.currentTarget.style.width = "200px";
    event.currentTarget.style.height = "45px";
    event.stopPropagation();
  })
});
buttons[1].addEventListener('mouseover', (event) => {
  event.currentTarget.style.width = "110%";
  buttons[1].addEventListener('mouseleave', (event) => {
    console.log("C'mon, why did you leave?");
    event.currentTarget.style.width = "200px";
    event.currentTarget.style.height = "45px";
    event.stopPropagation();
  })
});
  buttons[2].addEventListener('mouseover', (event) => {
    event.currentTarget.style.width = "110%";
    buttons[2].addEventListener('mouseleave', (event) => {
      console.log("C'mon, why did you leave?");
      event.currentTarget.style.width = "200px";
      event.currentTarget.style.height = "45px";
      event.stopPropagation();
    })
  });

  buttons[0].addEventListener('click', (event) => {
    event.currentTarget.textContent = "Let's Go!";
});

  buttons[1].addEventListener('click', (event) => {
event.currentTarget.textContent = "Let's Go!";
});
    buttons[2].addEventListener('click', (event) => {
event.currentTarget.textContent = "Let's Go!";
});

pText[1].addEventListener('focus', (event) => {
  event.currentTarget.style.color = "green";
})

document.addEventListener('keydown', (event) => {
  console.log(event);
  event.target.style.background = "blue";
})

document.addEventListener('dblclick', (event) => {
  event.target.style.color = "green";
})
