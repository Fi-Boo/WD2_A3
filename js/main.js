
document.addEventListener("DOMContentLoaded", () => {

    alterTabsDirection(window.innerWidth);

    let navBackground = document.querySelector("#header-background");
    const upDownArrow = document.querySelector('.updown-wrapper');
    const upDownAnchor = document.querySelector('.updown-wrapper a');
    const arrowIcon = upDownArrow.querySelector('a i');

    window.addEventListener('scroll', () => {

        if (window.scrollY > 0) {
            navBackground.style.top = 'calc(var(--header-height) * -1)';
            upDownAnchor.setAttribute('href', "#section-home");
            arrowIcon.style.transform = 'rotate(180deg)';
        }
        else {
            navBackground.style.top = '-4px';
            upDownArrow.querySelector('a').setAttribute('href', '#section-application');
            arrowIcon.style.transform = 'rotate(0deg)';
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

    alterTabsDirection(window.innerWidth);

});



window.addEventListener("resize", () => {

    alterTabsDirection(window.innerWidth);
})


function alterTabsDirection(width) {

    let tutorialTabGroup = document.querySelector('sl-tab-group');

    if (width< 400) {
        tutorialTabGroup.setAttribute('placement','start');
    } else {
        tutorialTabGroup.setAttribute('placement','top');
    }
}


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
        delay: 5000,
    },
});


const dialogSubscribe = document.querySelector('.dialog-subscribe');
const dialogConfirm = document.querySelector('.dialog-added');
const subscribeButton = dialogSubscribe.querySelector('form button');

subscribeButton.addEventListener('click', () => {
    dialogSubscribe.hide();
    dialogConfirm.show();

});

const upDownArrow = document.querySelector('.updown-wrapper');

upDownArrow.addEventListener