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
const PortfolioModals = document.querySelectorAll('.portfolio-model');
const imgCards = document.querySelectorAll('.img-card');
const portifolioCloseBtns = document.querySelectorAll('.portifolio-close-btn');

var portfolioModal = function(modalClick) {
    PortfolioModals[modalClick].classList.add('active');
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener('click', () => {
        portfolioModal(i)
    });
});

portifolioCloseBtns.forEach((portifolioCloseBtn) => {
    portifolioCloseBtn.addEventListener('click', () => {
        PortfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove('active')
        });
    });
});

//Our clients section - Modal

//Website dark/light theme

//Scroll to top button

//Navigation menu items active on page scroll

//Responsive Navigation Menu toggle

//Scroll reveal animations
//Commen reveal options to create reveal animations

//Target elements, and specify options to create reveal animations

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });