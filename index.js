let rocket = (e) => {
     siblings = e.target.parentNode.children;
     for (let i = 0; i < siblings.length;i++) {
         siblings[i].style.order = 0;
     }
    e.target.style.order = -1;
}

let pushright = (e) => {
    let dist = window.innerWidth - 120;
    e.target.style = 'transition:margin-left, 2s; margin-left:'+ dist + 'px';
}
let pushleft = (e) => {
    e.target.style = 'transition:margin-left, 3s; margin-left:10px';
}


let className = document.getElementsByClassName('block');

for (let i = 0; i < className.length; i ++) {
    className[i].addEventListener('click',rocket);
    className[i].addEventListener('mousedown',pushright);
    className[i].addEventListener('mouseup',pushleft);
}