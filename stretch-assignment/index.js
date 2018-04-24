let blocks = document.querySelectorAll(".block")
let space = document.getElementsByClassName("blocks")[0]
let pointDOM = document.getElementById("point")
let timeDOM = document.getElementById("time")
let playButton = document.getElementById("play")
let giveupButton = document.getElementById("giveup")
let shootAudio = document.getElementById('shoot')
let hoverAudio = document.getElementById('hover')
let gameOverDOM = document.getElementsByClassName('gameOver')[0]
let point = 0

// Preset
space.setAttribute('style','cursor: not-allowed')

// Player starts a game
playButton.addEventListener("click", () => {
    startInterval()
})

// Random Continually Position
function startInterval() {
    let time = 30;

    space.setAttribute('style','cursor: auto')

    let interval = setInterval(function() {
        let count = --time;
        
        for(let i=0; i<blocks.length; i++){
            let max = 500;
            let random1 = Math.floor(Math.random()*max)
            let random2 = Math.floor(Math.random()*max)
            blocks[i].setAttribute('style', `left: ${random1}px; top: ${random2}px`)
        }

        timeDOM.innerHTML = count;

        // Run out of time
        if(count <= 0) {
            clearInterval(interval);
            space.setAttribute('style','cursor: not-allowed')
        }

        // Player stops a game
        giveupButton.addEventListener("click", () => {
            clearInterval(interval);
            space.setAttribute('style','cursor: not-allowed')
            gameOverDOM.setAttribute('style','display: block')
        })
    },1000)
}

// Player's triggers
for(let i=0; i<blocks.length; i++){
    // Player catches
    blocks[i].addEventListener('click', () => {
        shootAudio.play();
        point++;
        pointDOM.innerHTML = point;
    })

    // Player chases
    blocks[i].addEventListener('mouseover', () => {
        let max = 600;
        let random1 = Math.floor(Math.random()*max)
        let random2 = Math.floor(Math.random()*max)
        blocks[i].setAttribute('style', `left: ${random1}px; top: ${random2}px;`)
    })

    // Player misses
    blocks[i].addEventListener('mouseleave', () => {
        hoverAudio.play();
    })
}