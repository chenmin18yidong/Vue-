$(function(){
$(".hamburger").click(function(){
    $(".body_bg_ceng").toggle();
    $(this).toggleClass("active");
    $(".top_title").toggle();
    $(".top_title").addClass("wow Bouncing Entrances bounceInDown animated")
 })
 $(".body_bg_ceng").click(function(){
     $(this).toggle();
     $(".top_title").toggle(); 
     $(".hamburger").removeClass("active");
 })
 $(window).resize(function(){
        //判断屏幕宽带
        if($(window).width()>768){
        $(".top_title").show(); 
        $(".body_bg_ceng").hide();
        $(".hamburger").removeClass("active");
        }
       if($(window).width()<769){
        $(".top_title").hide(); 
        }
    if ($(window).width()<769 || $(".top_title").is(":visible")){
        $(".body_bg_ceng").hide();
        $(".hamburger").removeClass("active");
    } 
    });
  //绑定滚动条事件 
$(window).bind( "scroll" , function () { 
    var  sTop = $(window).scrollTop(); 
    var  sTop = parseInt(sTop); 
    if  (sTop >= 1) { 
       $(".top").css({
           "background":"#fff",
           "position":"fixed",
            "height":"70px",
           "border-bottom":"1px solid #e0eff3"
       })
    } 
    else  { 
        $(".top").css("background","none")
        $(".top").css("position","static")
    }  
    if($(window).width() < 376){
        $(".top").css({
              "height":"44px",
        }),1
    }
}); 
 var wow = new WOW({
         boxClass: 'wow',
         animateClass: 'animated',
         offset: 0,
         mobile: false,
         live: true
     });
     wow.init();})