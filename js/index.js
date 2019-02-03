
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

// // ?? // -6- // 
    // -- // MouseOver
        // Select Dom Element
            let textContentClass = document.querySelectorAll('.text-content p')
            console.log(textContentClass)

        // Create Event Listener
            textContentClass.addEventListener('mouseover', event)
        // Event Listener Callback    
            textContentClass.addEventListener('mouseover', event => {
                // -v1- 
                    textContentClass.forEach( paragraph => {
                        paragraph.style.fontFamily = 'cursive'
                    })
                
                // -v2-
                    // textContentClass[0].style.fontFamily = 'cursive'
                    // textContentClass[1].style.fontFamily = 'cursive'
                })

            // -v3-
                // textContentClass.forEach( paragraph => {
                //     paragraph.addEventListener('mouseover', event => {
                //         textContentClass.style.fontFamily = 'cursive'
                //     })
                // })

// // ?? // -7- //      
    // -- // MouseOver
        // Select Dom Element
            // ABOVE

    // // Create Event Listener
    //     textContentClass.addEventListener('mouseout', event)
    // // Event Listener Callback    
    //     textContentClass.addEventListener('mouseout', event => {
    //         textContentClass.forEach( paragraph => {
    //             paragraph.style.fontFamily = 'monospace'
    //         })
    //     })
    
            


// // -8- //
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

// // -9- //
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