// 1. Mouseover

let mouse = document.querySelector('.logo-heading')
mouse.addEventListener("mouseenter", function( event ) {   
    event.target.style.color = "blue";
    setTimeout(function() {
        event.target.style.color = "orange";
      }, 500);
    }, false);

// 2. The event's default action is to copy the selection (if any) to the clipboard.

    const source = document.querySelector('.intro p');

    source.addEventListener('copy', (event) => {
        const selection = document.getSelection();
        event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
        event.preventDefault();
    });

// 3. Click counter -- On image

const clickcounter = document.querySelector('.intro img');

clickcounter.addEventListener('click', event => {
  clickcounter.innerHTML = console.log(`Click count: ${event.detail}`);
});

// 4. Console.log before print screen comes up

window.addEventListener('beforeprint', (event) => {
    console.log('Before print');
  });

// 5. Console.log after print screen is exited.

window.addEventListener('afterprint', (event) => {
    console.log('After print');
  });

// 6. When disconnecting wifi/network and then reconnecting it displays that you were reconnected.

window.addEventListener('online', (event) => {
    console.log("You are now connected to the network.");
});

// 7. Lost connection to the network

window.addEventListener('offline', (event) => {
    console.log("The network connection has been lost.");
});

// 8. Browswer specs after resizing of the window

const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;

// 9. Once page is loaded it displays that it has been loaded

window.addEventListener('load', (event) => {
    console.log('Everything is loaded');
  });

// 10.Log text on the website of the key being released

const log = document.getElementById('#log');

document.addEventListener('keyup', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}