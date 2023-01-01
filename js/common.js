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

// アコーディオン
$('.skill-title').on('click', function() {//タイトル要素をクリックしたら
	var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
	$(findElm).slideToggle();//アコーディオンの上下動作
    
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去し
	}else{//それ以外は
		$(this).addClass('close');//クラス名closeを付与
	}
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function(){
	$('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
	$(".open").each(function(index, element){	//openクラスを取得
		var Title =$(element).children('.skill-title');	//openクラスの子要素のtitleクラスを取得
		$(Title).addClass('close');				//タイトルにクラス名closeを付与し
		var Box =$(element).children('.box');	//openクラスの子要素boxクラスを取得
		$(Box).slideDown(500);					//アコーディオンを開く
	});
});