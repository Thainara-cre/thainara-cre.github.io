//Navigation  bar effects on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

//Services section - Modal
const serviceModals = document.querySelectorAll('.service-modal');
const learnMoreBtn = document.querySelectorAll('.learn-more-btn');
const ModalCloseBtn = document.querySelectorAll('.modal-close-btn');

var modal = function(modalClick) {
    serviceModals[modalClick].classList.add('active');
}

learnMoreBtn.forEach((learnMoreBtn, i) => {
    learnMoreBtn.addEventListener('click', () => {
        modal(i)
    });
});

ModalCloseBtn.forEach((ModalCloseBtn) => {
    ModalCloseBtn.addEventListener('click', () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove('active')
        });
    });
});
//Portfolio section - Modal

//Our clients section - Modal

//Website dark/light theme

//Scroll to top button

//Navigation menu items active on page scroll

//Responsive Navigation Menu toggle

//Scroll reveal animations
//Commen reveal options to create reveal animations

//Target elements, and specify options to create reveal animations