
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.mySwiper', {
      
      loop: true, 
      navigation: {
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev', 
      },
      pagination: {
        el: '.swiper-pagination', 
        clickable: true, 
      },
      autoplay: {
        delay: 3000, 
        disableOnInteraction: false,
      },
      slidesPerView: 1, 
      spaceBetween: 10, 
    });
  
    console.log('Swiper initialized!');
  });
  