const buttons = document.querySelectorAll('.projects-filter button');
const images = document.querySelectorAll('ul li.projects-container');

function toggleActiveClass(active) {
    buttons.forEach(item => {
        item.classList.remove('btn-active');
    })
    active.classList.add('btn-active');
}

function toggleImages(dataClass) {
    if (dataClass === 'all') {
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = 'block';
        }
    } else {
        for (let i = 0; i < images.length; i++)
            images[i].dataset.class === dataClass ? images[i].style.display = 'block' : images[i].style.display = 'none';
    }
}

for (let i = 0; i < buttons.length; i++) {
    console.log(buttons[i]);
    buttons[i].addEventListener('click', function () {
        toggleActiveClass(buttons[i]);
        toggleImages(buttons[i].dataset.class);
    });
}