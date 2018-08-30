// Your code goes here

//****Mouseover  ********** */
const funBusImg = document.querySelector('.intro img');

// cb - Mouseover event handler
//Temporarily hide bus image
function hideFunBusImg(event){
    event.target.style.display = 'none';

    setTimeout(function(){
        event.target.style.display = '';
    }, 1000);

}
//Add Event listeners for funBusImg
funBusImg.addEventListener('mouseover', hideFunBusImg);


//************* Keydown Event**************/
//change footer text on keydown
let footer = document.querySelector('.footer');
let footerText = ''
//keydown event handler
function changeFooterText(event){
    footerText += event.key;
    footer.textContent = footerText;
}

document.addEventListener('keydown', changeFooterText);

