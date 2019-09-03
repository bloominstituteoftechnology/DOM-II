// Your code goes here

//document.addEventListener('DOMContentLoaded', function(){

document.addEventListener('click', function(event){
    //console.log('click')
    let button = event.target.closest('.btn')
    if (button) {
        button.innerText = "You're Signed Up!"
    }
})

document.addEventListener('focus', function(event){
    //console.log('focus')
    event.target.style.color = 'gray'
}, true)

document.addEventListener('blur', function(event){
    //console.log('blur')
    event.target.removeAttribute('style')
}, true)

document.addEventListener('mouseover', function(event){
    //console.log('mouseover')
    let img = event.target.closest('img')
    if (img) {
        //img.parentElement.style.overflow = 'hidden'
        img.style.transform = 'scale(1.2)'
    }
})

document.addEventListener('mouseout', function(event){
    //console.log('mouseout')
    let img = event.target.closest('img')
    if (img) {
        img.removeAttribute('style')
    }
})

document.addEventListener('scroll', function(event){
    let val = 1 - document.documentElement.scrollTop/(document.documentElement.scrollHeight-window.innerHeight)
    //console.log('scroll', val)
    document.body.style.backgroundColor = `rgb(${255*val}, ${155+100*val}, 255)`
})

document.addEventListener('dblclick', function(event){
    if (event.target.tagName == 'IMG') {
        window.location.href = event.target.src
    }
})

let row, dragged, draggedOver

document.addEventListener('dragstart', function(event){
    row = event.target.closest('.content-section')
    dragged = event.target
})

document.addEventListener('dragover', function(event){
    draggedOver = event.target
})

document.addEventListener('dragend', function(event){
    //console.log(event)
    if (draggedOver.closest('.content-section') == row && draggedOver.closest('.text-content,.img-content') != dragged) {
        //console.log(true, event)
        if (!row.style.flexDirection) row.style.flexDirection = 'row-reverse'
        else row.removeAttribute('style')
    }
})

//})