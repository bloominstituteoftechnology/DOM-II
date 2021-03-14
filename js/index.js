// Your code goes here

//mouseover 
let navItems = document.querySelectorAll('.nav-link')
navItems.forEach(function (element) {
    element.addEventListener('mouseover', turnPurple)
    function turnPurple(event) {
        event.target.style.color = 'purple'
        setTimeout(function () {
            event.target.style.color = "";
        }, 500);
    }
})
navItems.forEach(function (event) {
    event.style.color = 'pink'
})


//click
let navClick = document.querySelectorAll('.nav-link')
navClick.forEach(function (element) {
    element.addEventListener('click', changeNavColor)
    function changeNavColor(event) {
        event.target.stlye.color = 'green'
    }
})

//dblclick 
let doubleClick = document.querySelectorAll('.btn')
doubleClick.forEach(function (element) {
    element.addEventListener('dblclick', changeColor)
    function changeColor(event) {
        event.target.style.color = 'white'
        alert('Join Now')
    }
})
doubleClick.forEach(function (event) {
    event.style.color = 'black'
})

//wheel
let makeTextLarge = doument.querySelector('.h1')
makeTextLarge.addEventListener('wheel', function (event) {
    event.target.style.fontsize = '100px'
})




