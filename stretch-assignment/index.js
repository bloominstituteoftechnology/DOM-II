const rocket = document.createElement("div")

rocket.setAttribute("class", "rocket")

document.querySelector(".blocks").append(rocket)

let rocketspeed

document.querySelectorAll(".block").forEach((block, index) => {
    let x = block.getBoundingClientRect().width
    let y = block.getBoundingClientRect().y
    let height = block.getBoundingClientRect().height
    let accelerate 
    console.log(x, y)
    block.addEventListener("click", () => {
        rocket.style.display = "block"
        rocket.style.transform = `translate(${x + 10}px, ${y - 666}px)`
    })

    block.addEventListener("mousedown", () => {
        console.log(x, y)
        let acc = 1
        accelerate = setInterval(() => {
            
            acc = acc * 1.003
            console.log(acc)
            x = x + acc
            rocket.style.transform = `translate(${x}px, ${y - 666}px)`
        },1)
        
    })

    block.addEventListener("mouseup", () => {
        clearInterval(accelerate)
    })
})