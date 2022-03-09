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

