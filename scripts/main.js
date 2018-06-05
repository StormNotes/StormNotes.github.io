$(document).ready(function()  {

  var $header = $('header');
  var $sticky = $header .before ($header.clone () .addClass("sticky"));


    $(window).on("scroll", function(){
    var scrollFromTop = $(window).scrollTop();
    $("body").toggleClass("scroll", (scrollFromTop >627 ));
  });


//Scrolling
$('.menu li a[href^="#"]').on('click',function(e){

    e.preventDefault();

    var target = $(this.hash);

    if (target.length){
        $('html,body') .stop().animate({
          scrollTop: target.offset().top -0


        }, 0900);

    }

});

          //masonry
          $('.grid').masonry({

            itemSelector: '.grid-item',
            columnWidth:120,
            fitWidth: true

          })




});
