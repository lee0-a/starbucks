$(document).ready(function(){
    let myWindow = $(window).width();


//Bean
let controller = $.superscrollorama({
    triggerAtCenter: true
});

if (myWindow > 1104) {

    let controller = $.superscrollorama();

    

    controller.addTween(10, TweenMax.from($('.bean_img_box'), 2.5, {css:{left:'-300px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
    controller.addTween(10, TweenMax.to($('.bean_img_box'), 2.5, {css:{left:'10%', opacity:1}, ease: Quad.easeOut}), 1, 1000);
    controller.addTween(10, TweenMax.from($('.bean_txt_box'), 2.5, {css:{right:'-300px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
    controller.addTween(10, TweenMax.to($('.bean_txt_box'), 2.5, {css:{right:'10%', opacity:1}, ease: Quad.easeOut}), 1, 1000);

} else if ((myWindow > 960)) {

    let controller = $.superscrollorama();

    controller.addTween(10, TweenMax.from($('.bean_img_box'), 2.5, {css:{left:'-50%', opacity:0}, ease: Quad.easeOut}), 1, 1000);
    controller.addTween(10, TweenMax.to($('.bean_img_box'), 2.5, {css:{left:'0', opacity:1}, ease: Quad.easeOut}), 1, 1000);
    controller.addTween(10, TweenMax.from($('.bean_txt_box'), 2.5, {css:{right:'-50%', opacity:0}, ease: Quad.easeOut}), 1, 1000);
    controller.addTween(10, TweenMax.to($('.bean_txt_box'), 2.5, {css:{right:'0', opacity:1}, ease: Quad.easeOut}), 1, 1000);
};


let controller = $.superscrollorama({
    triggerAtCenter: true
});

let controller = $.superscrollorama();

controller.addTween(10, TweenMax.from($('.reserve_visual'), 2.5, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1000);
controller.addTween(10, TweenMax.to($('.reserve_visual'), 2.5, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1000);



//favWrap
let controller = $.superscrollorama({
    triggerAtCenter: true
});

if (myWindow > 1104) {

    let controller = $.superscrollorama();

    

    controller.addTween(10, TweenMax.from($('.winter_title'), 2.5, {css:{left:'-800px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
    controller.addTween(10, TweenMax.to($('.winter_title'), 2.5, {css:{left:'10%', opacity:1}, ease: Quad.easeOut}), 1, 1000);
    controller.addTween(10, TweenMax.from($('.winter_txt_box'), 2.5, {css:{left:'-800px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
    controller.addTween(10, TweenMax.to($('.winter_txt_box'), 2.5, {css:{left:'0%', opacity:1}, ease: Quad.easeOut}), 1, 1000);

} else if ((myWindow > 960)) {

    let controller = $.superscrollorama();

    controller.addTween(10, TweenMax.from($('.winter_title'), 2.5, {css:{left:'-50%', opacity:0}, ease: Quad.easeOut}), 1, 1000);
    controller.addTween(10, TweenMax.to($('.winter_title'), 2.5, {css:{left:'0', opacity:1}, ease: Quad.easeOut}), 1, 1000);
    controller.addTween(10, TweenMax.from($('.winter_txt_box'), 2.5, {css:{left:'-50%', opacity:0}, ease: Quad.easeOut}), 1, 1000);
    controller.addTween(10, TweenMax.to($('.winter_txt_box'), 2.5, {css:{left:'0', opacity:1}, ease: Quad.easeOut}), 1, 1000);
};



$('header .header_wrap > div > nav > ul > li > h2 > a').bind('mouseover focus', function (e) {
    $('header .header_wrap > div > nav > ul > li > h2 > a').removeClass('on');
    $('.sub_wrap').hide();

    $(this).addClass('on');
    $(this).parent().next().stop(true, true).slideDown();

    e.preventDefault();
  });

  $('.sub_inner').bind('mouseleave', function () {
    $('header .header_wrap > div > nav > ul > li > h2 > a').removeClass('on');
    $('.sub_wrap').slideUp();
  });

 
  alert("??? ???????????? ????????? ????????? ?????? ?????? ?????????????????? ????????? ?????????????????????.???????????? ????????? ??????????????? ???????????????, ?????? ???????????? ??????????????? ????????????.");
});

