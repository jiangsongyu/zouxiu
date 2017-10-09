/* 
* @Author: Marte
* @Date:   2017-09-28 14:47:49
* @Last Modified by:   Marte
* @Last Modified time: 2017-10-09 19:05:04
*/

require(['config'],function(){
    require(['jquery','com','../lib/common','../lib/AnCarousel/Ancarousel','../lib/common'],function($){

        $('#nav .tabb .tou li').eq(0).addClass("active");
        // $('.tab .content').not(':first-of-type').hide();
        $('#nav .tabb .content').first().nextAll().hide();
        
        $('#nav .tabb .tb li').on('click',function(){
            console.log(777);
            // 获取当前对应索引值
            var idx = $(this).index();
            console.log(idx);
            // 给当前高亮，去除其他高亮
            $(this).addClass('active').siblings('li').removeClass('active');

            $('.tabb .content').eq(idx).show().siblings('.content').hide();
        });




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
            var date = new Date();
            date.setDate(date.getDate()-10);
            document.cookie = 'user=' + 'use' + ";expires=" +date.toString()+";path=/";
            window.location.reload();
        });
        console.log(location);
        var datalist = document.querySelector('#nav .nav_c .hezi_c');
        var page = document.querySelector('#nav .nav_b .page');
        var $picl = $('#nav .shp .pictl');

        var $quanb = $('#header .top_b .nav_l');
        var $lis = $('#header .top_b .nav_l .lis');
        $quanb.hover(function() {
            $lis.stop().slideDown(400);
        }, function() {
            $lis.stop().slideUp(400);
        });
        var id = location.search.replace('?id=',"")*1;
        console.log(id);
        $.ajax({
            url: '../api/good.php',
            type: 'GET',
            data: {"id": id},
            success:function(res){
                // console.log(res);
                var rest = JSON.parse(res);
                
                var div1 = document.createElement('div');
                var iurl1 = rest.imgurl;
                var iurl2 = rest.imgurl2;
                var iurl3 = rest.imgurl3;
                var iurl4 = rest.imgurl4;
                var iurl5 = rest.imgurl5;
            
                // ../img/yif1.jpg
                $picl.xCarousel({
                    imgs:[iurl1,iurl2,iurl3,iurl4,iurl5],
                    index:0,
                    type:'fade',
                    width:468,
                    height:624,
                    autoPlay:false,
                    showSmall:true,
                    showButton:false,
                    showPage:false
                });
                var $spa = $('.shpr .rs .p_title .ca');
                var $h1 = $('<h1></h1>');
                $h1.html(rest.jieshao);
                $spa.append($h1);
                var $sp = $('.shpr .rs .p_title .cp a');
                $sp.html(rest.tittle);
                var $np = $('.shpr .rs .pro_pric .n_pr');
                $np.html('￥'+rest.new_price);
                var $prs = $('.shpr .rs .pro_pric .prs');
                $prs.html('￥'+rest.price);
                var $didian = $('.shpr .rs .pro_pric .did');
                $didian.html(rest.didian);
                var $colo = $('.shpr .rs .pro_pric .cxs ul li a');
                $colo.html(rest.color);

                var $bu2 = $('.shpr .rc .boxbu .bu2');



                var arr_goods = [];

                // 先查看当前购物车有无cookie
                var cookies = document.cookie;

                if(cookies.length>0){
                    cookies = cookies.split('; ');
                    cookies.forEach(function(item){
                        var arr = item.split('=');

                        if(arr[0] == 'cartlist'){
                            arr_goods = JSON.parse(arr[1]);
                        }
                    })
                };
                $bu2.on('click',function(){
                    
                    
                    for(var i=0;i<arr_goods.length;i++){
                        if(arr_goods[i].id == id){
                            arr_goods[i].qty++;
                            break;
                        }
                    }

                    // arr_goods中不存在当前商品
                    if(i===arr_goods.length){
                        // 获取点击按钮对应商品信息
                        var goods = {
                            // 商品id
                            id:rest.id,
                            title:rest.tittle,
                            jieshao:rest.jieshao,
                            colos:rest.color,
                            imgurl:iurl1,
                            price:rest.price,
                            sale:rest.new_price,
                            qty:1
                        }



                        arr_goods.push(goods);
                    }
                    document.cookie = 'cartlist=' + JSON.stringify(arr_goods);


                    var copi = document.createElement("img");
                    copi.src=iurl1;
                    
                    copi.style.position = 'absolute';
                    copi.style.right = 450 + 'px';
                    copi.style.top = 600 + 'px';
                    copi.style.width = 23 +'px';
                    document.body.appendChild(copi);
                    $(copi).animate({right: 5, bottom:60},400,function(){
                        document.body.removeChild(copi);
                    });
                    
                })
            }

        });
        
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
    })
})