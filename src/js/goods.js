/* 
* @Author: Marte
* @Date:   2017-09-28 14:47:49
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-29 11:39:15
*/

require(['config'],function(){
    require(['jquery','com','../lib/AnCarousel/Ancarousel'],function($){
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
                var iurl = rest.imgurl;
                
                console.log(iurl);
                // ../img/yif1.jpg
                $picl.xCarousel({
                    imgs:[iurl],
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
            }
        });
        
    })
})