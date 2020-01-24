let images = document.querySelectorAll('.slides img');
let current = 0;

function slider() {
    console.log(current);
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('opacity0');
    }
    images[current].classList.remove('opacity0');
}

slider();

function slideToLeft() {

    if (current === images.length - 1) {
        current = 0;
    } else {
        current++;
    }

    slider();
}

function slideToRight() {

    if (current === 0) {
        current = images.length - 1;
    } else {
        current--;
    }

    slider();
}
