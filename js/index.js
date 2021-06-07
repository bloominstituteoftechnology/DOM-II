// Your code goes here
//1
const borderBusImage = document.querySelector('.container .intro img')
borderBusImage.addEventListener('mouseover', () => {
    borderBusImage.style.borderRadius = '10px'
})

//2
const titleCenter = document.querySelector('h2')
titleCenter.addEventListener('dblclick', () => {
    titleCenter.style.textAlign = 'center'
})

//3
const secondTitleCenter = document.getElementsByTagName('h2')[1]
secondTitleCenter.addEventListener('onkeydown', (key) => {
    log.textContent += ` ${key.code}`
})

//4
const paragraphTextColor = document.getElementsByTagName('p')[0]
paragraphTextColor.addEventListener('mouseover', () => {
    paragraphTextColor.style.color = '#236e62'
})

//5
const errorImage2 = document.getElementsByTagName('img')[1]
errorImage2.addEventListener('error', myFunction)

//6
const submitPage = document.getElementsByClassName('btn')[0]
submitPage.addEventListener('dblclick', () => {
    submitPage.textContent = 'Yup'
})

