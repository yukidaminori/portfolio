// ハンバーガーメニュー
window.onload = function () {
    var nav = document.getElementById("nav-wrapper");
    var hamburger = document.getElementById("js-hamburger");
    var blackBg = document.getElementById("js-black-bg");
  
    hamburger.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
    blackBg.addEventListener("click", function () {
      nav.classList.remove("open");
    });
  };

//   スライドショー
  $('.slider').slick({
    fade:true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed:1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    consolelog:"aaa",
});

// モーダル
var access = $.cookie('access')
if(!access){
  flag = true;
  $.cookie('access', false);
}else{
  flag = false	
}

//モーダル表示
$(".modal-open").modaal({
start_open:flag,
overlay_close:true,
before_open:function(){
  $('html').css('overflow-y','hidden');
},
after_close:function(){
  $('html').css('overflow-y','scroll');
}
});