// Your code goes here
const mainBody = document.querySelector('body')
const allImages = document.querySelectorAll('img')
const navBar = document.querySelector('.main-navigation')

navBar.addEventListener('click', thisIsTheNav)

document.addEventListener('keydown', () =>{
    changeToRed(mainBody)
})
document.addEventListener('keyup', () =>{
    revertRed(mainBody)
})


allImages.setAttribute('height', 500)
allImages.setAttribute('width', 500)

document.addEventListener('scroll', () => {

})




function changeToRed(v) {
    v.style.color = 'red';
}

function revertRed(v) {
    v.style.color = 'black'
}

function thisIsTheNav() {
    alert ("This is the nav bar!");
}

