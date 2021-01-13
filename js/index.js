//START OF SELECTORS

//Header bar at top of page
let headerBar = document.querySelector('.nav-container')
console.log('HeaderBar: ', headerBar)
let headerText = document.querySelector('.logo-heading')
console.log('HeaderText: ',headerText)
let navBarList = document.querySelector('.nav')
console.log('navBarList: ', navBarList)
let navItems = document.querySelectorAll('.nav-link')
console.log('navItems: ', navItems)

//Full page
let fullContainer = document.querySelector('.home')
console.log('fullContainer: ', fullContainer)

//Intro Section
let intro = document.querySelector('.intro')
console.log('intro: ', intro)
let introImg = document.querySelector('.intro img')
console.log('introImg: ', introImg)
let introHead = document.querySelector('.intro h2')
console.log('introHead: ', introHead)
let introText = document.querySelector('.intro p')
console.log('introText: ', introText)

//First Content Section
let content = document.querySelector('.content-section')
console.log('content: ', content)
let contentAllText = document.querySelector('.text-content')
console.log('contentAllText: ', contentAllText)
let contentHeadText = document.querySelector('.text-content h2')
console.log('contentHeadText: ', contentHeadText)
let contentP1Text = document.querySelector('.text-content p')
console.log('contentP1Text: ', contentP1Text)
let contentP2Text = contentP1Text.nextElementSibling
console.log('contentP2Text: ', contentP2Text)
let contentImgDiv = content.querySelector('.img-content')
console.log('contentImgDiv: ', contentImgDiv)
let contentImg = contentImgDiv.querySelector('img')
console.log('contentImg: ', contentImg)

//Inverse Content Section
let inverseContent = document.querySelector('.inverse-content')
console.log('inverseContent: ', inverseContent)
let inverseContentAllText = inverseContent.querySelector('.text-content')
console.log('inverseContentAllText: ', inverseContentAllText)
let inverseContentHeadText = inverseContentAllText.querySelector('h2')
console.log('inverseContentHeadText: ', inverseContentHeadText)
let inverseContentP1Text = inverseContentAllText.querySelector('p')
console.log('inverseContentP1Text: ', inverseContentP1Text)
let inverseContentP2Text = inverseContentP1Text.nextElementSibling
console.log('inverseContentP2Text: ', inverseContentP2Text)
let inverseContentImgDiv = inverseContent.querySelector('.img-content')
console.log('inverseContentImgDiv: ', inverseContentImgDiv)
let inverseContentImg = inverseContentImgDiv.querySelector('img')
console.log('inverseContentImg: ', inverseContentImg)

//Destination content section
let destination = document.querySelector('.content-destination')
console.log('destination: ', destination)
let destinationHeader = destination.querySelector('h2')
console.log('destinationHeader: ', destinationHeader)
let destinationText = destinationHeader.nextElementSibling
console.log('destinationText: ', destinationText)

//Destination Picker Section
let pickDestination = document.querySelector('.content-pick')
console.log('pickDestination: ', pickDestination)

//Destination1
let destination1 = pickDestination.querySelector('.destination')
console.log('destination1: ', destination1)
let destination1Head = destination1.querySelector('h4')
console.log('destination1Head: ', destination1Head)
let destination1Text = destination1Head.nextElementSibling
console.log('destination1Text: ', destination1Text)
let destination1Button = destination1Text.nextElementSibling
console.log('destination1Button: ', destination1Button)

//Destination 2
let destination2 = destination1.nextElementSibling
console.log('destination2: ', destination2)
let destination2Head = destination2.querySelector('h4')
console.log('destination2Head: ', destination2Head)
let destination2Text = destination2Head.nextElementSibling
console.log('destination2Text: ', destination2Text)
let destination2Button = destination2Text.nextElementSibling
console.log('destination2Button: ', destination2Button)

//Destination 3
let destination3 = destination2.nextElementSibling
console.log('destination3: ', destination3)
let destination3Head = destination3.querySelector('h4')
console.log('destination3Head: ', destination3Head)
let destination3Text = destination3Head.nextElementSibling
console.log('destination3Text: ', destination3Text)
let destination3Button = destination3Text.nextElementSibling
console.log('destination3Button: ', destination3Button)

//Footer
let footer = document.querySelector('footer')
console.log('footer: ', footer)
let footerText = footer.querySelector('p')
console.log('footerText: ', footerText)

//END OF SELECTORS

function navClick(event){
     console.log('clicked on: ', event.target)
     if(event.target.style.color === 'red'){
          event.target.style.color = 'black'
          return
     } else {
          event.target.style.color = 'red'
     } 
}
function navDblClick(event){
     console.log('DOUBLE clicked on: ', event.target)
     event.target.style.border = '2px solid blue'
}
function dragEnlarge(event){
     event.target.style.fontSize = '2rem'
}
function dragReset(event){
     const navNames = ['Home', 'About Us', 'Blog', 'Contact']
     event.target.style.fontSize = ''
     for(let i = 0; i < navNames.length; i++){
          navItems[i].textContent = navNames[i]
     }
}
function dragTextChange(event){
     event.target.textContent = 'I am being DRAGGED'
}
navItems.forEach(item => {
     item.addEventListener('click', navClick)
     item.addEventListener('dblclick', navDblClick)
     item.addEventListener('dragstart', dragEnlarge)
     item.addEventListener('dragend', dragReset)
     item.addEventListener('drag', dragTextChange)
})

function headerToggle(event){
     
     if (event.key === "Escape"){
          console.log('Escape key pressed')
          if (headerText.textContent === 'Fun Bus'){
               headerText.textContent = 'WOAH'
          } else if(headerText.textContent === 'WOAH') {
               headerText.textContent = 'Fun Bus'
          }
     }
     
}
document.addEventListener('keydown', headerToggle)

