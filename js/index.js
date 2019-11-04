// Your code goes here
// title img
const intro = document.querySelector('.intro');
// 1 enlarges
intro.addEventListener('drag', () => {
    intro.style.transform = "scale(2)";
})
// 2 scales back
intro.addEventListener('reset', () => {
    intro.style.transform = "scale(1)";
})

// lets go img!
const imgContent = document.querySelectorAll('.img-content');
// enlarge img 3
imgContent.forEach(icontent => {
    icontent.addEventListener('mouseenter', () => {
    icontent.style.transform = "scale(1.2)";
    icontent.style.transition = 'all 0.3s';
}); 
// return img to normal size 4
    icontent.addEventListener('mouseleave', () => {
    icontent.style.transform = "scale(1)";
    icontent.style.transform = "all 0.3s";
});
});


// lets go text!
const changeImgFluid = document.querySelectorAll('.text-content');
// rotate text 5
changeImgFluid.forEach(change => {
    change.addEventListener('mouseover', () => {
        change.style.transform = "rotate(180deg)";
        
    });
    // rotate text back 6
    change.addEventListener('mouseout', () => {
        change.style.transform = "rotate(360deg)";
    });
});
// adventure awaits
const advAwaits = document.querySelectorAll(".text-content")
// change text color 7
advAwaits.forEach(awaits => {
    awaits.addEventListener('dblclick', () => {
        awaits.style.color = 'navy';
    });
});

// destination
const destination = document.querySelectorAll('.content-destination');
// alert message 8 
destination.forEach(des => {
    des.addEventListener('contextmenu', () => {
        alert("you've selected text!");
    });
});

// button paragraphs

const conPick = document.querySelectorAll('.content-pick');
// change font-family
conPick.forEach(conP => {
    conP.addEventListener('wheel', () => {
        conP.style.fontFamily = "'Times New Roman', Roman, sans-serif" 
    });
    // change font-family back
    conP.addEventListener('click', () => {
        conP.style.fontFamily = "'Roboto', sans-serif";
    })
});
// signup buttons

const buttons = document.querySelectorAll('.btn');

// change background color 9
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.style.backgroundColor = "grey";
        btn.style.color = "pink";
    });
});




