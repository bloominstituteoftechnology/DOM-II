// Logo Heading Mouseover and Mouseleave
const logo = document.querySelector('.logo-heading')
logo.addEventListener('mouseover', () => {
    logo.style.color = '#009900'
    logo.style.transition = "all .8s"
})

const logoLeave = document.querySelector('.logo-heading')
logoLeave.addEventListener('mouseleave', () => {
    logoLeave.style.color = '#ffd800'
})

// Window Keydown Alert
window.addEventListener('keydown', () => {
    alert('Bus passenger: I’d like a ticket to New York, please.\nTicket seller: By Buffalo?\nBus passenger: Of course not, I’m in the bus queue, aren’t I?')
})

// Header Image Dblclick
const headerIMG = document.querySelector('.intro img')
    headerIMG.addEventListener('dblclick', () => {
        headerIMG.src = 'https://i.ibb.co/k4TKhc3/yellowvan.jpg'
        headerIMG.style.marginLeft = '33%'
    })
