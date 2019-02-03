
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

// -5- // d
    // -- // wheel
        // Select Dom Element
            let bodyElement = document.querySelector('body')
            console.log(bodyElement)
        // Create Event Listener
            bodyElement.addEventListener('wheel', event)     
        
        // Color array index Counter
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

// // ?? // -6- // 
//     // -- // MouseOver
//         // Select Dom Element
//             let textContent = document.querySelectorAll('.text-content')
//             console.log(textContent)
//         // Create Event Listener
//             textContent.addEventListener('mouseover', event)
//         // Event Listener Call Back
//             textContent.addEventListener('mouseover', event => {
//                 textContent.forEach( paragraph => {
//                     paragraph.style.fontSize = 'xx-large';
//                 })
//             })

// // -7- //
//     // Select Dom Element
//         let destinationClass = document.querySelectorAll('.destination')
//         console.log( destinationClass)
//     // Create Event Listener
//         destinationClass.addEventListener('mouseenter', event)
//     // Event Listener Callback
//         destinationClass.addEventListener('mouseenter', event => {
//             destinationClass.forEach( selectedClass => {
//                 selectedClass.style.backgroundColor = 'yellow'
//             })
//         })

// // -8- //
//     // Select Dom Element
//         let btmButton = document.querySelectorAll('.btn')
//             console.log(btmButton)
//     // Create Event Listener
//         btmButton.addEventListener('click', event)
//     // Event Listener Callback
//     btmButton.addEventListener('click', event => {
//         target.style.backgroundColor = 'purple'
//     })

// // -preventDefault()- //
//     // -- // header TEXT COLOR
//         // Select Dom Element
//             let navItems = document.querySelectorAll('nav a')
//             console.log(navItems)
//         // Create Event Listener
//         navItems.addEventListener('click', event)
//         // Event Listener Call Back
//         navItems.addEventListener('click', event => {
//             console.log(navItems)
//             navItems.forEach( param => {
//                 param.preventDefault()
//             })
//         })   