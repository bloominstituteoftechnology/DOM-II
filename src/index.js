import './less/index.less'


const txt = document.querySelectorAll('h2, h4, p, .logo-heading, .nav .nav-link')
txt.forEach((tag) => {
    tag.addEventListener('mouseover', event => {
        event.target.style.color = 'orange'
    })
    tag.addEventListener('mouseleave', event => {
        event.target.style.color = ''
    })
})

