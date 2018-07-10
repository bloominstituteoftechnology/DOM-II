const nuBtn = document.createElement('div');
let isNuBtn = false;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function removeVowels(str){
    let vowels = /[aeiou]/gi;
    return str.replace(vowels, '');
}

function createNuBtn(){
    nuBtn.className = "nuBtn";
    nuBtn.innerHTML = "OH YEAH!"
    container.append(nuBtn);
}

function dropIt(e){
    console.log(e.target);
}

// // background: linear-gradient(to bottom right, red, yellow);

container.addEventListener('mouseover',()=>{
    container.style.background = `linear-gradient(to bottom right, ${getRandomColor()}, ${getRandomColor()})`;
});

nav.addEventListener('click', (e)=>{
    e.target.style.color = (e.target.style.color === 'black') ? 'white' : 'black';
});

nav.addEventListener('mouseover', (e) => {
    e.target.style.color = (e.target.style.color === 'black') ? 'white' : 'black';
});

ctaBtn.addEventListener('dblclick', (e)=>{
    e.preventDefault();
    let h1Text = ctaH1.innerHTML;
    ctaH1.innerHTML = removeVowels(h1Text);
});

midImg.addEventListener('wheel', (e) => {
    TweenMax.to(".container", 3, {
        rotation: e.clientX,
        scale: 0.5
    });
    if (isNuBtn === false) {
        createNuBtn();
        isNuBtn = true;
         TweenMax.to(".nuBtn", 3, {
             rotation: -e.clientX,
             scale: 1
         });
    } else {
        return;
    }
});

nuBtn.addEventListener('click',(e)=>{
    // nuBtn.style.display = "none";
     TweenMax.to(".nuBtn", 2, {
         scale: 50.0
     });
    window.setTimeout(()=>{

        window.location.reload(true);
    }, 2000);
       TweenMax.to(".container", 2, {
           rotation: e.clientY * 3.14,
           scale: 0.0
       });
})

ctaImg.addEventListener('mouseenter', (e)=>{
    TweenMax.to("#cta-img", 1, {
        scale: 0.7
    });
});
ctaImg.addEventListener('mouseleave', (e) => {
    TweenMax.to("#cta-img", 1, {
        scale: 1.0
    });
});

document.addEventListener('drag',(e)=>{
    // console.log(e.target);
});

document.addEventListener('dragover', (e)=>{
    e.preventDefault();
    // if(e.target.className == "dropzone") {
    //     // console.log(e);
    //     e.target.style.backgroundColor = "black";
    // }
});
document.addEventListener('drop',(e)=>{
    console.log(e);
    e.target.style.backgroundColor = "black";
});


