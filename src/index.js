import './less/index.less'

// Your code goes here!
const get =(selector) => {
    return document.querySelector(selector)
}

const getAll= (selector) => {
    return document.querySelectorAll(selector)
}

//1 //Color Links
const test = get('.main-navigation');
test.addEventListener('mouseover', event =>{
    event.preventDefault()
    event.target.style.color = 'orange';
})

//2 //removes Links click
const links = get('.nav')

let linkGone = (event) => {
    event.preventDefault()
    links.remove('a')
}
links.addEventListener('click', linkGone)


//3//mouseover
const mainImg = get('img')

function changeImg(event){
    mainImg.setAttribute('src', 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg')
}

function changeBack(event){
    mainImg.setAttribute('src', 'http://localhost:9000/img/fun-bus.jpg')
}

mainImg.addEventListener('mouseover',changeImg)



//4 mouse out
mainImg.addEventListener('mouseout', changeBack)

//5 key down
const paragraph = get('p')
console.log(paragraph)

const changePColors = (event) => {
    if(event.code === 'Space'){
        paragraph.style.color = 'blue'
        console.log('itworks')
    }
    console.log('2')
}
window.addEventListener('keydown', changePColors)

//6 Double Click
const paragraphs = getAll('p')
const paragraphsArray = Array.from(paragraphs)
function changeParagraphsSize(event, paragraphs){
    this.style.fontSize = '20px'
} 
paragraphsArray.forEach(element => {
    console.log('hello') 
    element.addEventListener('dblclick', changeParagraphsSize)
})

//7 resize
window.addEventListener('resize', event => {
    document.body.style.backgroundColor = 'black'
})


//8 Drag
mainImg.addEventListener('drag', event => {
    document.body.style.backgroundColor = 'red'
})


//9 dragend
mainImg.addEventListener('dragend', event => {
    document.body.style.backgroundColor = 'white'
})

//10 context menu
document.addEventListener('contextmenu', event => {
    document.body.style.display = 'none'
})

document.addEventListener('dblclick', event => {
    document.body.style.display = 'initial'
    event.stopPropagation();
})

//11 event propagation
const btnParent = get('.destination')

function changeParent(event){
    btnParent.style.backgroundColor = 'grey'
    event.stopPropagation()
}
btnParent.addEventListener('click', changeParent)

const btnChild = get('.btn')

function changeChild(event){
    btnChild.style.backgroundColor = 'lime'
    event.stopPropagation()
}
btnChild.addEventListener('click', changeChild)
