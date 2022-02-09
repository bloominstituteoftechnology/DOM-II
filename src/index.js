import './less/index.less'

// Your code goes here!

// 1. LOAD
window.onload = function (evt) {
    console.log(`event ${evt.type} fired! Ready to go!`)
    const heading = document.querySelector('h1');
    heading.textContent = 'All aboard!';

//2. CLICK    
    document.body.addEventListener('click', evt => {
        evt.target.classList.toggle('mirror')
    })

//3. COPY   
    window.addEventListener('copy', evt => {
        navigator.clipboard.readText()
        .then(text => {
            heading.textContent += text
        })
    })

//4. DBLCLICK
    document.body.addEventListener('dblclick', evt => {
        evt.target.outerHTML = '';
    })

//5 & 6. KEYDOWN/KEYUP
    window.addEventListener('keydown', evt => {
        if(evt.key == 6) {
            document.body.innerHTML = 'DEE DEE!!! GET OUT OF MY LAB!!!!!!!';
        }
    })

    window.addEventListener('keyup', evt => {
        if(evt.key == 1) {
            document.body.innerHTML = "BOOM!!! Think of the '1' key as a hand grenade pin. Once you press the key, you can't let go. Better luck next time";
        }
    })
    
//7. MOUSEMOVE
    document.body.addEventListener('mousemove', evt => {
        const {clientX, clientY} = evt
        // console.log(`mouse is @ ${clientX}, ${clientY} 😀`)
    })
    
//8 & 9. MOUSEENTER/MOUSELEAVE
    const destinations = document.querySelectorAll('.destination')
    for (let destination of destinations) {
        destination.addEventListener('mouseenter', evt => {
            destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', evt => {
            destination.style.fontWeight = 'initial'
        })
    }

//9. SCROLL
    document.body.addEventListener('scroll', evt => {
        // console.log("now we're scrollin'!!!")
        console.log(evt.type)
    })

    document.body.addEventListener('cut', evt => {
        evt.target.outerHTML = '';
    });
}

