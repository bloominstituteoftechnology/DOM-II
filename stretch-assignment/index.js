
//get the blocks and add their event listeners
let block = document.querySelectorAll('.block');
block.forEach(item => {
    item.addEventListener('click', rocket, {once: false});
    item.addEventListener('mousedown', traveler);
})

//variables for ease of testing
// let red = block[0]
// let blue = block[1]
// let green = block[2]
// let pink = block[3]
// let gray = block[4]

//setting initial flex order values
block[0].style.order = 1;
block[1].style.order = 2;
block[2].style.order = 3;
block[3].style.order = 4;
block[4].style.order = 5;

function rocket(){
    //for loop to iterate over block list. if the block has an id, it is removed. if the block has an order below the current selected block, order is increased by 1.
    for (let i = 0; i < block.length; i++){
        if (block[i].style.order < this.style.order) {
            block[i].removeAttribute('id');
            block[i].style.order = parseInt(block[i].style.order) + 1;
            }
}

//variables for rocket tranform
this.setAttribute('id', 'rocket')
let selected = document.querySelector('#rocket');
//rocket y position before change
let startY = parseInt(selected.offsetTop) - 100//51;
//rocket y position after change
let endY = 0;

//animation for rocket from startY to endY
TweenLite.fromTo(selected, 2, {
    y: startY}, {y: endY, ease: Power4.easeInOut});

//set new flex order for rocket element;
this.style.order = 1;

}//end rocket function

//variables for traveler function

function minmax(value, min, max)
{
    if(parseInt(value) < min || isNaN(parseInt(value)))
        return min;
    else if(parseInt(value) > max)
        return max;
    else return value;
}
let curLeft = 10;
// let curLeft = Math.min(Math.max(parseInt(curLeft), 1), 100);
function traveler() {
    for (let i = 0; i<block.length; i++){
        block[i].removeAttribute('id');
    }
    this.setAttribute('id', 'traveler');

    let selected = document.getElementById('traveler');
    go = setInterval(function(){
      curLeft = Math.min(Math.max(parseInt(curLeft) + 10, 10), 500);
        // curLeft = parseInt(curLeft) + 10;
        selected.style.marginLeft = curLeft + 'px';
        console.log(curLeft);
    }, 100);


   window.addEventListener('mouseup', function(){
    if (go) clearInterval(go);
    // selected.style.marginLeft = '10px';
    console.log(curLeft);
    let back = setInterval(function(){
        curLeft = Math.min(Math.max(parseInt(curLeft) - 10, 10), 500);
        selected.style.marginLeft = curLeft + 'px';
        return curLeft;
    }, 100)//end setInterval(back)
   });

}; //end traveler
