document.getElementById('left').onclick = sliderLeft;
let left = 0;

function sliderLeft() {

    let slidesLeft = document.getElementById('slides');
    // left = left - 238;
    // if (left < -714) {
    //     left = 0;
    // }
    if (left === -714) {
        left = 0;
    } else {
        left -= 238;
    }
    slidesLeft.style.left = left + 'px';
}

document.getElementById('right').onclick = sliderRight;
let right = 0;

function sliderRight() {

    let sliderRight = document.getElementById('slides');

    if (right === 0) {
        right = -714;
    } else {
        right += 238;
    }

    sliderRight.style.left = right + 'px';
}
