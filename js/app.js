var list = document.querySelector('ul');
    list.addEventListener('click', function(f) {
        if (f.target.tagName === 'LI') {
            f.target.classList.toggle('checked');
        }
    }, false);