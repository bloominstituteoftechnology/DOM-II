// Your code goes here

//=====================1==================== nav bar
const topNav = document.querySelector('.main-navigation') 
topNav.addEventListener ('scroll', (event) => {
    topNav.classList.add('fade')
})

//======================2====================== nav bar items
const navItems = document.querySelectorAll('.nav a')
navItems.addEventListener ('mouseenter', (event) => {
    navItems.style.color = 'teal'
})


//====================3==================== let's go part
const upperContent = document.querySelector('.content-section')
upperContent.addEventListener ('dblclick', (event) => {
    upperContent.classList.add ('bold')
})


//==================4=====================adventure awaits part
const lowerContent = document.querySelector('.inverse-content')
lowerContent.addEventListener ('mouseleave', (event) => {
    lowerContent.classList.add ('bold')
})


//==================5========================= part with boat in cove img
const bottomContent = document.querySelector('.content-destination')
bottomContent.addEventListener ('wheel', (event) => {
    bottomContent.innerText="Go on vacation, take some photos, get crazy, get wild, let's party, and however that song fromt that annoying show goes.... yay."
})


//=================6======================== part with buttons inside
const signUpContent = document.querySelector('.content-pick')
signUpContent.addEventListener ('mouseover', (event) => {
    signUpContent.innerText="Go on vacation, take some photos, get crazy, get wild, let's party, and however that song fromt that annoying show goes.... yay."
})


//==================7================ btns
const btns = document.querySelectorAll('.btn')
btns.addEventListener ('click', (event) => {
    btns.classList.toggle 
    if (btn.innerText === 'Sign Me Up!') {
        return btn.innerText = 'You Just Signed Up'
      }
      btn.innerText = 'Sign Me Up!'
})


//===================8============== img
const imgBigOne = document.querySelector('img')
imgBigOne.addEventListener ('keydown', (event) => {
    imgBigOne.classList.toggle('change')
})


//===================9============= logo
const logoUpper = document.querySelector('.logo-heading')
logoUpper.addEventListener ('keyup', (event) => {
    logoUpper.style.font-size: 4rem;
})

//===================10==============Footer
const footerBottom = document.querySelector('.footer')
footerBottom.addEventListener ('click', (event) => {
    footerBottom.style.background-color: green;
})
