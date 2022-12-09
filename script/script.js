$(document).ready(function(){
    var myWindow = $(window).width();


//Bean
var controller = $.superscrollorama({
    triggerAtCenter: true
});

if (myWindow > 1104) {

    var controller = $.superscrollorama();

    

    controller.addTween(10, TweenMax.from($('.bean_img_box'), 2.5, {css:{left:'-500px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
    controller.addTween(10, TweenMax.to($('.bean_img_box'), 2.5, {css:{left:'10%', opacity:1}, ease: Quad.easeOut}), 1, 1000);
    controller.addTween(10, TweenMax.from($('.bean_txt_box'), 2.5, {css:{right:'-500px', opacity:0}, ease: Quad.easeOut}), 1, 1000);
    controller.addTween(10, TweenMax.to($('.bean_txt_box'), 2.5, {css:{right:'10%', opacity:1}, ease: Quad.easeOut}), 1, 1000);

} else if ((myWindow > 960)) {

    var controller = $.superscrollorama();

    controller.addTween(10, TweenMax.from($('.bean_img_box'), 2.5, {css:{left:'-50%', opacity:0}, ease: Quad.easeOut}), 1, 1000);
    controller.addTween(10, TweenMax.to($('.bean_img_box'), 2.5, {css:{left:'0', opacity:1}, ease: Quad.easeOut}), 1, 1000);
    controller.addTween(10, TweenMax.from($('.bean_txt_box'), 2.5, {css:{right:'-50%', opacity:0}, ease: Quad.easeOut}), 1, 1000);
    controller.addTween(10, TweenMax.to($('.bean_txt_box'), 2.5, {css:{right:'0', opacity:1}, ease: Quad.easeOut}), 1, 1000);
};


var controller = $.superscrollorama({
    triggerAtCenter: true
});

var controller = $.superscrollorama();

controller.addTween(10, TweenMax.from($('.reserve_visual'), 2.5, {css:{opacity:0}, ease: Quad.easeOut}), 1, 1000);
controller.addTween(10, TweenMax.to($('.reserve_visual'), 2.5, {css:{opacity:1}, ease: Quad.easeOut}), 1, 1000);



});