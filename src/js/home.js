//首页
// jQuery(function($){
// 
require(['config'],function(){
    require(['jquery','com','../lib/common'],function($){
      if(Cookie.get("user")!=''){
        var $usebox = $('#header .top_t .useb');
        var user = Cookie.get("user");
        $usebox.html(`
          <a>${user}</a>
          <a class="tuichu">注销</a>
          `);
      };
      var $zhux = $('#header .top_t .useb .tuichu');
      console.log($zhux);
      $zhux.on('click',function(){
        Cookie.remove('user');
        window.location.reload();
      })
      an({ 
               container:['.banner'],

              imgs:['../img/banner1.jpg','../img/banner2.jpg','../img/banner3.jpg','../img/banner4a.jpg','../img/banner5.jpg'],width:1450,height:530,dianj:true,duration:3000
          });
      // 楼梯
      var $louti = $('.louti .l_wrap');
      var $loutiItem = $louti.find('a');
      $louceng = $('.louceng');
      $(window).on('scroll',function(){
          var scrollTop = $(window).scrollTop();

          if(scrollTop>600){
              $louti.fadeIn();
          }else{
              $louti.fadeOut();
          }

          $louceng.each(function(idx,ele){
              if(scrollTop >= $(ele).offset().top-$(ele).outerHeight()/4){
                  $loutiItem.eq(idx).addClass('active').siblings('a').removeClass('active');
              }
          })
      })
      
      $louti.on('click','a',function(){
          var targetScrollTop;
          var idx = $(this).index();
          targetScrollTop = $louceng.eq(idx).offset().top;
          $('html,body').stop().animate({'scrollTop':targetScrollTop},'slow');
      })
    
    var $cbl = $('#nav .cbl a');
    var $corr = $('li');
    var $corb = $('li a');
    var $corrr = $('.cor_r a');
    console.log($corr);
    $cbl.hover(function() {
        var index = $cbl.index(this);
        $cbl.eq(index).find('span').stop().fadeIn();
        $cbl.eq(index).find('.spc3').stop().show();
        $corr.css('z-index','-11');
        $corb.css('z-index','-11');
        $corrr.css('z-index','-11');
    }, function() {
        $cbl.find('span').stop().hide(400);
        $cbl.find('.spc3').stop().hide();
        $corr.css('z-index','0');
        $corb.css('z-index','0');
        $corrr.css('z-index','0');
    });
    

     var $backT = $cbl.last();
     $backT.on('click',function(){
          $('html,body').stop().animate({'scrollTop':0},'slow');
     })   

     var $zhezi = $('#nav .he1 li a');
     $zhezi.hover(function() {
      var index = $zhezi.index(this);
       $zhezi.parent('li').eq(index).stop().animate({left:"-"+20},);
     }, function() {
      var index = $zhezi.index(this);
       $zhezi.parent('li').eq(index).stop().animate({left:0},);
     });

      var $zuix = $(".cont2017 .mingzi li a");
      console.log($zuix.find('.pai'));
      var zuiH = $zuix.outerHeight()*1.05;
      var zuiW = $zuix.outerWidth()*1.05;
      $zuix.hover(function() {
        var index = $zuix.index(this);
        console.log(index);
        $zuix.find('.pai').eq(index).stop().animate({
          width:630,
          height:315,
          top:("-"+(0.05*300)/2),
          left:("-"+(0.05*600)/2)
        }, 500);
      }, function() {
        var index = $zuix.index(this);
        $zuix.find('.pai').eq(index).stop().animate({
          width:600,
          height:300,
          top:0,
          left:0
        }, 500);
      });
      an({ 
               container:['.SA'],

              imgs:['../img/1.jpg','../img/2.jpg','../img/3.jpg','../img/4.jpg','../img/5.jpg','../img/6.jpg'],width:397,height:400,dianj:false,duration:3000
          });

      var $zp = $('.cor_l .p1 img');
      var WI = $zp.outerWidth();
      var chrangV = 1.05*240;
      $zp.hover(function() {
           var index = $zp.index(this);
          $zp.eq(index).stop().animate({
           width:chrangV,
           height:chrangV,
           left:("-"+(0.05 * WI)/2),
           top:("-"+(0.05 * WI)/2)
          }, 600);
      }, function() {
           var index = $zp.index(this);
          $zp.eq(index).stop().animate({
           width:240,
           height:240,
           left:0,
           top:0
          }, 600)
      });
      var $xp = $('.cor .cor_r img');
      $xp.hover(function() {
          var index = $xp.index(this);
          $xp.eq(index).stop().animate({bottom:'-5px'},);
      }, function() {
          var index = $xp.index(this);
          $xp.eq(index).stop().animate({bottom:"-15px"}, );
      });
      var $tb = $('.conb .cob a img');
      var $wz = $('.conb .cob a i');
      var $xa = $('.conb .cob a');
      $wz.hide();
      $xa.hover(function(e) {
          var index = $xa.index(this);
          $tb.eq(index).hide();
          $wz.eq(index).show();
      }, function() {
          var index =$xa.index(this);
          $wz.eq(index).hide();
          $tb.eq(index).show();
      });
     var $optt = $('.conb ul li');
     $optt.hover(function() {
         var index = $optt.index(this);
         $optt.eq(index).siblings('li').stop().animate({opacity:0.6},)
     }, function() {
         var index = $optt.index(this);
         $optt.stop().animate({opacity:1},);
     });
     var $paoc =$('.paoc');
     $paoc.hover(function() {
       $paoc.stop().animate({opacity:0.8},);
     }, function() {
       $paoc.stop().animate({opacity:1},);
     });

     var $huo=$('.cont2017 .huo li');
     $huo.hover(function() {
      console.log(777);
       var index = $huo.index(this);
         $huo.eq(index).siblings('li').stop().animate({opacity:0.6},)
     }, function() {
       var index = $huo.index(this);
         $huo.eq(index).siblings('li').stop().animate({opacity:1},)
     });
     var $zht = $('.zuih a .ppp1 img');
     var WZ = $zht.outerWidth();
     var HZ = $zht.outerHeight();
     var wZ = 1.05*WZ;
     var hZ = 1.05*HZ;
     $zht.hover(function() {
         var index = $zht.index(this);
         $zht.eq(index).stop().animate({
             width:wZ,
             height:hZ,
             left:("-"+(0.05 * WZ)/2),
             top:("-"+(0.05 * HZ)/2)
         },600);
     }, function() {
         var index = $zht.index(this);
         $zht.eq(index).stop().animate({
             width:WZ,
             height:HZ,
             left:0,
             top:0
         }, 600);
     });


  })
})
      

 
// })