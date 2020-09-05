// Your code goes here
let bus = document.getElementById('bus');
let busF = true;
bus.addEventListener("dblclick", (e) => {
    if(busF){
        e.target.style.width = '50%';
    e.target.style.height = '100%';
    e.target.style.marginLeft = '25%';
    e.target.style.marginRight = '25%';
    // TODO: Clip bus as a bus sprite and transition it down x cord
    busF= false;
    }else{
        e.target.style.width = '100%';
    e.target.style.height = '100%';
    e.target.style.marginLeft = '0%';
    e.target.style.marginRight = '0%';
    busF=true;
    }
});

let selectDst = true;
let selectDestination = document.querySelector('.content-destination');
selectDestination.addEventListener('click', (e) => {
    let h = document.querySelector('.content-destination > h2');
    let hh = document.querySelector('.content-destination > div');
    let himg = document.createElement('img');
    himg.style.src = '../img/tenor.gif';
    himg.style.height = '100%';
    himg.style.width = '100%';
    himg.style.position = 'relative';
    selectDestination.appendChild(himg);
    
    if(selectDst){
        h.style.width='25%';
    // h.style.margin='0 auto 30px';
    selectDst = false;
    hh.appendChild(himg);
    }else{
        h.style.width='75%';
    // h.style.margin='0 auto 30px';
    selectDst = true;
    }
    
    
} );