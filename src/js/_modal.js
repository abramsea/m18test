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