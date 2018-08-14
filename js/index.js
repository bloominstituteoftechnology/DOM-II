// Your code goes here

function select(selector) {
    return document.querySelector(selector);
}

function selects(selector) {
    return Array.from(document.querySelectorAll(selector));
}

const aTagArray = Array.from(document.querySelectorAll('a'));

// *** loop over a tags and apply color changes on specified events ***
aTagArray.map(a => {
    // *** MOUSE ENTER ***
    a.addEventListener('mouseenter', function (e) {
        e.target.style.color = "green";
    });

    // *** MOUSE LEAVE ***
    a.addEventListener('mouseleave', function (e) {
        e.target.style.color = "black";
    });
});

const btnArray = Array.from(document.querySelectorAll('.btn'));

btnArray.map((btn, i) => {
    // *** CLICK *** first button (is actually an anchor link tag)
    if(i === 0){
        btn.addEventListener('click', function (e) {
            if(e.view.confirm("*** You are leaving the page. Please press okay to confirm!! ***")){
                btn.setAttribute('href', 'http://www.funbus.com/');
                btn.style.textDecoration = 'none';
            }

        })
    }

    // *** DOUBLE CLICK *** second button (is actually a div)
    if(i === 1){
        btn.addEventListener('dblclick', function (e) {
            const card2Title = document.querySelector('#cardTitle-2');
            const card2Text = document.querySelector('#cardText-2');
            card2Title.classList.toggle('hide');
            card2Text.classList.toggle('hide');
        })
    }
});

// *** RESIZE ***
let count = 0;
window.addEventListener('resize', function () {
    const resizeElement = select('#resizePage');
    console.log('resizing');
    let text = count += 1;
    resizeElement.innerText = "Resize event has been fired off " + text + " number of times.";
});

// *** SCROLL ***
window.addEventListener('scroll', function () {
   select('#offsetText').innerText = "Current scroll position is " + pageYOffset + "px on the Y axis. At 300px the container background should turn gray";
   if(pageYOffset >= 300){
       select('body').style.background = "rgba(0,0,0,0.5";
   } else {
       select('body').style.background = "#fff";
   }
});

// *** Change Event ***
const inputBox = select('#custom-h2-text');
inputBox.addEventListener('change', function () {
   const h1Logo = select('.logo-heading');
   h1Logo.innerText = inputBox.value;

   // *** Submit Event with preventDefault method ***
   const h1LogoForm = select('#h1-text-form');
    h1LogoForm.addEventListener('submit', function (e) {
        e.preventDefault();
    })
});

// *** LOAD ***
const lambdaIframe = select('#lambdaIframe');
lambdaIframe.addEventListener('load', function () {
    const loadedText = select('#iframe-loaded');
    loadedText.innerText = "Lambda School Iframe Loaded";
    loadedText.style = "font-size: 30px; font-weight: bold; text-align: center;"
});

// *** SELECT ***
const selectTextElement = select('#custom-h2-text');
selectTextElement.addEventListener('select', function () {
    const textSelected = select('#textSelected');
    textSelected.innerText = "You have select the text";
    console.log('selected');
});