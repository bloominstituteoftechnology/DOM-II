let funBusH1 = document.querySelector('.logo-heading');
let funner = function () {
    if (funBusH1.innerHTML === 'Fun Bus') {
        funBusH1.innerHTML = 'The Funnest Bus!'
    }
    else {
        funBusH1.innerHTML = 'Fun Bus';
    }
}
funBusH1.addEventListener('click', funner);

let busImage = document.querySelector('.intro img');
let addBorder = function () {
    if (busImage.style.borderBottom === '') {
        busImage.style.borderBottom = '2px dashed #C0C0C0'; 
    }
    else {
        busImage.style.borderBottom = '';
    }
}
busImage.addEventListener('mouseenter', addBorder);
