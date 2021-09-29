// Your code goes here
const body = document.querySelector('body')
const logoHeading = document.querySelector('header .logo-heading')
const navigation = document.querySelector ('.nav')
const busImg = document.querySelector('.intro img')
function clickHeader(event) {
    event.target.innerHTML = "Really Fun Bus!!!"
    logoHeading.style.width = '100%'
    logoHeading.style.textAlign = 'center'
}
// 1
logoHeading.addEventListener('click',clickHeader)

function pressKey(event) {
    switch (event.key) {
        case 'a' :
            navigation.style.display = "flex"
            navigation.style.justifyContent = "space-evenly"
            navigation.style.backgroundColor = "lightgrey"
        break

        case 's' :
            navigation.style.display = "flex"
            navigation.style.justifyContent = "space-evenly"
            navigation.style.backgroundColor = "lightblue"
            navigation.style.fontSize = "2rem"
        break
        default :  navigation.style.display = ""
            navigation.style.justifyContent = ""
            navigation.style.backgroundColor = ""
            navigation.style.fontSize = ""
    }
}
//2
body.addEventListener('keydown',pressKey)


//3
busImg.addEventListener('mouseover',function(event){
    event.target.style.width = "200px"
    setTimeout(function() {
        busImg.style.width = ""
    }, 5000)
},false)

//4
const welcome = document.querySelector('.intro h2')
const capitaliz = function (event) {
    event.target.style.textTransform = 'capitalize'
}

welcome.addEventListener('dblclick',capitaliz)

//5
const divh2 = document.querySelector('.text-content h2')
const input = document.querySelector('input');
function selector (event) {
    divh2.style.innerHTML = event.target.value
}
input.addEventListener('change',selector)

// 6

const paragraph = document.querySelector('.intro p')

paragraph.addEventListener('mouseout',function(event){
    event.target.style.color = "blue"
})

//7

// const buttonCol = document.querySelectorAll('.btn')
// buttonCol.addEventListener('load',function(event){event.target.style.color = "green"})

//8

let aTags = document.querySelectorAll('a')
// aTags.addEventListener('select',function(event){
//     event.target.style.transform = 'rotate(80deg)'
// })

//9

let imgFocus = document.querySelector('.rounded')
imgFocus.addEventListener('focus',function(event){
    event.target.style.width ='100px'
})

// 10

const text = document.querySelector('.content-destination p')
text.addEventListener('mousemove',(event) => {
    event.target.style.backgroundColor = "yellow"
})

function paragation(event) {
    console.log(`pressed ${event.currentTarget.nodeName}`)
    event.preventDefault()
}
const h4selected = document.querySelector('.destination h4')
const destination = document.querySelector('.destination')
h4selected.addEventListener('click',paragation)
destination.addEventListener('click',paragation)