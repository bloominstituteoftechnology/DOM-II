const nodeList = document.getElementsByClassName('blocks')[0]
let timer;

// nodeList.addEventListener('click', (event) => {
//     if (event.target.parentNode.className === "blocks") {
//       event.target.parentNode.insertBefore(event.target, event.target.parentNode.childNodes[0]);
//     }
// });


nodeList.addEventListener('mousedown', (event) => {
    clearInterval(timer);
    if (event.target.parentNode.className === "blocks") {
        timer = window.setInterval(function(){
        if(event.target.style.marginLeft === undefined || event.target.style.marginLeft === '' || event.target.style.marginLeft === 0 ) {
            event.target.style.marginLeft = '0px'}
        console.log('working')
        event.target.style.marginLeft = parseInt(event.target.style.marginLeft) + 1 + 'px';
        },10)  
    }
});

nodeList.addEventListener('mouseup', (event) => {
    clearInterval(timer);
    if (event.target.parentNode.className === "blocks") {
        timer = window.setInterval(function(){
        if(parseInt(event.target.style.marginLeft) === 1) {
            clearInterval(timer); }
        console.log('working')
        event.target.style.marginLeft = parseInt(event.target.style.marginLeft) + -1 + 'px';
        },10)  
    }
});

