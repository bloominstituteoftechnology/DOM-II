// Your code goes here
// lets go img!
const imgContent = document.querySelectorAll('.img-content');
// enlarge img
imgContent.forEach(icontent => {
    icontent.addEventListener('mouseenter', () => {
    icontent.style.transform = "scale(1.2)";
    icontent.style.transition = 'all 0.3s';
}); 
// return img to normal size
    icontent.addEventListener('mouseleave', () => {
    icontent.style.transform = "scale(1)";
    icontent.style.transform = "all 0.3s";
});
});


// lets go text!
const changeImgFluid = document.querySelectorAll('.text-content');
// rotate text
changeImgFluid.forEach(change => {
    change.addEventListener('mouseover', () => {
        change.style.transform = "rotate(180deg)";
        
    });
    // rotate text back
    change.addEventListener('mouseout', () => {
        change.style.transform = "rotate(360deg)";
    });
});
// adventure awaits
const advAwaits = document.querySelectorAll(".text-content")
// change text color
advAwaits.forEach(awaits => {
    awaits.addEventListener('dblclick', () => {
        awaits.style.color = 'navy';
    })
});






