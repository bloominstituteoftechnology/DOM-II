//1
const links = document.querySelectorAll(".nav-link");
links.forEach(element => {
    element.addEventListener('mouseover', (e) => {
        // console.log(event.target)
        e.stopPropagation();
        e.preventDefault();
        element.style.color = "grey";
    })
})


//2
const firstPic = document.getElementsByTagName('img')[0];
firstPic.addEventListener('mouseenter', () => {
    // console.log(event.target)
    firstPic.style.transform = "rotate(180deg)";
    
})


//3

firstPic.addEventListener('mouseleave', () => {
    // console.log(event.target)
    firstPic.style.transform = "rotate(360deg)";

})
//4

//const links = document.querySelectorAll(".nav-link");
links.forEach(element => {
    element.addEventListener('mouseout', () => {
        // console.log(event.target)
        element.style.color = "black";
    })
})

//5
const secondPic = document.getElementsByTagName('img')[1];
secondPic.addEventListener('dblclick', () => {
    // console.log(event.target)
    secondPic.style.transform = "rotate(-180deg)";

})

//5
const firstParagraph = document.getElementsByTagName('p')[0];
//firstParagraph.style.color = "blue";
/*firstParagraph.addEventListener('keypress', () => 
{
    firstParagraph.style.color('pink');
})*/
document.addEventListener('keydown', (event) => 
{
    if(event.key.toLowerCase() === "a")
    {
        firstParagraph.style.color = ('pink');
    }
})


//6
const firstheaderTwo = document.getElementsByTagName('h2')[0];
firstheaderTwo.addEventListener('click', () => 
{
    firstheaderTwo.style.border = "5px solid black";
})


//7 
const secondParagraph = document.getElementsByTagName('p')[1];
secondParagraph.addEventListener('drag', () =>
{
secondParagraph.style.backgroundColor = 'red';
}
)

//8

const secondheaderTwo = document.getElementsByTagName("h2")[1];
document.addEventListener('keyup' ,(event) => 
{
    if (event.key !== "")
    {
        secondheaderTwo.style.color = "turquoise";
    }
    
})

//9
const thirdparagraph = document.getElementsByTagName('p')[2];
document.addEventListener('copy', () => 
{
    thirdparagraph.style.backgroundColor = 'turquoise';
})

//10

document.addEventListener('wheel', () => 
{
    thirdparagraph.style.backgroundColor = 'red';
})