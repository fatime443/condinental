'use strict'
//Navmenu
$('.navbtn .btn').click(function(){
    $('.nav-box').css('display','block')
})
$('.nav-box .close a').click(function(){
    $('.nav-box').css('display','none')
})
//Navmenu
//Slider
$('.slider').slick({
    dots:false,
    nextArrow: $(".nextBtn"),
    prevArrow: $(".prevBtn"),
    autoplay:true,
    autoplaySpeed:3000,
    Infinity:true
})
//Slider
//TabMenu
$('#tabMenu .btn').click(function(){
    $('#tabMenu .btn').removeClass("active-btn");
    $(this).addClass("active-btn");
    const index = $(this).index();
    $('.tab-content .select').slideUp();
    $('.tab-content .select').eq(index).slideToggle();
})
//TabMenu
