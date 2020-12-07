// Your code goes here
// 1 mouseover
const nav = document.querySelectorAll(".nav-link")
nav.forEach(navLink => {
    navLink.addEventListener('mouseover', (event) => {
        event.target.style.color ="gray"
        setTimeout(function(){
            event.target.style.color = "";

        },500);
    },false)

})
// 2 double click for images 
const image = document.querySelectorAll('img')
image.forEach(imge => {
    imge.addEventListener('dblclick', (event)=>{
        imge.style.transform ="scale(.9)";
        imge.style.transition = "all .6s"
        
    })
})

// 3 focus
const password = document.querySelector('input[type="password"]');
password.addEventListener('focus', (event) => {
    event.target.style.background ='pink';
});
//
function logSelection(event) {
    const log = document.getElementById('text-content');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
  }
  
  const input = document.querySelector('input');
  input.addEventListener('select', logSelection);
  // 4 online
  window.addEventListener('online', (event) => {
      console.log("You are connected!")
      
  })
// 5 resize
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
 
}

window.onresize = reportWindowSize;

function logSubmit(event) {
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
  }
  
  const form = document.getElementById('form');
  const log = document.getElementById('log');
  form.addEventListener('submit', logSubmit);
// 6 copy and paste 
const source = document.querySelector('div.source');

source.addEventListener('cut',(event)=> {
    const selection= document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    selection.deleteFromDocument();
    event.preventDefault();
})
const client = new XMLHttpRequest();
client.addEventListener('timeout', () => {
    console.error("Timeout!!");
})
// 7 Offline
window.addEventListener('offline', (event) => {
    console.log("the newwork is offline")
})
// 8 reset button 
function logReset(event) {
    log.textContent = `Form reset! Time stamp: ${event.timeStamp}`;
  }
const forms = document.getElementById('form');
const logs = document.getElementById('log');
form.addEventListener('reset', logReset);
// 9 close
exampleSocket.addEventListener('close', (event) => {
    console.log('connection is has been closed sucessfully')
})
// 10start vide
const video = document.querySelector('video');

video.addEventListener('play', (event) => {
    console.log ('this is true and video will play')
})