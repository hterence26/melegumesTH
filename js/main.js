$(document).ready(function(){

    $(window).scroll(function(){
        var scrollPosition = $(window).scrollTop();
      if(scrollPosition > 50){
            $("svg").addClass("menuSmall");
            $("nav").addClass("menuSmall");
            $("header > div").addClass("menuHeight");
            $("nav>ul>li>ul").addClass("sousnavHeight");
      } else{
            $("svg").removeClass("menuSmall");
            $("nav").removeClass("menuSmall");
            $("header > div").removeClass("menuHeight");
            $("nav>ul>li>ul").removeClass("sousnavHeight");
      }
    });

    $("#toggleButton").click(function(){
        //$("nav").find("ul").slideToggle();
        if ($('#menuNav').hasClass('is-opened')) {
            $('#menuNav').removeClass('is-opened');
            $('#toggleButton').html('<i class="fas fa-bars"></i>')
        } else {
            $('#menuNav').addClass('is-opened');
            $('#toggleButton').html('<i class="fas fa-times"></i>')
        }
    });
 
    $(".sousnav").click(function(){
        $('#menuNav').removeClass('is-opened');
        $('#toggleButton').html('<i class="fas fa-bars"></i>')
    });


    $(".sousnav a").click(function(e){
            e.preventDefault();
            let id=$(this).attr("href");
            $("html,body").animate(
                {scrollTop:$(id).offset().top-210},1000
            );
            $(".sousnav li a").removeClass("ssnav-active");
            $("#blockceuillette").addClass("ssnav-active");
    });
 });
