let rblock = document.querySelector(".block--red");
rblock.style.border = '2px solid yellow';
let bblock = document.querySelector(".block--blue")
bblock.style.border = '2px solid red';
let gblock = document.querySelector(".block--green");
gblock.style.border = '2px solid red';
let pblock = document.querySelector(".block--pink")
pblock.style.border = '2px solid blue';
let gyblock = document.querySelector(".block--gray")
gyblock.style.border = '2px solid blue';
let bcontainer = document.querySelector(".blocks")
bcontainer.style.border = '2px solid blue';
bcontainer.style.maxWidth = "1920px";
bcontainer.style.width = "100%";
bcontainer.style.boxSizing = "border-box";//    box-sizing: border-box;

const cwidth = bcontainer.style.width;
console.log(cwidth)

let count = 0;
const orderB = (event) => {
    // event.stopPropagation();
    event.target.style.order = --count;
}

bblock.addEventListener('click', orderB)
rblock.addEventListener('click', orderB)
gblock.addEventListener('click', orderB)
pblock.addEventListener('click', orderB)
gyblock.addEventListener('click', orderB)
bblock.addEventListener('click', orderB)



let msTinterv;
let mvRinterval;
let mkey = 0;

const orderMouse = (event) => {
    mkey++
    event.stopPropagation();
    
    let distIncrement = 10;
    mvRinterval = setInterval(function () {
        
       
        console.log("Inside: " + bcontainer.style.width);
        if (distIncrement < 1785) {
            distIncrement++;
            event.target.style.marginLeft = distIncrement + 'px';
        } else {
            // event.target.style.alignSelf = "flex-end"
            // clearInterval(mvRinterval);
            clearInterval(orderMouse)
            event.stopPropagation();
            // return;
        }
        
    }, 1);
}
function rTerminate() {
    clearInterval(mvRinterval);
    // clearInterval(mvLinterval)
}
function lTerminate() {
    // clearInterval(mvRinterval);
    clearInterval(mvLinterval)
}

    // event.stopPropagation();
    // let index = 0;
    // let ival = event.target.style.marginLeft;
    // for (let i = 0; 92 >= i; i++) {
    //     let perc = i + "%"
    //     // event.target.style.alignSelf = "flex-end";
    //     event.target.style.marginLeft = perc.toString();
    //     if (event.target.style.paddingRight === "30px") {
    //         event.target.style.alignSelf = "flex-end";

    let mvLinterval;
    const orderReturn = (event) => {
        mkey++
        event.stopPropagation();
        // event.stopPropagation();
        // event.target.style.alignSelf = "flex-start";
        // event.target.style.marginRight = "1785px"
        let distIncrement = 1785;
        mvLinterval = setInterval(function() {
            
            clearInterval(orderMouse);
            if (distIncrement >= 10) {
                distIncrement--;
                event.target.style.marginLeft = distIncrement + 'px';
            }
            else {
                // event.target.style.alignSelf = "flex-start";
                // clearInterval(mvLinterval);
                clearInterval(orderReturn)
                event.stopPropagation();
                // return;
            }
        }, 1);



        // for (let i = 0; 92 >= i; i++) {
        //     let perc = i + "%"
        //     // event.target.style.alignSelf = "flex-end";
        //     event.target.style.marginRight = perc.toString();
        //     if (event.target.style.paddingLeft === "30px") {
        //         event.target.style.alignSelf = "flex-start";

        //     }
        // }
        // event.target.style.backgroundColor = "white";
    }
    // const blocks = document.querySelector(".blocks")
    // for (let i = 0; i < blocks.children.length; i++) {
    //     blocks.children[i].addEventListener('click', orderMouse);
    // }
rblock.addEventListener('mousedown', orderMouse)
bblock.addEventListener('mousedown', orderMouse)
gblock.addEventListener('mousedown', orderMouse)
pblock.addEventListener('mousedown', orderMouse)
gyblock.addEventListener('mousedown', orderMouse)

rblock.addEventListener('mouseup', orderReturn)
bblock.addEventListener('mouseup', orderReturn)
gblock.addEventListener('mouseup', orderReturn)
pblock.addEventListener('mouseup', orderReturn)
gyblock.addEventListener('mouseup', orderReturn)

// bblock.addEventListener('mousedown', orderMouse)
// function countTime() { msTinterv = setInterval(function () { digitFunction() }, 10) };
// function terminate() {
//     clearInterval(msTinterv)
// }


// function timer() { msTinterv = setInterval(function () { mvBlock() }, 10) } ;