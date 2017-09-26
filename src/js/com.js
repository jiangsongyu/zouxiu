/* 
* @Author: Marte
* @Date:   2017-09-18 10:43:13
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-26 14:43:41
*/
require(['config'],function(){
    require(['jquery'],function($){
        var $corr = $('#nav .cont2017 .cor');
        var $corl = $('#nav .cont2017 .col .JA');
        var $ding = $('#ding');
        var $btnc = $('#ding button');
        $btnc.on('click',function(){
            $ding.hide();
        })
        var $ho = $('#header #boxx');
        var $boxx2=$('#header #boxx .boxx2');
        var $boxx3=$('#header #boxx .boxx3');
        var $boxx1=$('#header #boxx .boxx1');
        var $liss = $boxx3.children().children();
        // console.log($lis);

        $ho.hover(function() {
            
            $boxx2.css('display','block');
            $boxx3.css('display','block');

        }, function() {
            setTimeout(function(){
                $boxx2.css('display','none');
                $boxx3.css('display','none');
                $boxx1.css('display','none');
            }, 700);
            
        });


        $liss[0].onmouseenter=function(){
            $liss[1].className='';
            $liss[0].className='on';
            $boxx2.css('display','block');
            $boxx1.css('display','none');
        }
        $liss[1].onmouseenter=function(){
            $liss[0].className='';
            $liss[1].className='on';
            $boxx1.css('display','block');
            $boxx2.css('display','none');
        }
        var $corr = $('li');
        var $corb = $('li a');
        var $corrr = $('.cor_r a');
        var $banners = $('.banner ul img');
        var $downbox=$('.down_box');
        var $down=$('.down');
        var $zhe = $('#zhe');
        $down.mouseenter(function(event) {
            $downbox.stop().show(200);
            $zhe.css('display','block');
            $corr.css('z-index','-11');
            $corb.css('z-index','-11');
            $corrr.css('z-index','-11');
            $banners.css('z-index','-11');
        });
        console.log($corr);
        $downbox.mouseleave(function(event) {
            $downbox.stop().hide(200);
            $zhe.css('display','none');
            $corr.css('z-index','0');
            $corb.css('z-index','0');
            $corrr.css('z-index','0');
            $banners.css('z-index','0');
        });

        var $lis =$('.lis');
        var $box = $('.lis .box');
        var $box2 = $('.lis .box2');
        // console.log($lis.children());
        for(var i=0;i<$box.length;i++){
            // console.log($($box[i]));
            $box[i].onmouseenter=function(){
                this.style.backgroundColor='#fff';
                var $b = $($box2[i])
                // this.style.display="block";
                // console.log($(this).find('.box2'));
                var $son =$(this).find('.box2');
                $son.stop().show(200);
                $zhe.css('display','block');
                $corr.css('z-index','-11');
                $corb.css('z-index','-11');
                $corrr.css('z-index','-11');
                $banners.css('z-index','-11');
            }
            $box[i].onmouseleave=function(){
                this.style.backgroundColor='';
                 var $son =$(this).find('.box2');
                var $b = $($box2[i])
                $son.stop().hide(200);
                $zhe.css('display','none');
                $corr.css('z-index','0');
                $corb.css('z-index','0');
                $corrr.css('z-index','0');
                $banners.css('z-index','0');
            }
        }
        $tab1 = $('.inbo1 ul li');
        $imbox1 = $('.inbo1 .code1');
        $imbox2 = $('.inbo1 .code2');
        // console.log($tab1);



        $tab1[0].onmouseenter=function(){
             $imbox1.css('display','block');
             $imbox2.css('display','none');
             $tab1[0].className='active';
             $tab1[1].className='';
        }
        $tab1[1].onmouseenter=function(){
             $imbox1.css('display','none');
             $imbox2.css('display','block');
             $tab1[0].className='';
             $tab1[1].className='active';
        }


        $tab2 = $('.inbo2 ul li');
        $imboxx1 = $('.inbo2 .code1');
        $imboxx2 = $('.inbo2 .code2');
        // console.log($tab1);


       
        var $dianji = $('.foot_b .bot1 .dianji');
        var $coer = $('.foot_b .bot1 .coer');
        // console.log($dianji);
        var i = 0;

        $dianji.on('click',function(){
         if(i==0){
             $coer.stop().slideDown(400);
             i=1;
         }else{
             $coer.stop().slideUp(400);i=0;
         }
        })
    })
})

   


    

