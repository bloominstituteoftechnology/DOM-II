// Your code goes here

let headerImage = document.querySelector('.intro img')
let imgNum = 0
headerImage.addEventListener('click', (e)=>{

    e.target.setAttribute('src', 'https://picsum.photos/1000/300?random=' + imgNum)
    imgNum++
})


let logoHeading = document.querySelector('.logo-heading')
logoHeading.addEventListener('mouseover', (e)=>{
    e.target.innerHTML = `<img width="32px" src="https://cultofthepartyparrot.com/parrots/hd/parrot.gif"> Fun Bus <img width="32px" src="https://cultofthepartyparrot.com/parrots/hd/parrot.gif">`
})

 