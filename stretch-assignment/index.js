const block = document.querySelectorAll(".block");

let lastOrder = 0;
let xIndex = {
    "block--red": 0,
    "block--blue": 0,
    "block--green": 0,
    "block--pink": 0,
    "block--gray": 0
}

// block.forEach((item) => {
//     item.addEventListener('click', () => {
//         lastOrder -= 1;
//         item.style.order = lastOrder
//     })

//     item.addEventListener('mousedown', () => {
//         let count = 0;
//         while(item.onmousedown){
//             count++;
//         }
//         xIndex[item.classList[1]]++;
//         console.log(count)
//     })
// })

for(let i = 0; i <= block.length; i++){
    block[i].addEventListener('click', function(){
        lastOrder -= 1;
        block[i].style.order = `${lastOrder}`;
    })
    block[i].addEventListener('mousedown', function(){
        window.setInterval(function(){
            xIndex[block[i].classList[1]]++;
            TweenMax.to(`.${block[i].classList[1]}`, 0.5, {
                x:xIndex[block[i].classList[1]],
            })
        },10)
        console.log("holding it down");
    })
    block[i].addEventListener('mouseup', function(){
        window.clearInterval(interval);
        console.log("released");
    })
}