$(document).ready(function() {
    $('.testi_carousel').owlCarousel({
        autoplay: false,
        loop: false,
        rewind: true,
        margin: 28,
        dots: true,
        nav: true,
        navText: ['<img src="assets/icons/arrow-left.svg" alt="arrow-left">', '<img src="assets/icons/arrow-right.svg" alt="arrow-left">'],
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })
})