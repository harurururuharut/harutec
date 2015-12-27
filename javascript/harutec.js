$(function(){

   $('a[href^=#]').click(function() {

      var speed = 400;

      var href= $(this).attr("href");

      var target = $(href == "#" || href == "" ? 'html' : href);

      var position = target.offset().top;

      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });



   $('.blank').click(function(){
   window.open(this.href, '_blank');
   return false;
   });

   var harutaObj = ["さわらないでえっち♡","ちょっとだけよ♡","今度遊び行こう♪","今日眠くない?","今夜は何しようか♡？","ああああ、寝坊したwwww","暇人なの？","ボキャ貧かよw","あーー飲みたいw","...。"]



    $("#haruta").hover(
  function () {
   $(this).click(function (){
   var harutaRand = Math.floor( Math.random() * harutaObj.length);
   var harutaText = harutaObj[harutaRand];
   $(".section5__msg").text(harutaText);
    document.getElementById("haruta").src = "img/haruta2.png";

   });

  },
  function () {
    $(".section5__msg").text("このサイトは1週間かけて制作しました。初日に、サイト制作の目的を考え、必要な要素を洗い出し、IllustratorやPhotoshopも使って必要な要素を作成しました。初めて自分のサイトを制作したので、かなり達成感はありましたが、未熟な部分が多いです。自己満足で終わらず、誰かのためにデザインができるようになりたいです。");
    document.getElementById("haruta").src = "img/haruta.png";

  }
);

    $('.slide__btn').click(function(){
      var display = $('.slidecontent').css('display');
      if( display == ('none') ) {
      $('.slidecontent').css('display','inline-block');
  
       } else {
        $('.slidecontent').css('display','none');
       
       }
   });


    var menuHeight = $("#header__nav").height();
    var startPos = 0;
    $(window).scroll(function(){
      var currentPos = $(this).scrollTop();
      var userAgent = window.navigator.userAgent.toLowerCase();

        if (userAgent.indexOf('ipad') != -1 || userAgent.indexOf('iphone') != -1 || userAgent.indexOf('Android') != -1 ){
          if (currentPos > startPos) {
            if($(window).scrollTop() >= 300) {
              $("#header__nav").css("top", "-100px");
              $(".slidecontent").css("display","none");
            }
          } else {
            $("#header__nav").css("top", 0 + "px");
          }
        }
          startPos = currentPos;
    });



});



