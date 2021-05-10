// Your code goes here
const mainNav = document.querySelector('.main-navigation')
mainNav.addEventListener('click', (event) => {

    event.target.style.backgroundColor = "crimson";  
    //event.style.transform = "scale(2.5)";
    event.target.style.border = "5px solid blue";
    event.target.style.transform = "scale(1.5)";
    event.preventDefault()

           });

           mainNav.addEventListener('dblclick', (event) => {

            event.target.style.backgroundColor = "white";  
            //event.style.transform = "scale(2.5)";
            event.target.style.border = "0px ";
            event.target.style.transform = "scale(1)";
            event.target.preventDefault()
        
                   });


const legoHeading = document.querySelector('.logo-heading')
legoHeading.addEventListener('click', (event) =>{
event.target.style.backgroundColor = 'purple'
event.target.style.borderRadius = '10px'
event.target.style.color = 'white'
event.target.style.transform = "scale(2.5)"
event.stopPropagation()
})
legoHeading.addEventListener('dblclick', (event) =>{
    event.target.style.backgroundColor = 'white'
    event.target.style.borderRadius = '1px'
    event.target.style.color = 'black'
    event.target.style.transform = "scale(1)"
    event.stopPropagation()
    })

const navBar = document.querySelector('.nav')
navBar.addEventListener('click', (event) =>{
    event.target.style.backgroundColor = 'pink'
    event.target.style.borderRadius = '10px'
    event.target.style.color = 'white'
    event.target.style.transfrom = 'scale(12)'
    event.target.style.transition = '2s'
    event.stopPropagation()
    })
    navBar.addEventListener('dblclick', (event) =>{
        event.target.style.backgroundColor = 'white'
        event.target.style.borderRadius = '10px'
        event.target.style.color = 'black'
        
        event.stopPropagation()
        })

const imgHeader = document.querySelector('.intro img')
imgHeader.addEventListener('mouseenter', (event) =>{
    event.target.style.transform ='rotate(180deg)'
    event.target.style.transition ='transform 2s'
    event.stopPropagation()
})
imgHeader.addEventListener('mouseleave', (event) =>{
    event.target.style.transform ='rotate(360deg)'
    event.target.style.transition ='transform 1s'
})

const introText = document.querySelector('.intro h2')
introText.addEventListener('mouseenter', (event) =>{
    event.target.style.transform ='rotate(90deg)'
    event.target.style.transition ='transform 2s'
})
introText.addEventListener('mouseleave', (event) =>{
    event.target.style.transform ='rotate(360deg)'
    event.target.style.transition ='transform 2s'
})
const introParagraph = document.querySelector('.intro p')
introParagraph.addEventListener('mouseenter', (event) =>{
    event.target.style.border ='5px solid black'
    event.target.style.borderRadius ='15px'
     event.target.style.backgroundColor ='pink'
     event.target.style.color ='crimson'
    
})
const contentSection = document.querySelectorAll('.content-section')
contentSection.forEach((element) =>{
element.addEventListener('mouseenter', (event) =>{
    event.target.style.transform ='rotate(90deg)'
    event.target.style.transition ='transform 7s'
    })
    element.addEventListener('mouseleave', (event) =>{
        event.target.style.transform ='rotate(360deg)'
        event.target.style.transition ='transform 7s'
    })
element.addEventListener('click', (event) =>{
    event.target.style.transform ='rotate(90deg)'
    event.target.style.transition ='transform 7s'
    event.stopPropagation()
    })
    element.addEventListener('dbclick', (event) =>{
        event.target.style.transform ='rotate(270deg)'
        event.target.style.transition ='transform 7s'
    })
})
const imgContent1 = document.querySelector('.img-content')



const textContent = document.querySelector('.text-content')
const headerH2= document.querySelector('h2')
const paraText = document.querySelector('p')

const imgContent2 = document.querySelector('.content-destination img')
    imgContent2.addEventListener('dblclick', (event) =>{
    event.target.src ='https://www.lifeadventures.si/wp-content/uploads/2016/03/life_adventures_slovenia_holidays-1024x524.png'
    event.target.style.transform = 'scale(1.6)'
    event.target.style.transition ='transform 7s'
    event.target.style.borderRadius ='100px'

})

    imgContent2.addEventListener('click', (event) =>{
    //event.target.src ='https://www.lifeadventures.si/wp-content/uploads/2016/03/life_adventures_slovenia_holidays-1024x524.png'
    event.target.style.transform = 'scale(1)'
    event.target.style.transition ='transform 7s'

})

const destination = document.querySelectorAll('.destination')
    
destination.forEach((element) =>{
    element.addEventListener('click', (event) =>{
    event.target.style.transform = 'scale(1.6)'
    event.target.style.transition ='transform 7s'
    event.target.style.backgroundColor ='black'
    event.target.style.color ='crimson'
    })
    element.addEventListener('keydown', (event) =>{
        if (event.key === "Escape") {
        event.target.style.transform = 'scale(1)'
        event.target.style.transition ='transform 7s'
        }
        })

        element.addEventListener('mouseenter', (event) =>{
         event.target.style.backgroundColor ='white'
         event.target.style.color ='purple'
            })
})
const headerH4= document.querySelector('h4')
headerH4.onwheel = 'zoom';

const button = document.querySelector('.btn')

const footer = document.querySelector('.footer p')
footer.addEventListener('click', (event) =>{
    event.target.style.transform = 'scale(2.0)'
    event.target.style.transition ='transform 7s'
    event.target.style.backgroundColor ='green'
    
})
footer.addEventListener('click', (event) =>{
    event.target.style.transform = 'scale(2.0)'
    event.target.style.transition ='transform 7s'
    event.target.style.backgroundColor ='red'
    
})