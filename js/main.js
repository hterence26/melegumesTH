const log = console.log;
const tab = console.table;

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

 ///// Envoi du formulaire contact via le service "emailjs"
var myform = $("form#contactForm");
tab(myform);

myform.submit(function(event){
	event.preventDefault();

  /*Change to your service ID, or keep using the default service*/
  var service_id = "default_service";
  var template_id = "template_jCuW7QDh";

  myform.find("button").text("Envoi en cours...");
  emailjs.sendForm(service_id,template_id,myform[0])
  	.then(function(){ 
    	alert("Votre message a bien été envoyé");
       myform.find("button").text("Envoyer");
       

    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Envoyer");
    });
  return false;
});