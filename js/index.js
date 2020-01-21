// Your code goes here

// dblclick #######################################################################
const allImgs = document.querySelectorAll('img')
for (let i = 0; i < allImgs.length; i++) {
    allImgs[i].addEventListener('dblclick', function (e) {
        e.stopPropagation
        allImgs[i].src = `img/baby-yoda-${Number(i+1)}.jpg`
    })
}

// mouseover #######################################################################
const allPs = document.getElementsByTagName('p')
allPsArr = Array.from(allPs)
for (let i = 0; i < allPsArr.length; i++) {
    allPsArr[i].addEventListener('mouseover', function (e) {
        let val1 = Math.floor(Math.random() * Math.floor(256))
        let val2 = Math.floor((Math.random()) * Math.floor(256))
        let val3 = Math.floor((Math.random()) * Math.floor(256))
        allPsArr[i].style.color = `rgb(${val1}, ${val2}, ${val3})`
    })
}

// keydown #######################################################################
const allElements = document.querySelectorAll('*')
allElements.forEach(el => {
    el.addEventListener('keydown', function (e) {
        switch (e.keyCode) {
            case 84: // T
                e.preventDefault()
                el.style.transform = "rotate(360deg)"
                el.style.transition = "1s"
                el.style.transitionTimingFunction = "ease-in"
                break;
            case 82: // R - reset
                e.preventDefault()
                el.style.transform = "unset"
                el.style.transition = "unset"
                el.style.transitionTimingFunction = "unset"
                break
        }
    })
})

// mouseenter #######################################################################
const allAs = document.querySelectorAll('a')
allAs.forEach(el => {
    el.addEventListener('mouseenter', function (e) {
        e.preventDefault()
        el.style.fontWeight = "700"
        el.style.color = "red"
    })
})

// mouseleave #######################################################################
allAs.forEach(el => {
    el.addEventListener('mouseleave', function () {
        el.style.fontWeight = "unset"
        el.style.color = "black"
    })
})

// mousemove #######################################################################
const footer = document.querySelector('footer')
footer.addEventListener('mousemove', function () {
    let val = Math.floor(Math.random() * Math.floor(256))
    footer.style.backgroundColor = `rgb(${val}, ${val}, ${val})`
})

// beforeunload #######################################################################
window.addEventListener('beforeunload', function (e) {
    e.preventDefault()
    e.returnValue = ''
})

// fullscreenchange #######################################################################
const bodyTag = document.querySelector('body')
window.addEventListener('resize', function () {
    console.log('resized')
    bodyTag.style.backgroundImage = "url('https://media.comicbook.com/2019/11/star-wars-the-mandalorian-1195002-1280x0.jpeg')"
    bodyTag.style.backgroundPosition = " top center"
    bodyTag.style.backgroundAttachment = "fixed"
    bodyTag.style.backgroundRepeat = "no-repeat"
    bodyTag.style.backgroundSize = "cover"
});
  
// click #######################################################################
const allH2s = document.querySelectorAll('h2')
allH2s.forEach(el => {
    el.addEventListener('click', function () {
        el.style.fontWeight = "bold"
    })
})

// contextmenu #######################################################################
allH2s.forEach(el => {
    el.addEventListener('contextmenu', function (e) {
        e.preventDefault()
        el.style.fontWeight = "400"
    })
})