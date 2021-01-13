// Your code goes here

let header = document.querySelector('h1')
header.addEventListener ('mouseenter', event => {
    event.target.style.color = 'red'
})




header.addEventListener('mouseleave', event => {
    event.target.style.color = 'green'
})

header.addEventListener('mouseover', event =>{
    event.target.style.fontSize = '50px'
})
//________________________________________________________________


let link1 = document.querySelector('.nav-link1')
link1.addEventListener('mouseover', event => {
    event.target.style.color = 'pink'
})

let link2 = document.querySelector('.nav-link2')
link2.addEventListener('mouseover', event => {
    event.target.style.color = 'orange'
})

let link3 = document.querySelector('.nav-link3')
link3.addEventListener('mouseover', event=>{
    event.target.style.color = "red"
})

let link4 = document.querySelector('.nav-link4')
link4.addEventListener('mouseover', event=>{
    event.target.style.color = "green"
})


//________________________________________________________________
const allP = document.getElementsByTagName('p')
console.log(allP) // HTML collection, must convert to Array

allP.addEventListener('scroll', event => {
        event.target.style.textTransform = "upperCase"
    })

let newParagrafs= Array.from(allP)

newParagrafs.forEach(paragraf => {
    document.addEventListener('keydown', event => {
        if(event.key === 'o' || event.key === 'O'){
            paragraf.style.color = "orange"
        }
    })
})
newParagrafs.forEach(paragraf => {
    document.addEventListener("keyup", event => {
        if(event.key === 'o' || event.key === 'O')
        paragraf.style.color = 'green'
    })
})

newParagrafs.forEach( paragraf => {  //should i use paragraf
    paragraf.addEventListener('click', event => {
        event.target.style.border = '5px solid green'
    })
})




//________________________________________________________________
document.addEventListener('keydown', event => {
    if (event.key === "Escape") {
        header.style.color = "black"
        header.style.fontSize = '40px'
        link1.style.color = "black"
        link2.style.color = "black"
        link3.style.color = "black"
        link4.style.color = "black"
        newParagrafs.forEach(item => {
            item.style.color = "black"
        newParagrafs.forEach(item =>{
            item.style.border = 'none'
        })
        })
    }
})
//________________________________________________________________
// let intro = document.querySelector ('.intro p')
// intro.addEventListener('keydown', event => {
//     if(event.key === 'l' || event.key === 'L') 
//     event.target.style.color = 'red'
// })
// let text1 = document.querySelector ('"text-content"')
// text1.addEventListener('keydown', event => {
//     if(event.key === 'a' || event.key === 'A') 
//     event.target.style.color = 'red'
// })