// Your code goes here



console.log("mouse enter event");
const busImage = document.querySelector("img")
busImage.addEventListener('mouseenter', () => {
    busImage.style.transform = "scale(1.05)"

})
//
console.log("mouse leave event")
busImage.addEventListener('mouseleave', () => {
    busImage.style.transform = "scale(1)"
  
})


//
const mapPic = document.querySelector('.img-content img')
mapPic.addEventListener('dblclick', () => {
    mapPic.src = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1608&q=80"
})

//
mapPic.addEventListener('click', () => {
    mapPic.src = 'https://images.unsplash.com/photo-1536685712909-6ac3633e0812?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80'
})
//

let textColor = document.querySelector('html')
textColor.addEventListener('dblclick', (event) => {
    event.target.style.color = "green"
})
//
textColor.addEventListener('click', (event) => {
    event.target.style.color = "black"
})
//
const mouseOver = document.querySelector('footer')
mouseOver.addEventListener('mouseenter', () => {
   mouseOver.stlye.color = "white"
})