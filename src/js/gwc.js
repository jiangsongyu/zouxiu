/* 
* @Author: Marte
* @Date:   2017-10-07 13:02:02
* @Last Modified by:   Marte
* @Last Modified time: 2017-10-08 11:33:56
*/

require(['config'],function(){
    require(['jquery','../lib/common'],function($){
        var $shangp = $('#shp .shangp');
        if(!Cookie.get('img')==''){
            var tittle = Cookie.get('tittle');
            var jieshao = Cookie.get('jieshao');
            var imgurl = Cookie.get('img');
            var new_price = Cookie.get('np');
            var price = Cookie.get('price');
            var colos = Cookie.get('color');
            $shangp.html(`
                <div class='qhz'>
                    <img src="${imgurl}">
                    <div class='wez'>
                        <p class="titi">${tittle}</p>
                        <p class="jis">${jieshao}</p>
                        <p class="yss">颜色：${colos}</p>
                    </div>
                </div>
                <div class='qian'>
                    <del>￥${price}</del>
                    <p>￥${new_price}</p>
                </div>
                <div class='shan'>
                    <a>删除</a>
                </div>
                `);
        }

        var $shc = $('#shp .shangp .shan a');
        $shc.on('click',function(){
            Cookie.remove('img');
            window.location.reload();
        })
    })
})
    
