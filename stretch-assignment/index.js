const rocket = document.createElement("img")

rocket.setAttribute("src", "../img/rocket.png")
rocket.setAttribute("class", "rocket")

document.querySelector(".blocks").append(rocket)

let windowWidth = window.outerWidth
let rocketWidth = 100
let accelerate
let lastX = {'0': 0, '1': 0, '2': 0, '3': 0, '4': 0}

document.querySelectorAll(".block").forEach((block, i) => {
    let x = block.getBoundingClientRect().width
    let y = block.getBoundingClientRect().y + window.scrollY   

    block.addEventListener("click", () => {
        
        rocket.style.display =  "block"
        // gsap.to(".rocket", {
        //     duration: 1,
        //     x: rocketWidth,
        //     y: y,
            
        //     ease: "back",
        // })
    })

    block.addEventListener("mousedown", () => { 
        x = lastX[i.toString()] !== 0 ? lastX[i.toString()] : x
        let acc = 1
        accelerate = setInterval(() => {
            let rocketX = rocket.getBoundingClientRect().x
            acc = rocketX < windowWidth - rocketWidth ?  acc * 1.003 : 0
            x = x + acc

            moveRocket(y, x)
        },1)
        
     })

    block.addEventListener("mouseup", () => {
        lastX[i.toString()] = x
        console.log(lastX)
        x = rocketWidth
        clearInterval(accelerate)
        moveRocket(y, x)
    })
})


function moveRocket(y, x) {
    gsap.to(".rocket", {
        duration: 1,
        x: x,
        y: y,
        rotationX: 360,
    })
}
