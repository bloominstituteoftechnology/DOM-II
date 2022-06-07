import './less/index.less'

// Your code goes here!
console.log('hello world')

window.onload = function (evt) {
    console.log(`event ${evt.type} fired! Ready to go!`)
    const heading = document.querySelector('h1')
    heading.textContent= 'READY TO GO!!'


    window.addEventListener('copy',() =>{
        navigator.clipboard.readText()
        .then(text =>{
            heading.textContent += text
        })
    })

    document.body.addEventListener('click',evt =>{
    evt.target.classList.toggle('mirror')

    })

    document.body.addEventListener('dblclick', evt => {
        evt.target.innerHTML=''
    })

    window.addEventListener('keydown',evt =>{
        if(evt.key==6){
            document.body.innerHTML='<h1>YOU RAN ORDER 66</h1>'
        }
    })

    document.body.addEventListener('mouseover',evt=>{
        const {clientX,clientY} = evt

    })

    const destinations = document.querySelectorAll('.destination')
    for (let destination of destinations){
        destination.addEventListener('mouserenter', ()=>{
            destination.style.fontWeight='bold'    
        })
        destination.addEventListener('mouseleave',()=>{
            setTimeout(()=>{
            destination.style.fontWeight='initial'  
            },500)

        })
    }
}