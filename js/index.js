
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
let backward = false;
bus.addEventListener("mouseover", (e) => {
    if(!busF){
        let start = Date.now();
        e.target.style.margin = '0% 0% 0% 0%';
        e.target.style.animateFillMode = 'backwards';

        e.target.animate([
            // keyframes
            { transform: 'translateX(-80%)' }, 
            {transition: 'all 3s linear'},
            { transform: 'translateX(100%)' },
            {transition: 'all 3s linear'},
          ], { 
            // timing options
            duration: 1000,
            
            iterations: 1
          })

       

        // if(backward){
        //     // e.target.style.transition = 'all 1s easein'
        //  e.target.style.transform = 'translateX(100%)';
        //  e.target.style.transition = 'all 3s linear'
        // }
    }
});


let selectDst = true;
let selectDestination = document.querySelector('.content-destination');
selectDestination.addEventListener('click', (e) => {
    let himg = document.getElementById('world');
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






