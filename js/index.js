// Your code goes here




//=====================1==================== nav bar
const topNav = document.querySelector('.main-navigation') 
topNav.addEventListener ('mousedown', (event) => {
    topNav.classList.toggle('fade')
})


//======================2====================== nav bar items
const navItems = document.querySelector('.nav-link')
navItems.addEventListener ('mouseenter', (event) => {
    event.preventDefault()
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
   signUpContent.style.color= 'blue'
})


//==================7================ h2
const introH2 = document.querySelector('.intro h2')
introH2.addEventListener ('click', (event) => {
    introH2.innerText="I know what to do, but I suck at being creative I guess"
})


//===================8============== img
const imgBigOne = document.querySelector('img')
imgBigOne.addEventListener ('mouseup', (event) => {
    imgBigOne.classList.toggle('change')
})


//===================9============= logo
const logoUpper = document.querySelector('.logo-heading')  
logoUpper.addEventListener ('contextmenu', (event) => {
    event.stopPropagation(); 
    logoUpper.style.color = "blue";

})

//===================10==============Footer
const footerBottom = document.querySelector('.footer')
footerBottom.addEventListener ('scroll', (event) => {
    footerBottom.style.color = "green";
})
