// Your code goes here

// 1 Mouseover event
const testNav = document.querySelector('.nav-link')
testNav.addEventListener('mouseover', () => {
  testNav.innerHTML = 'Travel'
})

// 2 MouseLeave arrow
testNav.addEventListener('mouseleave', () => {
  testNav.innerHTML = 'Home'
} )

// 3 scroll event(comment for testing others)
// const modifiedContainer = document.querySelector('.container')
// window.addEventListener('scroll', () => {
//   alert(`This alert is triggered by your scrolling`);
// })

// 4 Resize
const txtFunBus = document.querySelector('.logo-heading')
window.addEventListener('resize', () => {
  txtFunBus.innerHTML = 'Resizing'
})

// 5 Resizing stop(reset)
const txtReszing = document.querySelector('.container')
window.addEventListener('mouseover', () => {
  txtFunBus.innerHTML = 'Fun Bus'
})

// 6 Mouse Pressdown
const txtFunBusmosueDown = document.querySelector('.logo-heading') 
txtFunBusmosueDown.addEventListener('mousedown', () => {
  txtFunBus.innerHTML = 'Let go..'
})

// 7 Click 
const funBusNewBG = document.querySelector('.logo-heading')
funBusNewBG.addEventListener('click', () => {
  funBusNewBG.style.color = 'Red'
})


// 8 Mouseleave for (reset 1)
const funBusBgReset = document.querySelector('.logo-heading')
funBusBgReset.addEventListener('mouseleave', () => {
  funBusBgReset.style.color = 'Black'
})


// 9 Dblclick
const colorIntroContent = document.querySelector('.intro')
colorIntroContent.addEventListener('dblclick', () => {
  colorIntroContent.style.color = 'Blue'  
})

//10 Mouseout (reset 2 can be used for reset better logically)
const colorIntroContentRest = document.querySelector('.intro')
colorIntroContentRest.addEventListener('mouseout', () => {
  colorIntroContentRest.style.color = 'Black'  
})


// 11





