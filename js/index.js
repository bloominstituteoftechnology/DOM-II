

//== Ten Random Events =========================================================

//-- 1: dblclick ---------------------------------
document.body.addEventListener('dblclick', (event) => {
    event.target.style.fontSize = '4rem';
    setTimeout(() => {event.target.style.fontSize = 'unset';},1000);
    console.log('Current: '+event.currentTarget.tagName);
});