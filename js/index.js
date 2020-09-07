// Your code goes here
let newImg = new Image(200,200);
let slctD = document.querySelector('.content-destination');
window.addEventListener('load',() =>{
    
    
 

    console.log('hello'+newImg);
    newImg.onload =slctD;
    newImg.src = '../img/tenor.gif';

    slctD.prepend(newImg);
})

function newLoad(){
    
}

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
// let himg = new Image('200','200');
let himg = document.getElementById('world');
let selectDst = true;
let selectDestination = document.querySelector('.content-destination');
selectDestination.addEventListener('click', (e) => {
    let h = document.querySelector('.content-destination > div > h2');
    let hh = document.querySelector('.content-destination > div');
    // let himg = document.createElement('img');
    // image properties
    // himg.style.height = '100%';
    // himg.style.width = '100%';
    // himg.style.position = 'relative';
    himg.style.width = '40%';
    himg.style.height = '40%';
    himg.style.display = 'flex'; 
    // hh.appendChild(himg);
    if(selectDst){
        h.style.width='25%';
        h.style.margin='0 auto 30px';
        selectDst = false;
        hh.prepend(himg);
        console.log(himg)
    }else{
        h.style.width='75%';
        himg.style.display = 'none';
    // h.style.margin='0 auto 30px';
        selectDst = true;
    }
    
    
},false );






