const formWrapper = document.querySelector('.subscribe-wrapper');
const btn = document.querySelector('.button-subscribe');
const template = 
`<h2 class="main-title">
    Узнайте о запуске сервиса первым
</h2>
<div class="subscribe-ok">
    <img src="./images/ok.svg" alt="вы подписаны">
    <p>
        Спасибо! Мы будем держать вас в курсе обновлений
    </p>
</div>
`

const subscribeForm = document.querySelector('form');



function isFormValid(form) {
    const inputs = [form.querySelector('input')];
    let valid = true;
    inputs.forEach((input) => {
        if (input.type !== 'submit' && input.type !== 'button') {
            if (!input.checkValidity()) {
                valid = false;
            }
        }
    });
    return valid
}

btn.addEventListener('click', (e) => {
    e.preventDefault();

    if ( isFormValid(subscribeForm) ) {
        formWrapper.textContent = '';
        formWrapper.insertAdjacentHTML('beforeend', template);
    }
})
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

