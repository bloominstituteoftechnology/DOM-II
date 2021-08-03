// Your code goes here
const docTitle = document.querySelector('.logo-heading');

docTitle.addEventListener('mouseover', () => {
    docTitle.style.color = '#fec5bb';
});

docTitle.addEventListener('mouseout', () => {
    docTitle.style.color = 'black';
});


const html = document.querySelector('html');
const topPage = document.querySelector('header')
const links = document.querySelectorAll('a')
const escKey = ((event) => {
    if (event.key === 'Escape') {
        if (html.style.background !== 'black') {
            html.style.background = 'black';
            html.style.color = 'white';
            topPage.style.background = 'black';
            topPage.style.color = 'white';
            links.forEach((item) => item.style.color = 'white');
            docTitle.style.color = 'white';
            docTitle.addEventListener('mouseout', () => {
                docTitle.style.color = 'white';
            });
        } else {
            html.style.background = 'white';
            html.style.color = 'black';
            topPage.style.background = 'white';
            topPage.style.color = 'black';
            links.forEach((item) => item.style.color = 'black');
            docTitle.style.color = 'black';
            docTitle.addEventListener('mouseout', () => {
                docTitle.style.color = 'black';
            });
        }
       
    }
});

document.addEventListener('keydown', escKey);


const imgBorder = document.querySelectorAll('.img-content');

imgBorder.forEach((item) => {
    item.addEventListener('mouseover', function() {
        item.style.border = 'dashed 3px silver';
    })

    item.addEventListener('mouseout', function() {
        item.style.border = 'none';
    });
});

const btn = document.querySelectorAll('.btn');

btn.forEach((item) => {
    item.addEventListener('click', () => {
        item.style.background = '#8ecae6';    
    });
});

const h4 = document.querySelectorAll('h4');


window.addEventListener('load', () => {
    h4.forEach((item) => {
        item.style.color = 'grey';
        item.style.fontWeight = '900'
    })
  });


/*six*/
const pageResolution = () => {
    alert(innerWidth);
};
document.addEventListener('resize', pageResolution);

/*seven*/
const paragraph = document.querySelectorAll('p');

const textChange = () => {
    paragraph.forEach((item) => {
        item.style.fontWeight = '800';
    })
}

document.addEventListener('dblclick', textChange);

/*eight*/


const idvLinks = document.querySelector('a')
console.log(idvLinks);
// links.addEventListener('mouseenter', (event) => {
//     event.target.style.color = 'gold';
// });
