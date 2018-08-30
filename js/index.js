// Your code goes here

//****Mouseover  ********** */
// const funBusImg = document.querySelector('.intro img');

// // cb - Mouseover event handler
// //Temporarily hide bus image
// function hideFunBusImg(event){
//     event.target.style.display = 'none';

//     setTimeout(function(){
//         event.target.style.display = '';
//     }, 1000);

// }
// //Add Event listeners for funBusImg
// funBusImg.addEventListener('mouseover', hideFunBusImg);


//************* Keydown Event**************/
// //change footer text on keydown
// let footer = document.querySelector('.footer');
// let footerText = ''
// //keydown event handler
// function changeFooterText(event){
//     footerText += event.key;
//     footer.textContent = footerText;
// }

// document.addEventListener('keydown', changeFooterText);


/********************************************
 * wheel event
 *****************************************/

 //wheel event handler
// let dynamicFontSize = '1.6';

// function changeFont(event){
//     console.log(event.deltaY);
//     console.log(document.querySelector('body').style.fontSize);
//     if (event.deltaY > 0) {  //wheel direction down
//         dynamicFontSize = parseFloat(dynamicFontSize) + 0.2;
//         dynamicFontSize = (dynamicFontSize.toString() + 'em');
//         document.querySelector('.logo-heading').style.fontSize = dynamicFontSize;
//     }
//     if (event.deltaY < 0){  //wheel direction up
//         dynamicFontSize = parseFloat(dynamicFontSize) - 0.2;
//         dynamicFontSize = (dynamicFontSize.toString() + 'em');
//         document.querySelector('.logo-heading').style.fontSize = dynamicFontSize;
//     }
// }
// document.addEventListener('wheel', changeFont);


/*********************************************************
 * DRAG / DROP EVENT
 ****************************************************** */

//make image draggable
//  const letsGoImg = document.querySelector('.img-content img');
// letsGoImg.draggable = true;
// letsGoImg.style.cursor = 'pointer';


// //create functionality for drop container
// const dropContainer = document.querySelector('.text-content');

// //event handler for drop container
// function dragDrop(){
//     dropContainer.appendChild(letsGoImg);
// }

// //Add event listener for drop container
// dropContainer.addEventListener('drop', dragDrop);

// // prevent default to allow drop
// dropContainer.addEventListener("dragover", function (event) {
//     event.preventDefault();
// });


/********************************************************
 * LOAD EVENT
 *****************************************************/

 //Give message saying that resources have finished loading
 window.addEventListener('load', function(event){
    //grab header
    const header = document.querySelector('.main-navigation');
    const infopara = document.createElement('p');
    infopara.textContent = 'All Resources have finished loading!';
    infopara.style.color = '#ff1111';
    header.prepend(infopara);

    setTimeout(() => {
        infopara.style.display = 'none';
    }, 3000);

 });