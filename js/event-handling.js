console.log("events",navItem);

// const container = document.querySelector('.container');

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

// // background: linear-gradient(to bottom right, red, yellow);

container.addEventListener('mouseover',()=>{
    container.style.background = `linear-gradient(to bottom right, ${getRandomColor()}, ${getRandomColor()})`;
});

nav.addEventListener('click', (e)=>{
    console.log(event.target);
    e.target.style.color = (e.target.style.color === 'black') ? 'white' : 'black';
});

ctaBtn.addEventListener('dblclick', (e)=>{
    e.preventDefault();
    let h1Text = ctaH1.innerHTML;
    console.log(typeof h1Text);
    
    ctaH1.innerHTML = removeVowels(h1Text);
});

