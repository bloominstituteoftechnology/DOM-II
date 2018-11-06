// Your code goes here
// Constants to access page elements
const introImg = document.getElementsByClassName(`intro`).item(0).getElementsByTagName(`img`).item(0);
const boatImg = document.getElementsByClassName(`content-destination`).item(0).getElementsByTagName(`img`).item(0);

// Adding event listeners
introImg.addEventListener(`click`, function (){
    alert(`Welcome to the Fun Bus!!!`);
});

document.addEventListener(`keydown`, function(e){
    console.log(e.key);
})

document.getElementsByClassName(`container home`).item(0).addEventListener(`copy`, function(e){
    console.log('copied');
    e.clipboardData.setData('text/plain', 'No lööps for you, bröther.');
    e.preventDefault();
})

document.getElementsByTagName(`nav`).item(0).addEventListener(`mouseover`, function(e){console.log(`Hovering over nav item.`)});
document.getElementsByTagName(`nav`).item(0).addEventListener(`mouseleave`, function(e){console.log(`No longer hovering over nav item.`)});

document.addEventListener(`wheel`, function(){alert(`SCROLLING IS FORBIDDEN`)});

document.addEventListener(`drag`, function(e){console.log(`User is dragging ${e.target}`)});

document.addEventListener(`keyup`, function(e){console.log(`User released the key ${e.key}`)});

boatImg.addEventListener(`dblclick`, function(){alert(`Work with us, and you can go there`)});

document.addEventListener(`scroll`, function(){console.log(`user is scrolling`)});
