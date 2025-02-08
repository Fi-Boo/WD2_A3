

document.addEventListener("DOMContentLoaded", function() {

    let navBackground = document.querySelector("#header-background");

    window.addEventListener('scroll', () => {

        if (window.scrollY > 0) {
            navBackground.style.top = 'calc(var(--header-height) * -1)';
        }
        else {
            navBackground.style.top = '-4px';
        }
    });

    let header = document.querySelector("header");

    header.addEventListener("mouseover", () => {
        navBackground.style.top = '-4px';
    })

    header.addEventListener("mouseout", () => {
        if (window.scrollY > 0) {
            navBackground.style.top = 'calc(var(--header-height) * -1)';
        }  
    })
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '',
    },

    autoplay: {
        delay: 7000,
    },
});