// چک می‌کنیم المنت وجود داره یا نه
const cardSwiperEl = document.querySelector(".card-content");

if (cardSwiperEl) {
  new Swiper(".card-content", {
    loop: true,
    spaceBetween: 32,
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
      576: { slidesPerView: 3 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
      1400: { slidesPerView: 4 }
    },
  });
} else {
  console.warn('Swiper: ".card-content" not found, slider init skipped.');
}