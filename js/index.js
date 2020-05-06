// Your code goes here

// making a function that grabs elements

function get(selector){
    return document.querySelector(selector)
}
function getAll(selector){
    return Array.from(document.querySelectorAll(selector))
}
let navContainer = get('.nav-container')
let logoHead = get('.logo-heading')
let bodyWheel = get('.home')
let headerDrag = getAll('h2')
let bodyColor = get('body')
let getForm = get('.form input')
let getParagraphs = getAll('p')
let clickables = getAll('a')

// * [ ] `mouseover`

function turnShark(event){
    navContainer.style.backgroundColor = '#17A2B8';
}

navContainer.addEventListener('mouseover', turnShark)


// * [ ] `keydown`

function turnYellow(event){
    if(event.key === "k"){
        logoHead.style.color = 'yellow';
        
    }
}

document.addEventListener('keydown', turnYellow)
// * [ ] `wheel`

function turnGrey(event){
    
    bodyWheel.style.backgroundColor = 'lightgrey'
}

bodyWheel.addEventListener('wheel', turnGrey)

// * [ ] `drag / drop`

// make headings draggable

headerDrag.forEach(item => {item.setAttribute('draggable', true)});

function dragHeading(event){
    headerDrag.forEach((item) => item.style.color = 'red')
}

headerDrag.forEach(element => {element.addEventListener('drag', dragHeading)});

// * [ ] `load`


// headerIntro.addEventListener('loadstart', makeColorChange)

// * [ ] `focus`


function changeForm(event){
    
    getForm.style.border = 'red 2px solid'
}
getForm.addEventListener('focus', changeForm)

// * [ ] `resize`



// * [ ] `scroll`

function turnGreen(event){
    navContainer.style.backgroundColor = 'green'
}
window.addEventListener('scroll', turnGreen)

// * [ ] `select`
function turnRed(event){
    getForm.style.color = 'red'
}

getForm.addEventListener('select', turnRed)

// * [ ] `dblclick`

function addBorder(event){
    clickables.forEach((element) => element.style.border = 'orange 2px solid')
}

clickables.forEach(item => {item.addEventListener('dblclick', addBorder)});