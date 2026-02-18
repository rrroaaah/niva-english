// چک می‌کنیم المنت وجود داره یا نه
const storySwiperEl = document.querySelector(".story-container");

if (storySwiperEl) {
  new Swiper(".story-container", {
    loop: true,
    spaceBetween: 0,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      1: { slidesPerView: 6 },
      576: { slidesPerView: 8 },
      768: { slidesPerView: 9 },
      992: { slidesPerView: 11 }, 
      1200: { slidesPerView: 13 },
      1400: { slidesPerView: 13 }
    },
  });
} else {
  console.warn('Swiper: ".story-container" not found, slider init skipped.');
}