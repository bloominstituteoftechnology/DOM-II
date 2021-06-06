// Your code goes here
const logoImg = document.querySelector("h1.logo-heading")
const logoSub = document.querySelector("h1.logo-subtext")
const navItem = document.querySelectorAll("nav.nav-link")



//adds subtext to the main header if mouse over
logoImg.addEventListener('mouseover', () => {
logoSub.classList.remove('off')
})

logoImg.addEventListener('mouseout', () => {
    logoSub.classList.add('off')
    })

navItem.addEventListener('click', () => {
})

