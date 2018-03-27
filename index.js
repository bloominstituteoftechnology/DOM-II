        var blocks = document.querySelector('.blocks');

        let count = -1;

        var rocket = (event) => {
           event.target.style.order = count;
           count--;
        }
        
        var right = (event) => {
            event.target.style = 'transition: margin-left, 2s; margin-left: 100px';
        }

        var left = (event) => {
            event.target.style.marginLeft = '10px';
        }

        blocks.addEventListener('click', rocket);

        blocks.addEventListener('mousedown', right);
        blocks.addEventListener('mouseup', left);
