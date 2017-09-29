/* 
* @Author: Marte
* @Date:   2017-09-27 09:08:52
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-28 16:34:50
*/

require(['config'],function(){
    require(['jquery','com'],function($){
        var datalist = document.querySelector('#nav .nav_c .hezi_c');
        var page = document.querySelector('#nav .nav_b .page');

        var $quanb = $('#header .top_b .nav_l');
        var $lis = $('#header .top_b .nav_l .lis');
        $quanb.hover(function() {
            $lis.stop().slideDown(400);
        }, function() {
            $lis.stop().slideUp(400);
        });
        $tobb = $('#header .top_t').last();
        $tobb.hide();
        $(window).on('scroll',function(){
            var scrollTop = $(window).scrollTop();

            if(scrollTop>80){
                $tobb.slideDown(200);
            }else{
                $tobb.slideUp(200);
            }
        });
        // 当前分页
        var pageNo = 1;

        // 每页显示数量
        var qty = 32;
        var paixu = 1; 
        function Msg(pageNo,paixu){
            
            $.ajax({
                url: '../api/goods.php',
                type: 'GET',
                // dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
                data:{
                        'pageNo':pageNo,
                        'qty':qty,
                        'paixu':paixu
                    },

                success:function(res){
                    
                    var rest = JSON.parse(res);
                     console.log(rest.data);
                    var ul = document.createElement('ul');
                    
                   

                    ul.innerHTML = rest.data.map(item=>{
                        
                        return `
                                <li>
                                    <a class="tu" href="../html/xiangqing.html?id=${item.id}">
                                        <img src="${item.imgurl}">
                                    </a>
                                    <h4>${item.tittle}</h4>
                                    <a class='jies'>${item.jieshao}</a>
                                    <p>
                                    <span>￥<b>${item.new_price}</b>></span>
                                        <span><del>￥${item.price}</del>></span>
                                    </p>
                                </li>
                        `
                    }).join('');
                    
                    datalist.innerHTML = '';
                    datalist.appendChild(ul);

                    page.innerHTML = '';
                    var shou = document.createElement('p');
                    shou.innerHTML = "首页";
                    var syy = document.createElement('a');
                    syy.innerHTML = "上一页";
                    page.appendChild(shou);
                    page.appendChild(syy);
                    var pageLen = Math.ceil(rest.total/rest.qty);
                    for(var i=0;i<pageLen;i++){
                        var span = document.createElement('span');
                        span.innerHTML = i+1;
                        if(i===rest.pageNo-1){
                            span.className = 'active';
                        }
                        page.appendChild(span);
                    }
                    var xiay = document.createElement('a');
                    xiay.innerHTML = '下一页';
                    page.appendChild(xiay);   

                   
                    
                }
            })
        }
        Msg();
        var pages = $('.page')[0];
      
        pages.onclick=function(e){
            
            var mb = e.target.innerHTML;
            if(mb=='首页'){
                pageNo=1;
            }else if(mb=='下一页'){
                pageNo++;
            }else if(mb=='上一页'){
                pageNo--;
            }else{
                pageNo=mb;
            }
            pageNo=pageNo*1;
            console.log(pageNo);
            Msg(pageNo);
        }
        var sd = document.querySelector('.nav_box .box_r');
        sd.onclick=function(e){
            console.log(e.target.innerHTML);
            var mb = e.target.innerHTML;
             if(mb=='下一页&gt;'){
                pageNo++;
            }else if(mb=='&lt;上一页'){
                pageNo--;
            }
            pageNo=pageNo*1;
            Msg(pageNo);
        }
        var $paix =$('.nav_box .box_l');
        $paix.on('click',function(e){
            console.log(e.target.innerHTML);
            var mz = e.target.innerHTML;
            if(mz=="默认"){
                paixu=1;
            }else if(mz=="价格↓"){
                paixu=2;
            }else if(mz=="价格↑"){
                paixu=3;
            }
            Msg(pageNo,paixu);
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

    })
})