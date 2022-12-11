import './less/index.less'


let reset = (_element)=>{
    setTimeout(()=>{
        _element.textContent = '';
        // __element.style.backgroundColor = " white"
    }, 2000);
}

let resetstyle = (ele)=>{
    setTimeout(()=>{
        ele.style.backgroundColor = 'white'
    }, 5000);
}

// Your code goes here!
const nbar = document.querySelector('.nav')
// console.log(nbar);

nbar.children[0].addEventListener('mouseover', (event)=>{
    nbar.style.backgroundColor = 'red'
    resetstyle(nbr.children[0])
})

nbar.addEventListener('click', (event)=>{
    nbar.style.backgroundColor = 'black'
})

nbar.addEventListener('mouseout', (event)=>{
    nbar.style.backgroundColor = 'green'
})

/////////////////////////////////////////////

const top = document.querySelector('.intro')
const toptext = document.querySelector('.intro h2')
const tp = document.querySelector('.intro p')
// console.log(toptext)
// const b1 = document.createElement('p')
// b1.textContent = 'text'
// b1.classList.add('bl')
// console.log(b1)

// const newtext = document.getElementsByClassName('b1')
// const nt = document.createTextNode(" word" )

window.addEventListener('scroll', ()=>{
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.screenY;
    // console.log(scrolled)
    console.log(scrollable)

});

top.addEventListener('dblclick', (event)=>{
    toptext.textContent = "Jaisa Loves Wheels on the bus"
    reset(toptext);
})
tp.addEventListener('pointerover', (event)=>{
    tp.textContent = ' my daughter is adorable and i love her very much'
})
tp.addEventListener('pointerleave',()=>{
    tp.textContent = 'jasia is having a good day'
})

tp.addEventListener('pointerleave', ()=>{
    tp.style.backgroundColor = 'purple'
    resetstyle(tp);
})
const bp = document.querySelector('.content-section')
// console.log(bp)

bp.addEventListener('pointerenter', (event)=>{
    bp.style.backgroundColor = 'pink'
    resetstyle(bp)
})


///////////////////////////////////////////////////////////////////////

// const m1 = document.querySelector('')
const clickme = document.querySelector('.content-pick .btn')
const cm2 = document.querySelector('.content-pick .destination p')
cm2.classList.add('p1')

const pslide = document.querySelector('.p1')
const apply = document.querySelector('.p1>button.activate')
let ic = 0;

// cm2.addEventListener('animationstart', ()=>{
//     pslide.textContent = `animations started: ${ic}`;
// })
// cm2.addEventListener('animationiteration', ()=>{
//     ic++;
//     pslide.textContent = `animation iterations: ${ic}`; 
// })
// cm2.addEventListener('animationend', ()=>{
//     pslide.textContent = "animation ended";
//     pslide.classList.remove('p1');

// })
// cm2.addEventListener('animationcancel', ()=>{
//     pslide.textcontent = "ended"
// })

// apply.addEventListener('click', ()=>{
//     pslide.classList.toggle('p1');
//     pslide.textContent = 'Expedition excursion design excursion fun, clean simple organized WordPress Travel colorful webdesign. Traveler blogger website design expedition clean excursion traveling. '
//     ic = 0;
//     const active = pslide.classList.contains('p1')
//     apply.textContent = active ? "cancel" : "activate";
// })
// console.log(pslide)







///////////////////////////////////////////////////////////////////////////////////////////
clickme.addEventListener('transitionrun', (event)=>{
    clickme.textContent = 'Sign up'

});

clickme.addEventListener('transitionend', (event)=>{
    clickme.textContent = 'Signed up'
})