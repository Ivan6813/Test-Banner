const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    spaceBetween: 5,
    centeredSlides: true,
    slidesPerView: 1.1,
    speed: 500,
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: true
    },
    breakpoints: {
        320: {
            slidesPerView: 1.15,
        },
        350: {
            slidesPerView: 1.1,
        },
        480: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        }
    }
  });