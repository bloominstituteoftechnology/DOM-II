

// Your code here:
const logoSection = document.querySelector('h1');
const logoStan = document.createElement('img');
const headerEl = document.querySelector('h1');
const subHeadLine = document.createElement('h2');
const imgIn = document.querySelector(".intro img");
const imgOut = document.querySelector(".intro img");
const signUpBtn = document.querySelector('.destination')

// create a new LOGO element (IMAGE NOT SHOWING)
logoStan.src = '/stan.png'
// style the LOGO element 
logoStan.style.marginTop = '40px';
logoStan.style.marginRight = '20px';
logoStan.style.height = '42px';
logoStan.style.width = '42px';
logoStan.style.borderRadius = '50%';
// append the LOGO element
logoSection.prepend(logoStan);


// create a new H2 element (OK)
subHeadLine.textContent = 'Another Headline'
// style ...
subHeadLine.style.fontSize = "3rem"
subHeadLine.style.color = "slategrey"
subHeadLine.style.marginBottom = '20px';
// append ...
headerEl.appendChild(subHeadLine);


// Window E V E N T S * * * 
window.addEventListener('load', event => {
    console.log(`this page is loaded`)
});

let funBus = document.querySelector('h1, h2');
funBus.addEventListener('click', event => {
    alert('CONGRATULATIONS... You clicked the LOGO!')
})

// Navigation event (cant make it work)
// ____________________________________
// const nav = document.querySelector('.main-navigation');
// nav.addEventListener = function (event) {
//     console.log(`${event.type} yellow`)
// }

// Hero banner transform (OK)
imgIn.addEventListener("mouseenter", () => {
    imgIn.style.transform = "scale(1.1)";
    imgIn.style.transition = "all 0.5s";
})
imgOut.addEventListener("mouseleave", () => {
    imgOut.style.transform = "scale(1)";
})

// .forEach to loop all img and apply transform * * * (can't make it work)
// ________________________________________________
// const advIn = document.querySelectorAll("img");
// advIn.forEach("mouseenter", () => {
//     advIn.style.transform = "scale(1.1)";
//     advIn.style.transition = "all 0.5s";
// })
// const advOut = document.querySelectorAll("img");
// advOut.forEach("mouseleave", () => {
//     advOut.style.transform = "scale(1)";
// })

// Window scrolling + alert (VICTORY)
// window.addEventListener("scroll", () => {
//     console.log("window.scrollY", window.scrollY);
//     if (window.scrollY >= 10000) {
//       alert("Congratulations, you are a TOP SCROLLER");
//     }
//   });

// Sign me up 
signUpBtn.onclick = function () {
    console.log(`Fun in the sun`)
}
// .forEach all CTA buttons (cant make it work)
// ____________________________________________
// const signUpB = document.querySelectorAll('.content-pick')
// signUpB.forEach = function (event) {
//     console.log(`Fon ${event.type} in the sun`)
// };


// S K R E C H 
// _____________________________
// function simulateClick() {
//     var evt = new MouseEvent("click", {
//       bubbles: true,
//       cancelable: true,
//       view: window
//     });
//     var cb = document.getElement("destination"); //element to click on
//     var canceled = !cb.dispatchEvent(evt);
//     if(canceled) {
//       // A handler called preventDefault
//       alert("canceled");
//     } else {
//       // None of the handlers called preventDefault
//       alert("not canceled");
//     }
//   }
//   document.getElement(".btn").addEventListener('click', simulateClick);
