const slider = document.querySelector('.slider-row');
const slides = document.querySelectorAll('.slider-item');
const prev = document.querySelector('.slider-button-prev');
const next = document.querySelector('.slider-button-next');


next.addEventListener('click', () => {
    slides.forEach(slide => {
        slide.setAttribute('style', 'transform: translate3d(-984px, 0, 0)')
    })
})

prev.addEventListener('click', () => {
    slides.forEach(slide => {
        slide.setAttribute('style', 'transform: translate3d(984px, 0, 0)')
    })
})
