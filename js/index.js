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


//LOAD FUNCTION
function winLoadFunc(){
    alert('Thank you for visiting our site')
}


function dblClick (){
   miniBus.style.position = ('relative')   
    setTimeout(() => {
       miniBus.style.position = ('absolute')
       
    }, 3000)
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


let boxClass = document.getElementsByClassName('boxClass')
let boxNew = document.createElement('form')
let inputName = document.createElement('input')
let inputEmail = document.createElement('input')
let inputPhone = document.createElement('input')
let option1 = document.createElement('option')
let option2 = document.createElement('option')
let signUpH = document.createElement('h2')

boxCta.setAttribute('class', 'boxClass')

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


signUpH.textContent = ('Sign Up')
signUpH.style.marginLeft = ('65px')
let inputValue = document.getElementsByTagName('input')

/** INPUT FIELD STYLE*/
let inputField = (e, id, type, value) => {
e.setAttribute('id', id)
e.setAttribute('type',type)
e.setAttribute('value',value)
e.style.height = ('32px')
e.style.width = ('250px')
e.style.marginTop = ('15px')
}
/**Field Event */
let fieldEvent = (e) => {
    let inputClick = (e) => {
        e.target.focus()
        e.target.value = ('')
    }
    let inputOut = (e) => {
        e.target.select()
    }
    setTimeout(() => {
        miniBus.style.position = ('absolute')
     }, 3000)
    let inputLog = (e) => {
        window.setTimeout(() => {
            value = event.target.value;
        }, 1)
        console.log(e.target.event)
    }
    let enterKey = (e) => {
        let keyEnter = e.keyCode === 13
        e.preventDefault();
        console.log(keyEnter)
    }
    e.addEventListener('mousedown', inputClick)
    e.addEventListener('mouseout', inputOut)
    e.addEventListener('input', inputLog)
    e.addEventListener('keydown', enterKey)
}


inputField(inputName, 'name-id', 'text', 'Name')
inputField(inputEmail, 'email-id', 'email', 'E-mail')
inputField(inputPhone, 'phone-id', 'phone', 'Phone')

fieldEvent(inputName)
fieldEvent(inputEmail)
fieldEvent(inputPhone)

let selectBox = document.createElement('select')
selectBox.style.width =('250px')
selectBox.style.height =('32px')
selectBox.style.marginTop = ('32px')

option1.textContent = ('Phone')
option2.textContent = ('Email')

option1.setAttribute('value', 'Phone')
option2.setAttribute('value', 'Email')

let submitBtn = document.createElement('button')

let formSubmitBtn = (e) => {

}


submitBtn.textContent = ('Submit')
submitBtn.style.fontSize = ('17px')
submitBtn.style.width = ('150px')
submitBtn.style.height = ('42px')
submitBtn.style.marginLeft =('48px')
submitBtn.style.marginTop =('48px')

submitBtn.addEventListener('submit', runEvent)
submitBtn.addEventListener('mouseup',submit)

//change input submit
selectBox.addEventListener('change', runEvent)
selectBox.addEventListener('input', runEvent)


function runEvent(e) {
    console.log(e.target.value)
    console.log(e.target.submit)
    e.preventDefault();
}

function submit(e) {
    console.log(inputName.value)
    console.log(inputEmail.value)
    console.log(inputPhone.value)
    console.log(selectBox.value)

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
boxNew.append(submitBtn)




