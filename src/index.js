import './less/index.less'

// Your code goes here!

let pancake = document.querySelector('.btn')

function canbake() {
    console.log("Click ^v^")
}

pancake.addEventListener('click', canbake)


let kp = document.querySelector('.btn')

function kpf() {
    let mathy = Math.floor(Math.random() * 3)

    if (mathy === 1){
    kp.textContent = "Sign Me Up!"
} else if (mathy === 2){
    kp.textContent = "Sign Me Up?"
} else {
    kp.textContent = "Sign Me Up :D"
} 

}

kp.addEventListener('mouseover', kpf)


function kdf() {
    for (let i = 0; i < 50; i++) {

        

    let fun = document.querySelectorAll('div')

    let fun2 = Math.floor(Math.random() * 10)
    if (fun2 === 0) {
        fun2 = "red"
    } else if (fun2 === 1) {
        fun2 = "lime"
    } else if (fun2 === 2) {
        fun2 = "yellow"
    } else if (fun2 === 3) {
        fun2 = "white"
    } else if (fun2 === 4) {
        fun2 = "orange"
    } else if (fun2 === 5) {
        fun2 = "coral"
    } else if (fun2 === 6) {
        fun2 = "tan"
    } else if (fun2 === 7) {
        fun2 = "pink"
    } else if (fun2 === 8) {
        fun2 = "salmon"
    } else if (fun2 === 9) {
        fun2 = "magenta"
    } else {
        fun = "blue"
    }

    
    

    fun[Math.floor(Math.random() * 12)].style.backgroundColor = (fun2)
}
}

document.onkeydown = kdf;