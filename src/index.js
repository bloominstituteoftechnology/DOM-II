import './less/index.less'

// load
window.onload = () => {
    const heading = document.querySelector('h1')
    heading.textContent = 'Hi User, Welcome to the Fun Bus Site!'

    // copy
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
            .then(text => {
                heading.textContent += text
            })
    })

    // click
    document.body.addEventListener('click', evt => {
        evt.target.classList.toggle('mirror')
    })

    // dbl click

    document.body.addEventListener('dblclick', evt => {
        evt.target.outerHTML = ''
    })

    // keydown
    window.addEventListener('keydown', evt => {
        if (evt.key == 7) {
            document.body.innerHTML = '<h1>Lucky Number 7!</h1>'
        }
    })

    // mouse move
    document.body.addEventListener('mousemove', evt => {
        const { clientX, clientY } = evt
        console.log(`mouse is at ${clientX}, ${clientY}`)
    })

    // mouse enter & mouse leave
    const destinations = document.querySelectorAll('.destination')
    for (let destination of destinations) {
        destination.addEventListener('mouseenter', () => {
            destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', () => {
            destination.style.fontWeight = 'initial'
        })
    }

    // wheel

    document.body.addEventListener('wheel', zoom);
    function zoom(event) {
        event.preventDefault();

    if (event.deltaY < 0) {
        scale *= event.deltaY * -2;
    }
    else {
        scale /= event.deltaY * 2;
    }

    scale = Math.min(Math.max(.125, scale), 4);

    el.style.transform = `scale(${scale})`;
    }

    let scale = 1;
    const el = document.querySelector('div');
    document.onwheel = zoom;

    // keyup
    const log = document.getElementById('#content-section')
    document.addEventListener('keyup', logKey);

    function logKey(evt) {
        log.textContent += `${evt.code}`;
    }
}

