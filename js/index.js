// Your code goes here
//const advenImgs = ['adven.jpg', 'adven1.png', 'adven2.png'];
//const destImgs = ['dest.jpg', 'dest1.png', 'dest2.png'];

// Cycle Through Different Images
const destImgs = {
    images: ['img/dest.jpg', 'img/dest1.png', 'img/dest2.png'],
    index: 0
}

const advenImgs = {
    images: ['img/adven.jpg', 'img/adven1.png', 'img/adven2.png'],
    index: 0
}

function cycleImg(element, imgObj){
    element.src = imgObj.images[imgObj.index];
    imgObj.index++;
    if(imgObj.index >= imgObj.images.length){
        imgObj.index = 0;
    }
}

let destInterval;
let advenInterval;

function destSlideShowHover(event){
    cycleImg(destImg, destImgs);
    destInterval = setInterval(cycleImg, 1000, destImg, destImgs);
}

function destSlideShowHoverCancel(event){
    clearInterval(destInterval);
}

function advenSlideShowHover(event){
    cycleImg(advenImg, advenImgs);
    advenInterval = setInterval(cycleImg, 1000, advenImg, advenImgs);
}

function advenSlideShowHoverCancel(event){
    clearInterval(advenInterval);
}

const destImg = document.getElementsByClassName('img-content')[0].children[0];
const advenImg = document.getElementsByClassName('img-content')[1].children[0];

destImg.addEventListener('mouseenter', destSlideShowHover);
advenImg.addEventListener('mouseenter', advenSlideShowHover);

destImg.addEventListener('mouseleave', destSlideShowHoverCancel);
advenImg.addEventListener('mouseleave', advenSlideShowHoverCancel);

// Change nav bar color
const navBar = document.querySelector('.main-navigation');

function pageScrollHandler(event){
    const mixPer = window.scrollY / window.innerHeight;
    let red = 255; 
    let green = Number.parseInt(255 - (255 - 235) * mixPer); 
    green = green < 235 ? 235 : green; 
    let blue = Number.parseInt(255 - (255 - 205) * mixPer); 
    blue = blue <205 ? 205 : blue; 
    navBar.style.background = `rgb(${red}, ${green}, ${blue})`
}

window.addEventListener('scroll', pageScrollHandler);

// Add drag and drop coupon
const contentPick = document.querySelector('.content-pick');
contentPick.style.flexWrap = 'wrap';

const coupons = document.createElement('div');
coupons.className = 'coupons';
contentPick.prepend(coupons);

const twentyfivePerOff = document.createElement('div');
const freeMeals = document.createElement('div');

twentyfivePerOff.draggable = true;
freeMeals.draggable = true;

twentyfivePerOff.className = 'coupon twenty-five';
freeMeals.className = 'coupon free-meals';

coupons.appendChild(twentyfivePerOff);
coupons.appendChild(freeMeals);

const twentyFiveHeader = document.createElement('h4');
const freeMealsHeader = document.createElement('h4');
twentyFiveHeader.style.fontSize = '4.0rem';
freeMealsHeader.style.fontSize = '4.0rem';
twentyFiveHeader.style.textAlign = 'center';
freeMealsHeader.style.textAlign = 'center';
twentyFiveHeader.style.paddingTop = '35px';
freeMealsHeader.style.paddingTop = '10px';
const dragNDrop1 = document.createElement('p');
const dragNDrop2 = document.createElement('p');
dragNDrop1.style.fontSize = '1.0rem';
dragNDrop2.style.fontSize = '1.0rem';
dragNDrop1.style.textAlign = 'center';
dragNDrop2.style.textAlign = 'center';

twentyFiveHeader.innerHTML = '25% off';
freeMealsHeader.innerHTML = 'Meals Included';
dragNDrop1.innerHTML = 'Drag coupon onto a destination button';
dragNDrop2.innerHTML = 'Drag coupon onto a destination button';

twentyfivePerOff.appendChild(twentyFiveHeader);
twentyfivePerOff.appendChild(dragNDrop1);
freeMeals.appendChild(freeMealsHeader);
freeMeals.appendChild(dragNDrop2);

let draggedElement;
const sun = document.getElementsByClassName('destination')[0].children[2];
const mountain = document.getElementsByClassName('destination')[1].children[2];
const island = document.getElementsByClassName('destination')[2].children[2];


document.addEventListener('dragstart', function(event){
    draggedElement = event.target;
});

document.addEventListener('dragover', function(event){
    event.preventDefault();
})

document.addEventListener('dragenter', function(event){
    if(event.target === sun){
        event.target.parentNode.style.backgroundColor = '#FEEEA3';
    }

    else if(event.target === mountain){
        event.target.parentNode.style.backgroundColor = '#FEEEA3';
    }

    else if(event.target === island){
        event.target.parentNode.style.backgroundColor = '#FEEEA3';
    }
});

document.addEventListener('dragleave', function(event){
    if(event.target === sun){
        event.target.parentNode.style.backgroundColor = '';
    }

    else if(event.target === mountain){
        event.target.parentNode.style.backgroundColor = '';
    }

    else if(event.target === island){
        event.target.parentNode.style.backgroundColor = '';
    }
});

document.addEventListener('drop', function(event){
    if(event.target === sun){
        event.target.parentNode.style.backgroundColor = '';
        if(draggedElement === twentyfivePerOff){
            event.target.innerHTML = '25% off!!!'
        }
        else if(draggedElement === freeMeals){
            event.target.innerHTML = 'Free Meals!!!'
        }
    }

    else if(event.target === mountain){
        event.target.parentNode.style.backgroundColor = '';
        if(draggedElement === twentyfivePerOff){
            event.target.innerHTML = '25% off!!!'
        }
        else if(draggedElement === freeMeals){
            event.target.innerHTML = 'Free Meals!!!'
        }
    }

    else if(event.target === island){
        event.target.parentNode.style.backgroundColor = '';
        if(draggedElement === twentyfivePerOff){
            event.target.innerHTML = '25% off!!!'
        }
        else if(draggedElement === freeMeals){
            event.target.innerHTML = 'Free Meals!!!'
        }
    }
});