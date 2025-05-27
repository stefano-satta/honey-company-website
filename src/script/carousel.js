import Glide from '@glidejs/glide'

const glide  = new Glide(".glide", {
    type: "carousel",
    focusAt: 0,
    perView: 3,
    startAt: 0,
    dragThreshold: true,
    perTouch: true,
    gap: 32,
    breakpoints: {
        576: {
            perView: 1
        },
        768: {
            perView: 2
        }
    }
}).mount();