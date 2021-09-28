// Identify Objects
const title = document.querySelector('h1')
const mainPhoto = document.querySelector('.intro img')
const welcomeHeading = document.querySelector('.intro h2')
const imgFluid = document.querySelector('.img-fluid')
const footerText = document.querySelector('footer p')
const contentDestination = document.querySelector('section .content-destination')

// Manipulations
window.addEventListener('load', e => {
    title.textContent = 'Fun Bus (fully loaded like Herbie)'
})

window.addEventListener('resize', e => {
    document.body.style.border = '5px solid yellow'
})

document.addEventListener('scroll', e => {
    title.textContent = 'Fun Bus in motion'
})

document.addEventListener('keydown', e => {
    document.body.style.backgroundColor = '#3d95a4'
})

document.addEventListener('pointerenter', e => {
    document.body.style.textTransform = 'lowercase'
})

document.addEventListener('pointerleave', e => {
    document.body.style.textTransform = 'uppercase'
})

mainPhoto.addEventListener('mouseover', e=> {
    welcomeHeading.textContent = "Drag n' Drop that picture^ to make it disappear"
})

mainPhoto.addEventListener('drag', e => {
    console.log('photo mouseover success');
    mainPhoto.style.display = 'none'
    }
)

imgFluid.addEventListener('dblclick', e => {
    imgFluid.style.border = '5px solid red'
})

footerText.addEventListener('click', e => {
    footerText.textContent = 'What are ya a lawyer?'
})

