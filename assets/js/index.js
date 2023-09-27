let header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("alterHeader", window.scrollY > 0);

});

// Carroussel

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
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
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

//   GO ANDE BACK ANIMATION

// $(".swiper-slide").mouseenter(function(){
//     $(".swiper-slide div").addClass("go"); 
// });

// $(".swiper-slide").mouseout(function(){
//     $(".swiper-slide div").toggleclass("go");
// });

