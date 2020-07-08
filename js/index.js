// Your code goes here

//*** Set up variables to perform events upon ***\\ 

const headerBox = document.querySelectorAll('.logo-heading')

const introImage = document.querySelector('.intro img')
const paragraphs = document.getElementsByTagName('p')
const pageColor = document.querySelector('body')
const closingImage = document.querySelector('.content-destination img')
// const navLinks = document.querySelector('nav')
const letsGo = document.querySelector('.text-content h2')
const contentDestination = document.querySelector('.content-destination')
const allImages = document.getElementsByTagName('img')
const welcomeMsg = document.querySelector('.intro h2')
const topBox = document.querySelector('.intro')
const horrorHeadlines = document.querySelectorAll('.destination h4')
const bodyPage = document.querySelector('.content-pick')
const footerBox = document.getElementsByTagName('footer')



console.log(footerBox)

headerBox[0].style.textAlign = 'center'
headerBox[0].style.fontSize = '3.0rem'
headerBox[0].style.fontFamily = 'serif'
topBox.style.fontFamily = 'sans-serif'
topBox.style.width = '70%'
topBox.style.margin = '0 auto'
pageColor.style.display = 'flex'
pageColor.style.flexDirection = 'column'
pageColor.style.textAlign = 'center'
introImage.style.border = '2px dashed black'
introImage.style.width = '100%'
introImage.style.margin = '0 auto'
footerBox[0].style.height = '10vh'
footerBox[0].style.display = 'flex'
footerBox[0].style.justifyContent = 'center'
footerBox[0].style.marginTop = '4vh'
// ONE change intro image on click 
introImage.addEventListener ('click', () => {
    introImage.src = 'https://images.boredomfiles.com/wp-content/uploads/2016/05/creepy-bus.jpg'
});

// TWO make the first paragraph larger when double clicked 
paragraphs[0].addEventListener ('dblclick', () => {
    paragraphs[0].style.fontSize = '2.0rem'
    paragraphs[0].textContent = "Have you always wanted to experience what the victims in The Texas Chainsaw Massacre experienced? Did The Hills Have Eyes make you long for a simpler, creepier time? Does your life feel empty with out the imminent threat of death and tetanus? Do you even know the last time you got a tetanus shot? Well we've got the party bus for you - Torture Bus!"
});

// THREE keydown changes the background color to a random color 
// Warning: may cause seizures if we add a text box, but I imagine if you wanted to be in a fun bus you'd be prepared for flashing lights 
pageColor.addEventListener ('keydown', () => { 
  var randomeOne=Math.floor(Math.random() * 256 ); 
  var randomTwo=Math.floor(Math.random() * 256 ); 
  var randomThree=Math.floor(Math.random() * 256 ); 
  var ranrgb="rgb("+randomeOne+","+randomTwo+","+randomThree+")";
  pageColor.style.backgroundColor=ranrgb; });
 
  // FOUR mouseover change of the Let's Go title  
  letsGo.addEventListener('mouseover', function () {
      letsGo.style.fontSize = '5.0rem'
      letsGo.textContent = 'Your Worst Nightmare'
      letsGo.style.color = 'red'
  })
  
  // FIVE when tex is copied the boat image goes away
  contentDestination.addEventListener('copy', function () {
      closingImage.style.display = 'none';
  })

  // SIX image grow on keyup
allImages[2].addEventListener('mouseout', () =>{
    allImages[2].style.width = '500px';
    allImages[2].src = 'https://live.staticflickr.com/759/22302984699_3ef31f81de_b.jpg'
})

// SEVEN 
welcomeMsg.addEventListener('click', () => {
    welcomeMsg.textContent = 'Welcome to Torture Bus!'
})

//EIGHT 
bodyPage.addEventListener('click', () => {
    bodyPage.style.backgroundColor = 'slategray'
    horrorHeadlines[0].textContent = 'Free Travel to a Creepy Barn!'
    horrorHeadlines[1].textContent = 'Medieval and Moden Toture Tools and Techniques'
    horrorHeadlines[2].textContent = 'Designed to Thrill and Kill'
})

//NINE 
footerBox[0].addEventListener('mouseover', () => {
    footerBox[0].textContent = 'All Rights Reserved .... to Kill!'
    footerBox[0].addEventListener('mouseout', () => {
        footerBox[0].style.fontSize = '15rem'
    })
})