const slider = document.querySelector( '.slider-row' );
const slides = document.querySelectorAll( '.slider-item' );
const prev = document.querySelector( '.slider-button-prev' );
const next = document.querySelector( '.slider-button-next' );

let state = 0;
let step = slides[0].clientWidth;

next.addEventListener( 'click', () => {
    slides.forEach( slide => {
        slide.setAttribute( 'style', `transform: translate3d(${ state - step }px, 0, 0)` );
    })
    state = state - step;
    
    if ( state < 0 ) {
        next.setAttribute( 'disabled', '' );
        prev.removeAttribute( 'disabled', '' );
    }
})


prev.addEventListener( 'click', () => {
    slides.forEach( slide => {
        slide.setAttribute( 'style', `transform: translate3d(${ state + step }px, 0, 0)` );
    })
    state += step;
    
    if ( state > 0 ) {
        prev.setAttribute( 'disabled', '' );
        next.removeAttribute( 'disabled', '' );
    }
})
