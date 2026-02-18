// چک می‌کنیم المنت وجود داره یا نه
const offerSwiperEl = document.querySelector(".offer-card-content");

if (offerSwiperEl) {
  new Swiper(".offer-card-content", {
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
  console.warn('Swiper: ".offer-card-content" not found, slider init skipped.');
}