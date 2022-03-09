import './less/index.less'

// Your code goes here!

let pancake = document.querySelector('.btn')

let kp3 = document.querySelector("input")

let kp4 = document.querySelector(".input")

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
        fun2 = "fuchsia"
    } else if (fun2 === 1) {
        fun2 = "hotpink"
    } else if (fun2 === 2) {
        fun2 = "orchid"
    } else if (fun2 === 3) {
        fun2 = "white"
    } else if (fun2 === 4) {
        fun2 = "plum"
    } else if (fun2 === 5) {
        fun2 = "coral"
    } else if (fun2 === 6) {
        fun2 = "violet"
    } else if (fun2 === 7) {
        fun2 = "pink"
    } else if (fun2 === 8) {
        fun2 = "salmon"
    } else if (fun2 === 9) {
        fun2 = "magenta"
    }

    
    

    fun[Math.floor(Math.random() * 12)].style.backgroundColor = (fun2)
}
}

kp3.onkeydown = kdf;

let kp2 = document.querySelector("h1")

function wheel0 () {
    kp2.style.borderWidth = "5px"
    kp2.style.borderStyle = "solid"
    kp2.style.borderColor = "#ff88ff"
}

kp2.addEventListener('wheel', wheel0)

function loadio () {
    kp2.style.borderWidth = "0px"
    kp2.style.borderStyle = "solid"
    kp2.style.borderColor = "#white"
}

kp2.addEventListener('load', loadio)

function x () {
    kp3.style.backgroundColor = "#88ff88"
}

kp3.addEventListener('focus', x)

function y () {
    kp3.style.backgroundColor = "white"
}

kp3.addEventListener('blur', y)

function z () {
    document.querySelector(".l").textContent = document.querySelector(".l").textContent + " ^v^"
}

kp4.addEventListener('change', z)

function o () {
    kp3.style.backgroundColor = "#8888ff"
}

kp3.addEventListener('select', o)

let kp5 = document.querySelector("img")
let g = 1

function dbl () {
    g *= 1.5
    kp5.style.padding = `${g}px`
    console.log(g)
}

kp5.addEventListener('dblclick', dbl)