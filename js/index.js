// Your code goes here
const logoImg = document.querySelector("h1.logo-heading")
const logoSub = document.querySelector("h1.logo-subtext")

//adds subtext to the main header if mouse over
logoImg.addEventListener('mouseover', () => {
logoSub.classList.remove('off')
})

logoImg.addEventListener('mouseout', () => {
    logoSub.classList.add('off')
    })

//add interactivity to nav bar upon clicks
    const  navItem = document.querySelectorAll('a')
   
    navItem[0].addEventListener("click", e => {
        e.target.style.fontSize = "4rem"
    })

    navItem[1].addEventListener("click", e => {
        e.target.style.color = "green"
    })

    navItem[2].addEventListener("click", e => {
        e.target.style.color = "pink"
    })

    navItem[3].addEventListener("click", e => {
        e.target.style.color = "blue"
    })

    // const  navItem = document.querySelector('.nav')
    // navItem1 = navItem.firstElementChild
    // navItem1.addEventListener("mouseover", e => {
    //     e.target.style.fontSize = "4rem"
    // })


