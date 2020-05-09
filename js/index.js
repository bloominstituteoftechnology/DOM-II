const nav = document.querySelector('nav') 

nav.addEventListener('mouseenter', (e) => {
    nav.style.transform = "scale(1.3)"
    nav.style.transition = "all 0.5s"
})
nav.addEventListener('mouseleave', () => {
    nav.style.transform = "scale(1)";
  })

  const changeImage = 
  document.querySelector('.intro')
  changeImage.addEventListener('dblclick', (event) => {
      console.log(event.target)
      event.target.src = "img/busdance.jpeg";
  })

  const headerChange = 
  document.querySelector('.main-navigation')
  headerChange.addEventListener('click', (event) => {
      headerChange.style.backgroundColor="cornsilk";
  })

  window.addEventListener("resize", function(){
      document.getElementById("main").innerHTML = Math.random();
  })

  const button = 
  document.querySelector('.btn')
  button.addEventListener('click', (event) => {
      alert("You're going to Hawaii!")
  })
 
  const footer = document.querySelector('.footer')
  footer.addEventListener('mouseout', (event)=> {
    event.target.style.backgroundColor = 'cornsilk';
    })

 const paragraph = document.querySelector('p')
 paragraph.addEventListener('mouseup',(event)=> {
   event.target.style.backgroundColor = 'Lightgrey';})

 const links = document.querySelectorAll('.nav-link');
   links.forEach(link => {
    link.addEventListener('click', (event) => event.preventDefault())
   })  

 const hTwo = document.querySelectorAll("h2")
 hTwo.forEach(title => {
     title.addEventListener('click', event => {
         event.target.style.color = "green"
     })
 })

 document.addEventListener('copy', notAllowed);

 function notAllowed(){
     alert("This information is copyrighted");
 } 


