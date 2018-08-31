function blocky() {

    //when a block is clicked it should go to the top of the stack
    const redBlock = document.querySelector(".block--red");
    const blueBlock = document.querySelector(".block--blue");
    const greenBlock = document.querySelector(".block--green");
    const pinkBlock = document.querySelector(".block--pink");
    const grayBlock = document.querySelector(".block--gray");

    /******* ADD LISTENERS *************/
    redBlock.addEventListener("click", redHandler);
    blueBlock.addEventListener("click", blueHandler);
    greenBlock.addEventListener("click", greenHandler);
    pinkBlock.addEventListener("click", pinkHandler);
    grayBlock.addEventListener("click", grayHandler);

    //redBlock.addEventListener("mousedown", redDwnHandler);
    //blueBlock.addEventListener("mousedown", blueDwnHandler);
    //greenBlock.addEventListener("mousedown", greenDwnHandler);
    //pinkBlock.addEventListener("mousedown", pinkDwnHandler);
    //grayBlock.addEventListener("mousedown", grayDwnHandler);
    
    /**** FOR USE WITH THE GSAP GREENSOCK PLUGIN *******/
    /*redBlock.id = "redBlock";
    blueBlock.id = "blueBlock";
    greenBlock.id = "greenBlock";
    pinkBlock.id = "pinkBlock";
    grayBlock.id = "grayBlock";
    
    Draggable.create("#redBlock");
    Draggable.create("#blueBlock");
    Draggable.create("#greenBlock");
    Draggable.create("#pinkBlock");
    Draggable.create("#grayBlock");*/

const blockArr = ["redBlock", "blueBlock", "greenBlock", "pinkBlock", "grayBlock"];

function redHandler() {
    let redPos = 0;
        for(i = 0; i < blockArr.length; i++) {
            if (blockArr[i] === "redBlock") {
                redPos = i; 
            }
        };
    if (redPos !== "0") {
        blockArr.splice(redPos, 1);
        blockArr.unshift("redBlock");
    }
    reOrder();
};

function blueHandler() {
    let bluePos = 0;
        for(i = 0; i < blockArr.length; i++) {
            if (blockArr[i] == "blueBlock") {
                bluePos = i;
            }
        };
    if (bluePos !== 0) {
        blockArr.splice(bluePos, 1);
        blockArr.unshift("blueBlock");
    }
    reOrder(); 
};

function greenHandler() {
    let greenPos = 0;
        for(i = 0; i < blockArr.length; i++) {
            if (blockArr[i] == "greenBlock") {
                greenPos = i;
            }
        };
    if (greenPos !== 0) {
        blockArr.splice(greenPos, 1);
        blockArr.unshift("greenBlock");
    }
    reOrder(); 
};

function pinkHandler() {
    let pinkPos = 0;
        for(i = 0; i < blockArr.length; i++) {
            if (blockArr[i] == "pinkBlock") {
                pinkPos = i;
            }
        };
    if (pinkPos !== 0) {
        blockArr.splice(pinkPos, 1);
        blockArr.unshift("pinkBlock");
    }
    reOrder(); 
};

function grayHandler() {
    let grayPos = 0;
        for(i = 0; i < blockArr.length; i++) {
            if (blockArr[i] == "grayBlock") {
                grayPos = i;
            }
        };
    if (grayPos !== 0) {
        blockArr.splice(grayPos, 1); 
        blockArr.unshift("grayBlock");
    }
    reOrder(); 
};

function reOrder() {
    // creates the new order of the array then
    // assigns it to the css style order 
    let redP,blueP,greenP,pinkP,grayP = 0;
    for(i = 0; i < blockArr.length; i++) {
        if (blockArr[i] === "redBlock") {
            redP = i;
        } else {
            if (blockArr[i] == "blueBlock") {
                blueP = i;
            } else {
                if (blockArr[i] == "greenBlock") {
                    greenP = i;
                } else {
                    if (blockArr[i] == "pinkBlock") {
                        pinkP = i;
                    } else {
                        if (blockArr[i] == "grayBlock") {
                            grayP = i;
                        }
                    }

                }
            }
        }

    }
    redBlock.style.order = redP;
    blueBlock.style.order = blueP;
    greenBlock.style.order = greenP;
    pinkBlock.style.order = pinkP;
    grayBlock.style.order = grayP;

};
//when the mouse button is held down the block should go to the 
//right indefinitely.
};

blocky();
