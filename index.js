const nodeList = document.getElementsByClassName('blocks')[0]
let timer;
nodeList.addEventListener('click', (event) => {
    if (event.target.parentNode.className === "blocks") {
      event.target.parentNode.insertBefore(event.target, event.target.parentNode.childNodes[0]);
    }
});
let counter =0;
nodeList.addEventListener('mousedown', (event) => {
    timer = window.setInterval(function(){
    if (event.target.parentNode.className === "blocks") {
        console.log('working')
counter ++
counter +='px'
        event.target.style.marginRight ="";


   
    }

},10)


});

