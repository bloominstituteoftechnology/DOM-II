//  Create 10 unique event listeners.
// 1.    // Mouseover event
    const busImg = document.querySelector('.intro img');
    busImg.addEventListener("mouseover", function( event ) { 
    // change the img src
    event.target.src = "https://media.giphy.com/media/jVr176cSCNKda/giphy.gif";
    event.target.style.width = "200%";
    // reset the img src after a short delay
    setTimeout(function() {
        event.target.src = "img/fun-bus.jpg";
    }, 2500);
    }, false);
// 2.    // Keydown event (Press Enter)
    const navFunBus = document.querySelector("body");
    navFunBus.addEventListener("keydown", checkKey, false);
    function checkKey(key){
        if (key.keyCode == "13"){
            navFunBus.style.backgroundColor = "#b22222";
            footR.style.backgroundColor = "#b22222";
            navBar.style.backgroundColor = "#b22222";
            navBar.style.color = "white";
            introH2.style.color = "white";
            allPs.forEach(event => {
                event.style.color = "white";
            })
            allH2s.forEach(event => {
            event.style.color = "white";
            })
            allH4s.forEach(event => {
                event.style.color = "white";
            })
            buttonSelect.forEach(event => {
                event.style.backgroundColor = "#333";
            })
            navBarA.forEach(event => {
                event.style.color = "white";
            })
        }
    }
    const allPs = document.querySelectorAll('p');
    const allH2s = document.querySelectorAll('h2');
    const allH4s = document.querySelectorAll('h4');
    const buttonSelect = document.querySelectorAll('.btn');
    const footR = document.querySelector('.footer');
    const navBar = document.querySelector('.main-navigation');
    const navBarA = document.querySelectorAll('.main-navigation a');
// 3.    // Wheel event  
    function zoom(event) {
        event.preventDefault();
        scale += event.deltaY * -0.01; 
        // Restrict scale
        scale = Math.min(Math.max(.5, scale), 2); 
        // Apply scale transform
        introH2.style.transform = `scale(${scale})`;
        if (scale >= 1.5 || scale <= 1){
            introH2.style.margin = "10% 30%";
        }
    }
    const introH2 = document.querySelector('.intro h2');
    let scale = 1;
    introH2.onwheel = zoom;
// 4.    // Load event  
    window.addEventListener('load', () => {
        adventureAwaits[0].textContent = "Let's Go Everybody!";
        adventureAwaits[1].textContent = "Adventure Awaits Us All Friends!";
    });
    const adventureAwaits = document.querySelectorAll('.text-content h2');
// 5.    // Focus event 
    const pickDestination = document.querySelector('.content-destination h2');
    const addTextForm = document.createElement('form');
    const addTextInput = document.createElement('input');
    pickDestination.appendChild(addTextForm);
    addTextForm.appendChild(addTextInput);
    addTextInput.type = "text";
    addTextInput.placeholder = "    Your Destination Here";
    addTextInput.addEventListener('focus', (event) => {
        event.target.style.background = '#FFB6C1';    
    });
// 6.    // Resize event  
    const outputHeightWidth = document.querySelectorAll('.text-content p');
    function reportWindowSize() {
        adventureAwaits[0].textContent = "THE SIZE OF THE WINDOW HAS CHANGED!"
        outputHeightWidth[0].textContent = `THIS IS THE HEIGHT OF YOUR FUN BUS WINDOW: ${window.innerHeight}`;
        outputHeightWidth[1].textContent = `THIS IS THE WIDTH OF YOUR FUN BUS WINDOW: ${window.innerWidth}`;
    }
    window.onresize = reportWindowSize;
// 7.    // Select event      
    function mySelection(event) {
        const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
        adventureAwaits[1].textContent = `Adventure Awaits Us All Friends At ${selection}!`;
        }
    const input = document.querySelector('input');
    input.addEventListener('select', mySelection);
// 8.    // dblClick event 
const allImgs = document.querySelector('.img-content');
allImgs.addEventListener('dblclick', () => {
    allImgs.style.width = "25%";
});     
// 9.    // cut event (to CAPS)
addTextInput.addEventListener('cut', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    selection.deleteFromDocument();
    event.preventDefault();
});
// 10.    // Click event   
const clickIT = document.querySelector('nav');
clickIT.addEventListener('click', event => {
    clickIT.textContent = `CLICK IT OR TICKET: ${event.detail}`;
    clickIT.style.fontSize = "2em";
});