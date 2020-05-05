// Your code goes here

// making a function that grabs elements

function get(selector){
    return document.querySelector(selector)
}

let navContainer = get('.nav-container')
let logoHead = get('.logo-heading')
let bodyWheel = get('.home')

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
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`