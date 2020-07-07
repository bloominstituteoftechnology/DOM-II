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


console.log(welcomeMsg)

headerBox[0].style.textAlign = 'center'
introImage.style.border = '2px dashed black'
introImage.style.width = '80vw'

// ONE change intro image on click 
introImage.addEventListener ('click', () => {
    introImage.src = 'https://wedobuses.com/wp-content/uploads/2019/02/25to30Passenger_ProEnt.jpg'
});

// TWO make the first paragraph larger when double clicked 
paragraphs[0].addEventListener ('dblclick', () => {
    paragraphs[0].style.fontSize = '2.0rem'
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
  })
  
  // FIVE when tex is copied the boat image goes away
  contentDestination.addEventListener('copy', function () {
      closingImage.style.display = 'none';
  })

  // SIX image grow on keyup
allImages[2].addEventListener('mouseout', () =>{
    allImages[2].style.width = '500px';
})

// SEVEN 
welcomeMsg.addEventListener('scroll', (event) => {
    console.log('welcome to the bus');
})