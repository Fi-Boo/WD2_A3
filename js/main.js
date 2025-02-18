// this logic is for the nav bar. 
// It allows the navbars background to slide offscreen when the user scrolls down. This presents more visual space. 
// I was having issues with it and a post suggested ensuring that all DOM content was loaded before running the logic.
document.addEventListener("DOMContentLoaded", () => {

    AOS.init();

    setAOSoffset(80);

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

    // I had to add this mouseover/mouseout logic as CSS :hover wasn't working due to the above code.

    let header = document.querySelector("header");

    header.addEventListener("mouseover", () => {
        navBackground.style.top = '-4px';
    });

    header.addEventListener("mouseout", () => {
        if (window.scrollY > 0) {
            navBackground.style.top = 'calc(var(--header-height) * -1)';
        }  
    });

});


// event listener that runs whenever a screen resize happens. It calls the function that changes the tab panel layout
window.addEventListener("resize", () => {

    alterTabsDirection(window.innerWidth);
    setAOSoffset(80);
});

function setAOSoffset(percent) {
    let offset = document.documentElement.clientHeight * percent/-100;
    let offsetElements = document.querySelectorAll('.AOS-offset-required');

    offsetElements.forEach(element => {
        element.setAttribute('data-aos-offset',`${offset}`);
    });
}
// function that changes the tab placement for the tutorial tab panels based on screen width.
function alterTabsDirection(width) {

    let tutorialTabGroup = document.querySelector('sl-tab-group');

    if (width< 400) {
        tutorialTabGroup.setAttribute('placement','start');
    } else {
        tutorialTabGroup.setAttribute('placement','top');
    }
}

//swiper required logic.
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


// dialog required logic. this forces the popup at the start and allows the user to close it by either clicking on the background or the X
const dialogSubscribe = document.querySelector('.dialog-subscribe');
const dialogConfirm = document.querySelector('.dialog-added');
const subscribeButton = dialogSubscribe.querySelector('form button');

subscribeButton.addEventListener('click', () => {
    dialogSubscribe.hide();
    dialogConfirm.show();

});
