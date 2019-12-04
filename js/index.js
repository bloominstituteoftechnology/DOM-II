// Your code goes here
//Nav Animations
document.querySelectorAll('nav a').forEach(item =>{
    
    item.addEventListener("mouseenter", () =>{
        
        item.style.transform = "scale(1.2)";
        item.style.transition = "transform 0.3s"
    
    })
})

document.querySelectorAll('nav a').forEach(item =>{
    
    item.addEventListener("mouseleave", () =>{
        
        item.style.transform = "scale(1)";
        item.style.transition = "transform 0.3s"
    
    })
})

//stop default
document.querySelectorAll('nav a').forEach(item =>{
    
    item.addEventListener("click", (event) =>{
        
        event.preventDefault();
    
    })
})


//load events
let headerImg = document.querySelector('header img');
console.log(headerImg)

headerImg.addEventListener('load', (event) => {

        headerImg.src = "https://cdn.shopify.com/s/files/1/0049/0872/products/Loungefly_Rick_And_Morty_Spaceship_Crossbody_Bag_6045e925-2710-43b6-9a12-a707a86150e3.jpg?v=1546905146"

});

//Sign up events
document.querySelectorAll('.btn').forEach(item =>{
    
    item.addEventListener("dblclick", () =>{
        item.style.backgroundColor = "green";
    })
})

//secret header
let h1 = document.querySelector('h1');
h1.addEventListener('click', ()=>{

    h1.textContent = "Rick and Morty Adventures"

})

//secret pictures
document.querySelectorAll('.img-content img').forEach(item =>{
    
    item.addEventListener('dblclick', ()=>{

        item.src  = "https://miro.medium.com/max/840/1*d5g31wvUpmILqzge216Fug.png"
     
     })

}
)

//secret destination
let destinationImg = document.querySelector('.content-destination img');
destinationImg.addEventListener('auxclick', ()=>{

    destinationImg.src  = "https://pmcvariety.files.wordpress.com/2017/10/rickandmorty.jpg?w=1000"

})
//secret rick and morty qoutes
document.querySelectorAll('p').forEach(item=>{

    item.addEventListener("mouseover", () => {

        item.textContent = "Its a device Morty, that when you put it in your ear, you can enter people’s dreams Morty. Its just like that movie that you keep crowing about"

    })

})
//secret rick and morty header
document.querySelectorAll('h2').forEach(item=>{

    item.addEventListener("mousedown", () => {

        item.textContent = "Rick and Morty adventures ahead!"

    })

})

