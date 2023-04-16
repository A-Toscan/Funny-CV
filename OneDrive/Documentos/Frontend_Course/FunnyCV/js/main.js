
$(window).scroll(function(){
var wScroll = $(this).scrollTop();		
$(".parallax").css("top", -(wScroll * 0.7)+ "px");
 });	


 $(document).scroll(function(){

    // linea seccion Work

    if($(document).scrollTop()>$(".work").offset().top-200){
        $(".linea").animate({height: "680px"},1000);
    }	

    // efectos seccion Skills

    if($(document).scrollTop()>$(".skills").offset().top-200){
        $("#frontend").animate({width: "80%"},1000);
    }

    if($(document).scrollTop()>100){
        $(".fa-arrow-up").fadeIn();
        }else {$(".fa-arrow-up").fadeOut();
    }

    if($(document).scrollTop()>$(".skills").offset().top-200){
        $("#wordpress").animate({width: "75%"},1000);
    }

    if($(document).scrollTop()>$(".skills").offset().top-200){
        $("#intdesign").animate({width: "80%"},1000);
    }

    if($(document).scrollTop()>$(".skills").offset().top-200){
        $("#designthink").animate({width: "78%"},1000);
    }

    if($(document).scrollTop()>$(".skills").offset().top-200){
        $("#userresearch").animate({width: "76%"},1000);
    }

    if($(document).scrollTop()>$(".skills").offset().top-200){
        $("#proto").animate({width: "75%"},1000);
    }

    if($(document).scrollTop()>$(".skills").offset().top-200){
        $("#codes").animate({width: "80%"},1000);
    }

    if($(document).scrollTop()>$(".skills").offset().top-200){
        $("#sketch").animate({width: "80%"},1000);
    }

    if($(document).scrollTop()>$(".skills").offset().top-200){
        $("#adobe").animate({width: "78%"},1000);
    }

    if($(document).scrollTop()>$(".skills").offset().top-200){
        $("#flinto").animate({width: "73%"},1000);
    }

    if($(document).scrollTop()>$(".skills").offset().top-200){
        $("#invision").animate({width: "70%"},1000);
    }

    if($(document).scrollTop()>$(".skills").offset().top-200){
        $("#ita").animate({width: "80%"},1000);
    }

    if($(document).scrollTop()>$(".skills").offset().top-200){
        $("#en").animate({width: "75%"},1000);
    }

    if($(document).scrollTop()>$(".skills").offset().top-200){
        $("#spa").animate({width: "75%"},1000);
    }

    if($(document).scrollTop()>$(".skills").offset().top-200){
        $("#cat").animate({width: "60%"},1000);
    }
});
$(".fa-arrow-up").click(function(){
    $("html").animate({
        scrollTop: 0
    },1000);
});
$(".skills").scroll(function(){
    $("#frontend").animate({width: "280px"},1000);
});
         




