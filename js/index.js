// Your code goes here
const navMouse = document.querySelectorAll('a');
navMouse[0].addEventListener('mouseover', function(e){
    e.target.style.color = 'gold';
    setTimeout(function(){
        e.target.style.color = '';
    }, 500);
});
navMouse[1].addEventListener('mouseover', function(e){
    e.target.style.color = 'blue';
    setTimeout(function(){
        e.target.style.color = '';
    }, 500);
});

const extraContent = {
    'class-destination': {
        'sun-fun-p': 'Conscendissesque laetae, celeraveramque consederint, sinitque, loceque, veniatisque ad ductorque, ob et memoraveratque. Transerisque circumdaresque odereque intererimus aut confertque cum auspiciisque meditetur teneanturque, vitabis. Uiolata pomaque, scandemus important, aut cessissemusque, cumaeam ab abdiditisque designatusque. Uertet frequentemusque, triplicemque, consternitis, intendissem. Renuntiatis ab recedes cum responderemusque cum et aut aut perpetratisque quiatisque bona erroque. Uiduam clam e cum pudorem, temperataque tenuique, entellusque, et e maiorisque oraveram, ambireque. Relictarumque senatores convolsaeque, et eicatque exquiroque rependamque diremisset appellavissent e desperabis, confirmabitisque, uindicabantque boiae, ex in e uires, ardentibus repetentis, in deducturaque rogaret animus exsultat, vaporque iouisque et et subigerimque in ob declarent, aut e fundarentur.',
        'mountain-ex-p': 'Conscendissesque laetae, celeraveramque consederint, sinitque, loceque, veniatisque ad ductorque, ob et memoraveratque. Transerisque circumdaresque odereque intererimus aut confertque cum auspiciisque meditetur teneanturque, vitabis. Uiolata pomaque, scandemus important, aut cessissemusque, cumaeam ab abdiditisque designatusque. Uertet frequentemusque, triplicemque, consternitis, intendissem. Renuntiatis ab recedes cum responderemusque cum et aut aut perpetratisque quiatisque bona erroque. Uiduam clam e cum pudorem, temperataque tenuique, entellusque, et e maiorisque oraveram, ambireque. Relictarumque senatores convolsaeque, et eicatque exquiroque rependamque diremisset appellavissent e desperabis, confirmabitisque, uindicabantque boiae, ex in e uires, ardentibus repetentis, in deducturaque rogaret animus exsultat, vaporque iouisque et et subigerimque in ob declarent, aut e fundarentur.',
        'island-get-p': 'Conscendissesque laetae, celeraveramque consederint, sinitque, loceque, veniatisque ad ductorque, ob et memoraveratque. Transerisque circumdaresque odereque intererimus aut confertque cum auspiciisque meditetur teneanturque, vitabis. Uiolata pomaque, scandemus important, aut cessissemusque, cumaeam ab abdiditisque designatusque. Uertet frequentemusque, triplicemque, consternitis, intendissem. Renuntiatis ab recedes cum responderemusque cum et aut aut perpetratisque quiatisque bona erroque. Uiduam clam e cum pudorem, temperataque tenuique, entellusque, et e maiorisque oraveram, ambireque. Relictarumque senatores convolsaeque, et eicatque exquiroque rependamque diremisset appellavissent e desperabis, confirmabitisque, uindicabantque boiae, ex in e uires, ardentibus repetentis, in deducturaque rogaret animus exsultat, vaporque iouisque et et subigerimque in ob declarent, aut e fundarentur.'
    }
}

const divMove = document.querySelector('.content-destination');
divMove.addEventListener('scroll', function(e){

})

const imgGone = document.querySelector('.welcome');
console.log(imgGone);


navMouse[0].addEventListener('click', function(e){
    imgGone.classList.toggle('display-none');
});

// navMouse[3].addEventListener('dblclick', function(e){
//     imgGone.classList.toggle('destination');
// });