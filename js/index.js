// Your code goes here

let body = document.querySelector('body')
let miniBus = document.querySelector('.miniBus')
let logoHeader = document.querySelector('.logo-heading')
miniBus.style.width=('76px')
miniBus.style.position = ('absolute')
logoHeader.style.zIndex = ('1')
logoHeader.style.backgroundColor = ('white')
logoHeader.style.paddingTop = ('15px')
logoHeader.style.paddingBottom = ('15px')

logoHeader.addEventListener('dblclick', dblClick)

function busAlert(){
    alert('Bye Bus')
}

function dblClick (){
   miniBus.style.position = ('relative')

   
    setTimeout(() => {

       miniBus.style.position = ('absolute')
       
    }, 3000)
}

//LOAD FUNCTION
function winLoadFunc(){
    alert('Thank you for visiting our site')
}

let loader = body.addEventListener('load', winLoadFunc)

let navLink = document.getElementsByTagName('a')

//Prevent Default / Click / mouseover / mouseout
for(let i = 0; i < navLink.length; i++) {
 let navIter = navLink[i]
    navIter.addEventListener('click', preventDefault )
    navIter.addEventListener('mouseover', navOver)
    navIter.addEventListener('mouseout', navOut)
    navIter.addEventListener('mouseout', navOut)

    function navOver() {
        navIter.style.color = ('blue')
        navIter.style.fontWeight = ('900')
    }
    function navOut() {
        navIter.style.color = ('')
        navIter.style.fontWeight = ('')
    }
}

function preventDefault(e){
    e.preventDefault();
}



// script tag
let script = document.createElement('script')
let btnBttm= document.getElementsByClassName('btn')


/**STOPS PROPAGATION OF BUTTONS */
for(let i = 0; i < btnBttm.length; i++) {
    btnBttm[i].addEventListener('click', btnProp)
}

function btnProp(e) {
    e.stopPropagation();
}

btnBttm[0].setAttribute('id', 'btn1')
btnBttm[1].setAttribute('id', 'btn2')
btnBttm[2].setAttribute('id', 'btn3')


let btnId1 = document.getElementById('btn1').addEventListener
('click', btnClick1)

function btnClick1() {
    console.log('btn 1 clicked')

}

let btnId2 = document.getElementById('btn2').addEventListener
('click', btnClick2)

/*** BTN 2 CLICK EVENTS PARAMETER ****/


function btnClick2() {
console.log('btn 2 clicked')
}


let btnId3 = document.getElementById('btn3').addEventListener
('click', btnClick3)
function btnClick3() {
    console.log('btn3 clicked' )
}
let cta = document.querySelectorAll('div')

let div1 = cta[1];

let boxCta = document.createElement('div')
boxCta.setAttribute('class', 'boxClass')
let boxClass = document.getElementsByClassName('boxClass')


let boxNew = document.createElement('form')
boxNew.setAttribute('id', 'newBox')
boxNew.setAttribute('class', 'form')
boxNew.style.width = ('500px')
boxNew.style.height = ('600px')
boxNew.style.backgroundColor =('lightgrey')
boxNew.style.marginLeft = ('175px')
boxNew.style.marginTop = ('32px')
boxNew.style.marginBottom = ('32px')
boxNew.style.paddingLeft = ('120px')
boxNew.style.paddingTop = ('32px')

let signUpH = document.createElement('h2')
signUpH.textContent = ('Sign Up')
signUpH.style.marginLeft = ('65px')
let inputValue = document.getElementsByTagName('input')

/**NAME INPUT FIELD */
let inputName = document.createElement('input')
inputName.setAttribute('id', 'inputNameId')
inputName.setAttribute('type','text')
inputName.setAttribute('value','Name')
inputName.style.height = ('32px')
inputName.style.width = ('250px')
inputName.style.marginRight = ('75px')
inputName.style.marginTop = ('15px')


/**Email INPUT FIELD */
let inputEmail = document.createElement('input')
inputEmail.setAttribute('id', 'inputEmailId')
inputEmail.setAttribute('type','email')
inputEmail.setAttribute('value','Email')
inputEmail.style.height = ('32px')
inputEmail.style.width = ('250px')
inputEmail.style.marginTop = ('15px')

/**Phone INPUT FIELD */
let inputPhone = document.createElement('input')
inputPhone.setAttribute('id', 'inputPhoneId')
inputPhone.setAttribute('type','phone')
inputPhone.setAttribute('value','Phone')
inputPhone.style.height = ('32px')
inputPhone.style.width = ('250px')
inputPhone.style.marginTop = ('15px')


let selectBox = document.createElement('select')
selectBox.style.width =('250px')
selectBox.style.height =('32px')
selectBox.style.marginTop = ('32px')

let option1 = document.createElement('option')
let option2 = document.createElement('option')
option1.textContent = ('Phone')
option2.textContent = ('Email')

option1.setAttribute('value', 'Phone')
option2.setAttribute('value', 'Email')

let signBtn = document.createElement('button')
signBtn.textContent = ('Submit')
signBtn.style.fontSize = ('17px')
signBtn.style.width = ('150px')
signBtn.style.height = ('42px')
signBtn.style.marginLeft =('48px')
signBtn.style.marginTop =('48px')


let form = document.querySelector('form')

/** mouse down / mouse leave /input */
inputName.addEventListener('mousedown', inputClick)
inputName.addEventListener('mouseleave' , inputOut)
inputName.addEventListener('input', inputLog)
inputName.addEventListener('keydown', enterKey)

inputEmail.addEventListener('mousedown', inputClick)
inputEmail.addEventListener('mouseleave', inputOut)
inputEmail.addEventListener('input', inputLog)
inputEmail.addEventListener('keydown', enterKey)


inputPhone.addEventListener('mousedown', inputClick)
inputPhone.addEventListener('mouseout', inputOut)
inputPhone.addEventListener('input', inputLog)
inputPhone.addEventListener('keydown', enterKey)

/** focus select blur input  */
function inputClick(e) {
    e.target.focus()
    e.target.value = ('')
}


function inputOut(e) {
    e.target.select()
}

function inputLog(e) {
window.setTimeout(function() {
    value = event.target.value;
}, 1);
    console.log(e.target.value)
}

function enterKey (e) {
let enterKey = e.keyCode === 13
e.preventDefault();
console.log(enterKey)
}


//change input submit
selectBox.addEventListener('change', runEvent)
selectBox.addEventListener('input', runEvent)

signBtn.addEventListener('submit', runEvent)
signBtn.addEventListener('mouseup',submit)

function runEvent(e) {


    console.log(e.target.value)
    console.log(e.target.submit)
    e.preventDefault();
}

function submit() {
    console.log(inputName.value)
    console.log(inputEmail.value)
    console.log(inputPhone.value)
    console.log(selectBox.value)
    e.preventDefault();
}

script.append(winLoadFunc())
// body tag
body.setAttribute('onload', 'winLoadFunc()')
selectBox.appendChild(option1)
selectBox.appendChild(option2)

div1.append(boxCta)
boxCta.appendChild(boxNew)
boxNew.append(signUpH)
boxNew.append(inputName)
boxNew.append(inputEmail)
boxNew.append(inputPhone)
boxNew.append(selectBox)
boxNew.append(signBtn)




