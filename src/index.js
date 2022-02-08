import './less/index.less'



// load section here
window.onload = function(event) {
    console.log(`the event ${event.type} is all set!`)
    const heading = document.querySelector('h1')
    heading.textContent = "Welcome To Fun Bus"


    //mouseover section here
    const destinations = document.querySelectorAll('.destination')
    for(let destination of destinations){
        destination.addEventListener('mouseenter', () => {
            destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', () =>{
            destination.style.fontWeight = 'initial'
        })
    }

    //keydown section here
    window.addEventListener('keydown', event =>{
        if(event.key == 3){
            document.body.innerHTML = '<h1>NOOO!! NOT THE PAGE!! WHY WOULD YOU DO SUCH A HORRIBLE THING!!</h1>'
        }
    })


    //click section here
    document.body.addEventListener('dblclick', event =>{
        event.target.outerHTML = ''
    })

    document.body.addEventListener('click', event =>{
        event.target.classList.toggle('mirror')
    })

    document.addEventListener('scroll', event =>{
        event.lastKnownScrollPosition = window.scrollY;
    })
    
}
