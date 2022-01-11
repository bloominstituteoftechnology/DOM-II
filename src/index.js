// import { body } from 'msw/lib/types/context'
import './less/index.less'
let trickCounter = 0
// Your code goes here!
let trick = document.getElementById('trick')
trick.addEventListener('click', function(e){
    if(trickCounter === 0){
    trick.innerHTML = 'Fuck you click again'
    trickCounter = 1
    e.stopImmediatePropagation()
    }
})
trick.addEventListener('click', function(e){
    if(trickCounter === 1){
    trick.style.display = 'none'
    trickCounter = 2
    e.stopImmediatePropagation()
    }
})
document.body.addEventListener('wheel', function(e){
    if(trickCounter === 2){
        trick.style.display = ''
        trick.style.marginLeft = '75%'
        trick.innerHTML = 'I get knocked down'
        trickCounter = 3
        e.stopImmediatePropagation()
    }
})
trick.addEventListener('mouseover', function(e){
    if(trickCounter === 3){
        document.querySelector('.content-section').append(trick)
        trick.marginLeft = ''
        let form1 = document.createElement('input')
        form1.id = 'form1'
        document.querySelector('.content-section').append(form1)
        trick.innerHTML = 'But I get up '
        trickCounter = 4
        e.stopImmediatePropagation()
    }
})
document.addEventListener('keypress', (e) => {
    let form1 = document.getElementById('form1')
    if(form1.value === 'again' && trickCounter === 4 && e.code === 'Enter'){
            trick.innerHTML = 'NEVER GONNA KEEP ME DOWN'
            form1.style.display = 'none'
            trick.style.fontSize = '6rem'
            trickCounter = 5
    }
})
window.addEventListener('load', (e) =>{
    trick.style.backgroundColor = 'slategrey'
})
document.getElementById('form1').addEventListener('paste', (e) =>{
    trick.innerHTML = 'HAXXX'
})