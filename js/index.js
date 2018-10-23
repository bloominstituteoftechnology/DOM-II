// Your code goes here
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
 let h1Color = 0
 const navH1 = document.querySelector('.nav-container h1')
 navH1.addEventListener('mouseenter', () => {
  navH1.style.color = colors[h1Color]
})
 navH1.addEventListener('mouseleave', () => {
  navH1.style.color = 'black'
  h1Color = h1Color === colors.length - 1 ? 0 : h1Color + 1
})



let wordIndex = 0
 const introParagraph = document.querySelector('.home p')
const introParagraphContent = introParagraph.innerHTML
introParagraph.addEventListener('mousemove', () => {
  introParagraph.innerHTML = introParagraphContent
    .split(' ')
    .map(
      (element, i) =>
        i === wordIndex ? `<span class='red-word'>${element}</span>` : element
    )
    .join(' ')
  document.querySelector('.home p .red-word').style.fontWeight = 'bold'
  document.querySelector('.home p .red-word').style.fontSize = '2.4rem'
  wordIndex =
    wordIndex === introParagraphContent.split(' ').length - 1
      ? 0
      : wordIndex + 1
})



let inverted = false
 const images = document.querySelectorAll('img')
document.querySelector('body').addEventListener('dblclick', () => {
  images.forEach(
    image => (image.style.filter = !inverted ? 'invert(1)' : 'invert(0)')
  )
  inverted = inverted ? false : true
})



const headerSelector = document.querySelector('header')
headerSelector.addEventListener('click', () => {
  alert('stop clicking pls')
})



const banner = document.querySelector('.intro img');
banner.addEventListener('mouseover', () => {
    banner.style.height = "20%";
    //Bring back Back default banner
    banner.addEventListener('mouseleave', () => {
        banner.style.height = "auto";
    });
});



 const navItems = document.querySelectorAll('nav a')
const rotations = [...Array(navItems.length)].map(() => 30)
navItems.forEach((item, i) =>
  item.addEventListener('click', event => {
    event.stopPropagation()
    event.preventDefault()
    item.style.transform = `rotateZ(${rotations[i]}deg)`
    rotations[i] += 30
  })
)



let borderThickness = 0
 const firstSectionImage = document.querySelector('section img')
firstSectionImage.addEventListener('drag', event => {
  console.log(event)
  firstSectionImage.style.border = `${borderThickness}px solid purple`;
  borderThickness++
})
 firstSectionImage.addEventListener('dragend', event => {
  console.log(event)
  firstSectionImage.style.border = ''
  borderThickness = 0
})
 


const body = document.querySelector('body')
body.addEventListener('keyup', function() {
    body.style.background = 'pink';
})



 function getRandomColor() {
    const colors = [];
    for (let i = 0; i < 3; i++) {
      const randomColor = Math.floor(Math.random() * 256);
      colors.push(randomColor);
    }
    return `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
  }
  const home = document.querySelector('.home');
  home.addEventListener('wheel', (event) => {
    const randomColor = getRandomColor();
    event.currentTarget.style.backgroundColor = `${randomColor}`;




    const myButton = document.querySelector('.btn')
    myButton.addEventListener('mouseenter', () => {
        myButton.style.color = 'orange'
        myButton.style.backgroundColor = randomColor;
    })
    myButton.addEventListener('mouseleave', () => {
      myButton.style.color = 'white' 
      
    })
  });





 