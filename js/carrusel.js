const swiper= new Swiper('.swiper', {
    slidesPerView: "auto",
    loop: true,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
    navigation: {
    nextEl: '.slider--next',
    prevEl: '.slider--prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },


})  