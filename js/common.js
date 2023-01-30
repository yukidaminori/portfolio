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
});

// フェードイン
function fadeAnime(){
	$('.fadeUpTrigger').each(function(){
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('fadeUp');
		}else{
			$(this).removeClass('fadeUp');
		}
	});
	
	$('.fadeDownTrigger').each(function(){
		var elemPos = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('fadeDown');
		}else{
			$(this).removeClass('fadeDown');
		}
	});
}
	
$(window).scroll(function (){
	fadeAnime();
});

//モーダル表示
$(".modaal").modaal({
	overlay_close:true,
	before_open:function(){
		$('html').css('overflow-y','hidden');
	},
	after_close:function(){
		$('html').css('overflow-y','scroll');
	}
});

// アコーディオン
$('.skill-title').on('click', function() {
	var findElm = $(this).next(".box");
	$(findElm).slideToggle();
    
	if($(this).hasClass('close')){
		$(this).removeClass('close');
	}else{//それ以外は
		$(this).addClass('close');
	}
});


$(window).on('load', function(){
	$('.accordion-area li:first-of-type section').addClass("open");
	$(".open").each(function(index, element){	
		var Title =$(element).children('.skill-title');	
		$(Title).addClass('close');
		var Box =$(element).children('.box');
		$(Box).slideDown(500);
	});
});

// タブ切り替え
function GethashID (hashIDName){
	if(hashIDName){
		//タブ設定
		$('.tab li').find('a').each(function() {
			var idName = $(this).attr('href');	
			if(idName == hashIDName){
				var parentElm = $(this).parent();
				$('.tab li').removeClass("active");
				$(parentElm).addClass("active");
				$(".area").removeClass("is-active");
				$(hashIDName).addClass("is-active");	
			}
		});
	}
}

$('.tab a').on('click', function() {
	var idName = $(this).attr('href');	
	GethashID (idName);
	return false;
});


$(window).on('load', function () {
    $('.tab li:first-of-type').addClass("active");
    $('.area:first-of-type').addClass("is-active");
	var hashName = location.hash;
	GethashID (hashName);
});

// 画面ローディング
var bar = new ProgressBar.Line(splash_text, {
	easing: 'easeInOut',
	duration: 1000,
	strokeWidth: 0.2,
	color: '#555',
	trailWidth: 0.2,
	trailColor: '#bbb',
	text: {				
		style: {
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-30px 0 0 0',
			transform:'translate(-50%,-50%)',
			'font-size':'1rem',
			color: '#fff',
		},
		autoStyleContainer: false 
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); 
	}
});

bar.animate(1.0, function () {
	$("#splash").delay(500).fadeOut(800);
});

// ページトップリンク
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});