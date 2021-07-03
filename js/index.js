// Your code goes here

//1 Mouseover <h1> yellow up
const headerH1 = document.querySelector('h1');
console.log(headerH1
    );
    headerH1.addEventListener('mouseover', event => {
        event.target.style.backgroundColor = 'yellow'; 
    });
    headerH1.addEventListener('mouseleave', event => {
        event.target.style.backgroundColor = 'white';
    });

//2 Keydown <h4> "Sign Me Up!"
//Step 1 add modal
const newParentDivModal = document.createElement('div');
console.log(newParentDivModal);
newParentDivModal.classList.add('modal');
newParentDivModal.classList.add('off');

const divChild1 = document.createElement('div');
console.log(divChild1);
divChild1.classList.add('modal-opacity');
newParentDivModal.appendChild(divChild1);

const divChild2 = document.createElement('div');
console.log(divChild2);
divChild2.classList.add('modal-dialog');
newParentDivModal.appendChild(divChild2);

const messageSure = document.createElement('h4');
messageSure.setAttribute('id', "youSure");
console.log(messageSure);


const buttonY = document.createElement('button');
console.log(buttonY);
buttonY.setAttribute('id', "confirmationButton");
buttonY.textContent= `Yes, let's rock`;

const buttonN = document.createElement('button');
buttonN.setAttribute('id', "cancelButton");
buttonN.textContent = "No take me back";
console.log(buttonN);


// const signMeUph4 = document.querySelectorAll('h4');
// console.log(signMeUph4);
// signMeUph4.forEach((elem) => {
//     elem.classList.add('launchAlert');
// });
// signMeUph4[0].classList.add('message0');
// signMeUph4[1].classList.add('message1');
// signMeUph4[2].classList.add('message2');

