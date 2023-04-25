
$(document).ready(function () {

  var range = $(".imgslide");

  var image = $(".normal");


  image.css("width", range.val() + "%");

  range.on("input", function () {

    image.css("width", range.val() + "%");
  });
});

$(document).ready(function () {
  var image = $(".frame");
  var phrase = $(".phrase1")
  setTimeout(function () {
    image.css("opacity:1");
    phrase.css("color:#333");
  }, 1000);
});

$(document).ready(function () {
  var image = $(".lens");
  var phrase = $(".phrase2")
  setTimeout(function () {
    image.css("opacity:1");
    phrase.css("color:#333");
  }, 2000);
});

$(document).ready(function () {
  var image = $(".laser");
  var phrase = $(".phrase3")
  setTimeout(function () {
    image.css("opacity:1");
    phrase.css("color:#333");
  }, 3000);
});

function shiftslide1() {
  var slide2 = $('#slide2');
  var slide1 = $('#slide1');
  var slide3 = $('#slide3')
  var btns = $('.btn-grp1')
  var btns2 = $('.btn-grp2')
  var btns3 = $('.btn-grp3')
  // slide2.width('auto');
  // slide1.width('60%');
  // slide3.width('auto');
  slide2.removeClass('slide2-expand')
  slide2.addClass('slide2')
  slide3.removeClass('slide3-expand')
  slide3.addClass('slide3')
  slide1.removeClass('slide1-shrink') 
  slide1.addClass('slide1')

  if(slide2.hasClass('slide2-expand')==true){
    btns.removeClass('SlideLeft')
    btns.addClass('SlideRight')

  }else{
    btns.removeClass('SlideRight')
    btns.addClass('SlideLeft')
  }

  btns.show();
  btns2.hide();
  btns3.hide();
}
function shiftslide2() {
  var slide2 = $('#slide2');
  var slide1 = $('#slide1');
  var slide3 = $('#slide3')
  var btns = $('.btn-grp1')
  var btns2 = $('.btn-grp2')
  var btns3 = $('.btn-grp3')
  // slide2.width('60%')
  // slide1.width('auto')
  // slide3.width('auto')
  btns.hide()
  btns2.show();
  btns3.hide();
  slide3.removeClass('slide3-expand')
  slide3.addClass('slide3')
  slide2.removeClass('slide2')
  slide2.addClass('slide2-expand')
  slide1.removeClass('slide1')
  slide1.addClass('slide1-shrink')
  if(btns2.hasClass('SlideRight')==true){
    btns2.removeClass('SlideRight')
    btns2.addClass('SlideLeft')
  }else{
    btns2.addClass('SlideRight')
  }


}
function shiftslide3() {
  var slide1 = $('#slide1');
  var slide3 = $('#slide3');
  var slide2 = $('#slide2');
  var btns = $('.btn-grp1');
  var btns2 = $('.btn-grp2');
  var btns3 = $('.btn-grp3');
  // slide1.width('auto')
  // slide2.width('auto')
  // slide3.width('60%')
  btns.hide();
  btns2.hide();
  btns3.show();

  slide2.removeClass('slide2-expand')
  slide2.addClass('slide2')
  slide3.removeClass('slide3')
  slide3.addClass('slide3-expand')
  slide1.removeClass('slide1')
  slide1.addClass('slide1-shrink') 

  if(slide3.hasClass('slide3-expand')==true){
    btns3.removeClass('SlideLeft');
    btns3.addClass('SlideRight');
  }
  if(slide2.hasClass('slide3-expand'==true)){
    btns3.addClass('SlideLeft');
    btns3.addClass('SlideRight');
  }

}


$(function(){
  $('.hamburger-menu').click(function(){
      $('.sliding-navbar').toggleClass('sliding-navbar--open');
      $('.mask').toggleClass('show')
      $('.hamburger').toggleClass('menu-opened');
  });

  $('.mask').click(function(){
      $('.sliding-navbar').toggleClass('sliding-navbar--open');
      $('.mask').removeClass('show');
      $('.hamburger').toggleClass('menu-opened');
  })
});

