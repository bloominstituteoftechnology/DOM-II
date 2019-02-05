
// Your code goes here
// -1- //
    // -- // HEADER
        // Select Dom Element
            let header = document.querySelector('header');
        // Create Event Listener
            header.addEventListener('mouseover', event)
        // Event Listener Call Back
            header.addEventListener('mouseover', event => {
                header.style.backgroundColor = 'orange';
            })

// -2- //
    // -- // header TEXT COLOR
        // Select Dom Element
            // HEADER
        // Create Event Listener
            header.addEventListener('dblclick', event)
        // Event Listener Call Back
            header.addEventListener('dblclick', event => {
                let headerNavText = header.querySelectorAll('a')
                headerNavText.forEach( param => {
                    param.style.color = 'aqua';
                })
            })    

// -3- //
    // -- // keycode
        window.addEventListener('keydown', event)
        window.addEventListener('keydown', event => {
            alert (`hey bro (or lady), idk if you know this but you just pressed
            a key. In this case that key was '${event.key}' or keyNumber:'${event.keyCode}'`)
        })

// -4- //
    // -- // dblClick
        let imgClick = document.querySelector('img')
        console.log(imgClick)
        
        imgClick.addEventListener('dblclick', event)

        imgClick.addEventListener('dblclick', event => {
            imgClick.style.display = 'none'
        })

// -5- //
    // -- // wheel
        // Select Dom Element
            let bodyElement = document.querySelector('body')
            console.log(bodyElement)
        // Create Event Listener
            bodyElement.addEventListener('wheel', event)     
        
        // Color array
            let counter = -1
            let colorArray = ['yellow', 'red', 'orange', 'black', 'aqua']

        // Event Listener Call Back
        bodyElement.addEventListener('wheel', event => {
            count(event);
            console.log(counter)
            console.log(colorArray.length)

            let webpageText = document.querySelectorAll('.home p')
                webpageText.forEach( paragraph => {                    
                    paragraph.style.color = colorArray[counter];
                })
            
        })
            // update color array index
            let count = function (listenEvent){
                if (listenEvent.deltaY > 0) {
                    if (counter < colorArray.length -1 ) {
                        ++counter
                    } else {
                        counter = 0
                    }
                    
                } else if (listenEvent.deltaY < 0) {
                    if (counter > 0) {
                        --counter
                    } else {
                        counter = colorArray.length -1 
                    }
                console.log(counter)
                return counter
                }
            }

// -6- // 
    // -- // MouseOver
        // Select Dom Element
            let textContentClass = document.querySelectorAll('.text-content p')
            console.log(textContentClass)

        // Event Listener Callback    
            textContentClass.forEach( paragraph => {
                paragraph.addEventListener('mouseover', () => {
                    paragraph.style.fontFamily = 'cursive'
                })
            })

// -7- //      
    // -- // MouseOut
    
    textContentClass.forEach ( paragraph => {
        paragraph.addEventListener('mouseout', () => {
            paragraph.style.fontFamily = 'monospace'
        })
    })


// -8- //
    // Select Dom Element
        let destinationClass = document.querySelectorAll('.destination')
        console.log( destinationClass)

    // Event Listener Callback
    destinationClass.forEach( card => {
        card.addEventListener('mouseenter', () => {
            card.style.backgroundColor = 'yellow'
        })
    })

// // -9- //

    let btmButton = document.querySelectorAll('.btn')
    btmButton.forEach( card => {
        card.addEventListener('mouseover', event => {
            card.style.backgroundColor = 'purple'
        })
    })

// -10- //
    // -- // dblClick
    let imgRemove = document.querySelector('.img-content img')
    console.log(imgClick)
    
    imgRemove.addEventListener('dblclick', event)

    imgRemove.addEventListener('dblclick', event => {
        imgRemove.style.display = 'none'
    })

// -preventDefault()- //
    // -- // header TEXT COLOR
        // Select Dom Element
            let navItems = document.querySelectorAll('nav a')
            console.log(navItems)

        navItems.forEach( aTag => {
            aTag.addEventListener('click', event => {
                event.preventDefault()
            })
        })

