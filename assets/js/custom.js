document.addEventListener('DOMContentLoaded', function() {
    const PictureSwiper = new Swiper('.picture__swipper', {
        slidesPerView: 4, 
        spaceBetween: 13, 
        loop: true, 
        navigation: {
            nextEl: '.picture__btn-next',
            prevEl: '.picture__btn-prev',
        },

        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        breakpoints: {
            0: {
                slidesPerView: 1.3,
                spaceBetween: 10
            },
            480: {
                slidesPerView: 1.5,
                spaceBetween: 15
            },
            640: {
                slidesPerView: 2.2,
                spaceBetween: 20
            },
            960: {
                slidesPerView: 3.3,
                spaceBetween: 20
            }
        }
    });

    const team__swiper = new Swiper('.team__swiper', {
        slidesPerView:3.6,
        spaceBetween: 13,
        loop: true,
        navigation:{
            nextEl: '.team__btn-next',
            prevEl: '.team__btn-prev'
        },

        breakpoints:{
            0:{
                slidesPerView:1,
                spaceBetween: 13,
            },

            480:{
                slidesPerView:2,
                spaceBetween: 13,
            },

            640:{
                slidesPerView:3,
                spaceBetween: 13,
            },

            960:{
                slidesPerView:3.6,
                spaceBetween: 13,
            }
        }
    })

    const ProjectsSwiper = new Swiper('.projects__swiper', {
        slidesPerView: 2, 
        spaceBetween: 13, 
        loop: true, 
        navigation: {
            nextEl: '.projects__btn-next',
            prevEl: '.projects__btn-prev',
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
                navigation: {
                    nextEl: '.projects__btn-next-mob',
                    prevEl: '.projects__btn-prev-mob',
                }
            },


            959: {
                slidesPerView: 1,
                spaceBetween: 20
            },

            961:{
                slidesPerView: 2,
                spaceBetween: 13,
            }
        }

        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        // breakpoints: {
        //     320: {
        //         slidesPerView: 1,
        //         spaceBetween: 10
        //     },
        //     480: {
        //         slidesPerView: 2,
        //         spaceBetween: 15
        //     },
        //     768: {
        //         slidesPerView: 3,
        //         spaceBetween: 20
        //     },
        //     1024: {
        //         slidesPerView: 4,
        //         spaceBetween: 20
        //     }
        // }
    });
    const buttons = document.querySelectorAll('.method__card .btn');
    let currentlyActiveCard = null;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.method__card');
            
            if (card === currentlyActiveCard) {
                card.classList.remove('active');
                currentlyActiveCard = null;
                return;
            }
            
            if (currentlyActiveCard) {
                currentlyActiveCard.classList.remove('active');
            }
            
            card.classList.add('active');
            currentlyActiveCard = card;
        });
    });
});