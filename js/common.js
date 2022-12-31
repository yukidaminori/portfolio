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
    fade:true,//切り替えをフェードで行う。初期値はfalse。
    autoplay: false,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
    speed:1000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: true,//左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
    pauseOnFocus: false,//フォーカスで一時停止を無効
    pauseOnHover: false,//マウスホバーで一時停止を無効
    pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
    consolelog:"aaa",
});