let header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("alterHeader", window.scrollY > 0);

});

// CLICK MENU RESPONSIVO
$(".openMenu").click(function(){  
  $("header ul").toggleClass("display"); 

})
// Carroussel

  var swiper = new Swiper(".my", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 100,
    slidesPerView: "1",
    loop: true,
    // autoplay: {
    //        delay: 5000,
    //         disableOnInteraction: false,  
    //      },
   
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
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });