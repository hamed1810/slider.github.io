const slides = document.querySelectorAll('.item');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const total = slides.length;
let index = 0;
let dur = 4000;
console.log(slides);
prev.onclick = function () {
    slide('prev');
}
next.onclick = function () {
    slide('next');
}
function slide(direction) {
    progress();
    if (direction == 'next') {
        if (index == total - 1) {
            index = 0;
        }
        else {
            index++;
        }
    }
    if (direction == 'prev') {
        if (index == 0) {
            index = total - 1;
        }
        else {
            index--;
        }
    }

    for (let i = 0; i < total; i++) {
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
    clearInterval(timer);
    timer = setInterval(autoSlider, 4000);
}

function progress() {
    document.querySelector('.progress').innerHTML = '';
    const div = document.createElement('div');
    div.style.width = '0px';
    div.style.height = '5px';
    div.style.position = 'absolute';
    div.style.top = '0';
    div.style.left = '0';
    div.style.backgroundColor = '#c00';
    div.style.animation = 'progress ' + dur / 1000 + 's linear';
    document.querySelector('.progress').appendChild(div);
}
progress();
let timer = setInterval(autoSlider, 4000)
function autoSlider() {
    slide('next');
}