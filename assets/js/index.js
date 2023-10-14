

// SCROLL HEADER
let header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("alterHeader", window.scrollY > 0);
});


// CLICK MENU RESPONSIVO
$(".openMenu").click(function(){  
  $("header ul").toggleClass("display"); 
})

// BUTTON PRODUCTS
$(document).ready(function () {
  $(".sale").hide();
  $(".aboutMore").click(function () {
      $(".sale").hide();
      $(this).closest(".products").find(".sale").show();
  });
});

$(".more").click(function(){
  $(".sale").css("display","none");
})

// ACCORDION

$( function() {
  $( "#accordion" ).accordion({
    collapsible: true,
    active: false
  });
  
} );
