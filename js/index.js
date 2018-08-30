let funBusH1 = document.querySelector('h1');
let funner = function () {
    funBusH1.innerHTML = 'Fun Bus - The Funnest!';
}
funBusH1.addEventListener('click', funner);