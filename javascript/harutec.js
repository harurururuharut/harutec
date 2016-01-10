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


        $(".section2__msg1").hover(
      function(){
        $(".section2__msg1").find("p").css('font-size','17px');
        $(".section2__msg1").find("p").text("私の趣味は旅行です。大学に入って、カンボジアとシンガポールに行きました。世界中のいろんな食事を現地で食べるのが楽しみです。");
      },
      function(){
        $(".section2__msg1").find("p").css('font-size','50px');
        $(".section2__msg1").find("p").text("TRAVEL");
      }
    );

          $(".section2__msg2").hover(
      function(){
        $(".section2__msg2").find("p").css('font-size','17px');
        $(".section2__msg2").find("p").text("私は大学1年の冬からスターバックスコーヒーでアルバイトを始めました。おすすめのカスタムなど何でも教えちゃいますよ！");
      },
      function(){
        $(".section2__msg2").find("p").css('font-size','50px');
        $(".section2__msg2").find("p").text("STB");
      }
    );

            $(".section2__msg3").hover(
      function(){
        $(".section2__msg3").find("p").css('font-size','17px');
        $(".section2__msg3").find("p").text("でんぱ組の最上モガ推しですw元々アイドルには全く興味がなかったんですが、友達にライブに誘われてどはまりしちゃいました笑");
      },
      function(){
        $(".section2__msg3").find("p").css('font-size','50px');
        $(".section2__msg3").find("p").text("DENPA");
      }
    );


    $(".section3__box1").hover(
      function(){
        $(".section3__box1--msg").fadeIn();
      },
      function(){
        $(".section3__box1--msg").fadeOut();
      }
    );




    $('.slide__btn').click(function(){
        var display = $('.slidecontent').css('display');
        if( display == ('none') ) {
        $('.slidecontent').css('display','inline-block');
        $(this).find('i').removeClass('fa-bars');
        $(this).find('i').addClass('fa-times');
    
       } else {
        $('.slidecontent').css('display','none');
        $(this).find('i').removeClass('fa-times');
        $(this).find('i').addClass('fa-bars');
       }
   });






});



