let variableFive = document.querySelector('.btn')
    variableFive.addEventListener('click', (event) => {
        event.preventDefault();     
                                 //prevent default stops default function of object
    })

let variableSix = document.querySelector('footer.footer')
    variableSix.addEventListener('click', (event) => {
        variableSix.style.backgroundColor = 'red'   //red should not fire because of propogration
        
    })


let variableSeven = document.querySelector('.intro')
    variableSeven.addEventListener('click', (event) => {
        variableSeven.style.backgroundColor = 'orange'    //orange should not fire because of propogation. Add true variable to make it fire first.
    })


let variableEight = document.querySelector('p')
variableEight.addEventListener('click', (event) => {
    variableEight.style.backgroundColor = 'orange'
    event.stopPropagation();})



let variableOne = document.querySelector('body')

let variableTwo = document.querySelector('nav a')

let variableThree = document.querySelector('h1')



variableOne.addEventListener('mouseover', (event) => {
    variableOne.style.backgroundColor = 'blue';
})

variableOne.addEventListener('mousedown', (event) => {
    variableOne.style.backgroundColor = 'green';
})

variableOne.addEventListener('keydown', (event) => {
    variableOne.style.backgroundColor = 'red';
}) 

variableTwo.addEventListener('dragend', (event) => {
    variableTwo.style.backgroundColor = 'orange';
}) 

variableOne.addEventListener('mouseup', (event) => {
    variableOne.style.backgroundColor = 'purple';
})

variableThree.addEventListener('wheel', (event) => {
    variableThree.style.fontSize = '100px';
})

variableTwo.addEventListener('click', (event) => {
    alert("you broke the site!")
})

variableThree.addEventListener('dblclick', (event) => {
    variableThree.textContent = "You changed me!";
})

variableTwo.addEventListener('drag', (event) => {
    variableTwo.textContent = "stop moving me!";
})

variableTwo.addEventListener('copy', (event) => {
    variableTwo.textContent = "copied";
})






