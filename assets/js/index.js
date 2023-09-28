let header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("alterHeader", window.scrollY > 0);

});

// Carroussel

 var swiper = new Swiper(".mySwiper", {
   
     slidesPerView: 1,
     spaceBetween: 10,
     loop: true,
     autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      
      
    },
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
       
     },
     breakpoints: {
       640: {
         slidesPerView: 2,
         spaceBetween: 20,
       },
       768: {
         slidesPerView: 2,
         spaceBetween: 40,
       },
       1024: {
         slidesPerView: 3,
         spaceBetween: 50,
       },
     },
   });


  var swiper = new Swiper(".my", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "1.5",
    loop: true,
   
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });