const red = document.getElementsByClassName(".block--red"[0]);
const blue = document.getElementsByClassName(".block--blue"[0]);
const green = document.getElementsByClassName(".block--green"[0]);
const pink = document.getElementsByClassName(".block--pink"[0]);
const gray = document.getElementsByClassName(".block--gray"[0]);


const bubble = (element) => {
    element.target.style.order = -1 ;
    
}
red.addEventListener('click', bubble());
blue.addEventListener('click', bubble());
green.addEventListener('click', bubble());
pink.addEventListener('click', bubble());
gray.addEventListener('click', bubble());
