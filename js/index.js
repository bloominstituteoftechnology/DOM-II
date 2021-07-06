// Your code goes here

//1 Mouseover <h1> yellow up
const headerH1 = document.querySelector('h1');
// console.log(headerH1);
    headerH1.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = 'yellow'; 
    });
    headerH1.addEventListener('mouseleave', e => {
        e.target.style.backgroundColor = 'white';
    });

//2 Keydown <h4> "Sign Me Up!" 
//First note I'm using <div class="btn>Sign Me Up!</> as <button id = "launchButton">Launch!</button> from web guided project.I want to use "Esc" key 27 to leave/exit a modal as my Keydown e. To make it easy for myself I added the ID "LaunchButton".

//So... isolate all <div class="btn"> and assign id="signMeUpBtn" 
const divBtns = document.querySelectorAll('div.btn');
for (let i = 0; i<divBtns.length; i++){
    divBtns[i].setAttribute('id', "signMeUpBtn");
}
// console.log(`div btn`,divBtns);
// console.log(divBtns[1]);

//Handle click events on signMeUpBtn
//first step isolate all <buttons> with #signMeUpBtn ids just created above
const signMeUpBtn = document.querySelectorAll('#signMeUpBtn');
// console.log(`Sign Me Up ID's`,signMeUpBtn);
// console.log(`just one`, signMeUpBtn[1]);
//next generic function when they are clicked
signMeUpBtn.forEach(ele => {
    ele.onclick = function (e) {
    console.log(`${e.target.nodeName}`);
};} );

// this part is just for me to track bubbling & Propagation
// signMeUpBtn.forEach(elem => {
//     elem.addEventListener('click', function (e){
//         console.log(`${e} NEW WAY `);
//         console.log(`
//         Event: TimeStamp ${Math.floor(e.timeStamp / 1000)}, 
//         Event: Type ${e.type}, 
//         Event: Target ${e.target.nodeName}
//         `);
//     });
// });

// Next I set up a modal with a Parent div defaulted to off and appended it to the <section class="content-section"...>
//Step 1 isolate the <section> desired
const contentPick = document.querySelector(".content-pick");
// contentPick.style('position:relative');
// console.log(`HERE IS THE CONTENT SECTION`,contentPick);
//Step 2 create basic modal div
const newParentDivModal = document.createElement('div');
newParentDivModal.classList.add('modal');
newParentDivModal.classList.add('off');
newParentDivModal.style= 'display:none';
//Step 3 append modal div to <section class="content-...>"
contentPick.appendChild(newParentDivModal);
// console.log(newParentDivModal);

//added a child1 div for opacity 
const divChild1 = document.createElement('div');
divChild1.classList.add('modal-opacity');
newParentDivModal.appendChild(divChild1);
// console.log(divChild1);

//Added a child2 div for modal dialog
const divChild2 = document.createElement('div');
divChild2.classList.add('modal-dialog');
newParentDivModal.appendChild(divChild2);
// console.log(divChild2);

//Add h4 message "Are You Sure?" append to div dialog
const messageSure = document.createElement('h4');
messageSure.setAttribute('id', "youSure");
divChild2.appendChild(messageSure);
messageSure.textContent = "Are You Sure?";
// console.log(messageSure);

//Add ConfirmationButton Yes & append to div dialog
const buttonY = document.createElement('button');
buttonY.setAttribute('id', "confirmationButton");
buttonY.textContent= `Yes, let's rock`;
divChild2.appendChild(buttonY);
// console.log(buttonY);

//Add CancelButton No & AppendChild to div dialog
const buttonN = document.createElement('button');
buttonN.setAttribute('id', "cancelButton");
buttonN.textContent = "No take me back";
divChild2.appendChild(buttonN);
// console.log(buttonN);

//Add <h1 class="report success off">
const reportSuccessOffh1 = document.createElement('h1');
reportSuccessOffh1.classList.add('report');
reportSuccessOffh1.classList.add('success');
reportSuccessOffh1.classList.add('off');
reportSuccessOffh1.style = "display:none";
reportSuccessOffh1.textContent = "Signed Up --> Coming Soon!";
contentPick.appendChild(reportSuccessOffh1);
// console.log(reportSuccessOffh1);

//Add <h1 class="report failure off">
const reportfailureOffh1 = document.createElement('h1');
reportfailureOffh1.classList.add('report');
reportfailureOffh1.classList.add('failure');
reportfailureOffh1.classList.add('off');
reportfailureOffh1.style = "display:none";
reportfailureOffh1.textContent = "Process Canceled. You are NOT signed up!";
// console.log(reportfailureOffh1);

//MAY use this to set up separate messages
// const signMeUph4 = document.querySelectorAll('h4');
// console.log(signMeUph4);
// signMeUph4.forEach((elem) => {
//     elem.classList.add('launchAlert');
// });
// signMeUph4[0].classList.add('message0');
// signMeUph4[1].classList.add('message1');
// signMeUph4[2].classList.add('message2');

//testing propagation
// document.addEventListener('click', function(event) {
//     if (event.target === signMeUpBtn) {
//         console.log('clicked on the launch button');
//     } else {
//         console.log('click somewhere else');
//     }
// });

//Generic Function to Launch Modal
function launchModal() {
    //show modal
    newParentDivModal.classList.remove('off');
    newParentDivModal.style = 'display:block';
    //remove old success/failure message
    reportSuccessOffh1.classList.add('off');
    reportfailureOffh1.classList.add('off');
}

signMeUpBtn[0].addEventListener('click', launchModal);

//Funtion to confirm the Sign Up. 
//Should close the modal & Display success feedback
//should be a listener for clicks on the confirmation button
function confirmChoice() {
    newParentDivModal.classList.add('off');
    newParentDivModal.style= 'display:none';//HELPME
    reportSuccessOffh1.classList.remove('off');//HELPME
    reportSuccessOffh1.style = 'display:block';
    // console.log(reportSuccessOffh1);
    // reportSuccessOffh1.style = 'display:absolute';//HELPME
}
buttonY.addEventListener('click', confirmChoice);

//Function to cancel Sign Up
// Should close the modal & display a failure report
//Add it as a listener for clicks on the cancellation buttonN
function cancelSignUp() {
    newParentDivModal.classList.add('off');
    newParentDivModal.style= 'display:none';//HELPME
    reportfailureOffh1.classList.remove('off');//HELPME
    reportfailureOffh1.style = 'display:block';
}
buttonN.addEventListener('click', cancelSignUp);

//KEYDOWN
// function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.
//Find all keycodes http://keycode.info/ qqqq
function escKey(e) {
    if (e.keyCode === 27) { // escape key http://keycode.info/
    newParentDivModal.classList.add('off');
    newParentDivModal.style = 'display:none';
    }
}
document.addEventListener('keydown', escKey);


// Wheel event to Toggle between images
// 1) Create an id for existing img 1
// 2) Create a second image, style, set to dispay:none, append to .intro
// 3) create helper function that counts events fired
// 4) creat wheel event that sets display:on for img1 even numbered events (hiding second img) and sets display:off for odd number of events (revealing second img).

//1) Create an id for existing img 1
// const header = document.querySelector('header');
const headerImg1 = document.querySelector('header img');
headerImg1.setAttribute('id', "img1");
headerImg1.style.display = "absolute";
// console.log(headerImg1);

//2) Create a second image, style, set to dispay:none, append to .intro
const intro = document.querySelector(".intro");
// console.log(intro);
const headerImg2 = document.createElement('img');
headerImg2.setAttribute('src', "https://buff.ly/2TxtE5y");
headerImg2.setAttribute('alt', "Yellow VW Bus");
headerImg2.setAttribute('id', "img2");
headerImg2.style.height = "50px";
headerImg2.style = ("align-items: center");
headerImg2.style.display = "absolute";
headerImg2.style = 'display:none';
intro.prepend(headerImg2);
// console.log(`Here is headerImg2`, headerImg2);

//3) Helper Function to count wheel events
// let eventCount = 0;
// function countEvents (element, event) {
//     element.addEventListener(event, () => {
//         eventCount = eventCount + 1;
//         //https://buff.ly/3jHZgjK --> for later I might display the counter on the browser 
//         console.log(`inside the Function the count is `,eventCount);
//     });
//     return eventCount;
// }

// console.log(`EVENT COUNT`, countEvents(intro, "wheel"));
// let currentCount = (countEvents(intro, "wheel"));
// console.log(`Outside the function the Count is `,currentCount);
// console.log(`Outside the function the Count is `,currentCount);
// console.log(`Outside the function the Count is `,currentCount);
// console.log(`Outside the function the Count is `,currentCount);


//4) Wheel eventListner for each image
const img1 = document.querySelector("#img1");
const img2 = document.querySelector('#img2');
// console.log(`Here is Img1`,img1);

let eventCount = 0;

function countEvents (element, e) {
    element.addEventListener(e, () => {

        //https://buff.ly/3jHZgjK --> for later I might display the counter on the browser 
        console.log(`inside the Function the count is `,eventCount);
        eventCount = eventCount + 1;

        if((eventCount <= 1)) {//count = 0
           img1.style = "display:none";
            // console.log('Count Zero img1 displayed');
            
        }
        else if((eventCount  %2) === 1){//count = odd number
            img1.style = "display: none";
            img2.style = "display:block";
            // console.log('Count is ODD img1 removed');
            
        } 
        else {//count = even
            img1.style = "display:block";
            img2.style = "display:none";
            // console.log('Count is EVEN img1 displayed');
            
        }
        
    });
}

    img1.addEventListener('wheel', e => {
        const introCount = (countEvents(intro, "wheel"));
         console.log(`the current  wheel count is `, countEvents(img1, "Wheel"));
        // let wheelCount = countEvents(img1, "wheel");
        // console.log(`Here is Img2`,img2);

    });

//LOAD event ========================
//Plan...add "Reload" to navigation option

//1) create new <div> with class="controls" and append to <nav>
const divControls = document.createElement('div');
const nav = document.querySelector('nav');
divControls.classList.add('controls');
nav.appendChild(divControls);
// console.log(divControls);

//2) Create <button id="reload" type="button">Reload</button>
const reloadBtn = document.createElement('button');
divControls.appendChild(reloadBtn);
reloadBtn.textContent = "Reload";
reloadBtn.setAttribute('id', "reload");
// console.log(reloadBtn);

//3) isolate #reload button and add event listener
const reload = document.querySelector('#reload');
reload.addEventListener('click', () => {
  window.setTimeout(() => {
      window.location.reload(true);
  }, 200);
});
window.onload = (event) => {
    console.log('page is fully loaded');
  };

//ONFOCUS EVENT===================
//Plan create focus event on a new form field. Perhaps for email capture or something. 
//The focus event fires when an element has received focus. The main difference between this event and focusin is that focusin bubbles while focus does not.

// 1)  create javascrip for the HTML <input type="text" value="CLICK HERE">
const inputField = document.createElement('input');
const headerH2 = document.querySelector('header h2');
inputField.setAttribute('type', "text");
inputField.setAttribute('value', "Click Here");
headerH2.appendChild(inputField);
inputField.style = "margin:2%";
console.log(inputField);

//2  The onfocus property of the GlobalEventHandlers mixin is an event handler that processes focus events on the given element.The focus event is raised when the user sets focus on an element.

let input = document.querySelector('input');

input.onblur = inputBlur;
input.onfocus = inputFocus;

function inputBlur() {
  input.value = 'Whoa, wait Email address?';
}

function inputFocus() {
  input.value = 'Email here';
}


