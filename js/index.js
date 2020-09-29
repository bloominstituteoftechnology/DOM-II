// Disabling nav
document.querySelectorAll('a').forEach(item => item.addEventListener('click', e => {
    e.preventDefault()
}))


// Click
document.querySelector('h1').addEventListener('click', e => {
    e.target.innerHTML = 'Sad Bus'
    e.target.style.color = 'orange'
})

// Mouseover
document.querySelectorAll('p').forEach(item => item.addEventListener('mouseover', e => {
    e.target.style.color = 'pink'
}))

// Mouseout
document.querySelectorAll('p').forEach(item => item.addEventListener('mouseout', e => {
    e.target.style.color = 'black'
}))