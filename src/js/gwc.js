/* 
* @Author: Marte
* @Date:   2017-10-07 13:02:02
* @Last Modified by:   Marte
* @Last Modified time: 2017-10-09 19:58:03
*/

require(['config'],function(){
    require(['jquery','../lib/common'],function($){
        var cartList = document.querySelector('#shp .shangp');
        var subPrice = document.querySelector('#shp .subPrice');
        
            var cookies = document.cookie;//'cartlist=[{},{}]; myname=laoxie; myClass=h51704'

            var cartlist = [];

            if(cookies.length>0){

                // 拆分成数组
                cookies = cookies.split('; ');//['cartlist=[{},{}]','myname=laoxie','myClass=h51704']

                cookies.forEach(function(item){
                    var arr = item.split('=');//['cartlist','[{},{}]'] , ['myname','laoxie']

                    if(arr[0] === 'cartlist'){
                        cartlist = JSON.parse(arr[1]);
                    }
                })
            }
            render()

                 function render(){
                    // 计算总价
                     var totalPrice = 0;

                     var ul = document.createElement('ul');
                     ul.innerHTML = cartlist.map(function(item){
                        totalPrice += item.sale * item.qty;
                        
                        return `
                        <li data-id="${item.id}">
                            <div class='qhz'>
                                <img src="${item.imgurl}">
                                <div class='wez'>
                                    <p class="titi">${item.title}</p>
                                    <p class="jis">${item.jieshao}</p>
                                    <p class="yss">颜色：${item.colos}</p>
                                </div>
                            </div>
                            <div class='qian'>
                                <del>￥${item.sale}</del>
                                <p>￥${item.price}</p>
                            </div>
                            
                                <p class="qty">数量：${item.qty}</p>
                           
                            <div class='shan'>
                                <a class='dely'>删除</a>
                            </div>
                        </li>
                            `
                     }).join('');

                     cartList.innerHTML = '';
                     cartList.appendChild(ul);
                     subPrice.innerHTML = '总计：' + totalPrice.toFixed(2);
                 }
            
       

        var $shc = $('#shp .shangp');
       
        $shc.on('click',function(e){
            // Cookie.remove('cartlist');
            // window.location.reload();
            var target = e.target;
            console.log(target.className);
            if(target.className === 'dely'){
                
                var currentLi = target.parentNode.parentNode;
                var guid = currentLi.getAttribute('data-id');
                for(var i=0;i<cartlist.length;i++){
                    if(cartlist[i].id === guid){
                        console.log(cartlist[i].id);
                        cartlist.splice(i,1);
                        break;
                    }
                }
            

                var now = new Date();
                now.setDate(now.getDate()+8);
                Cookie.set('cartlist',JSON.stringify(cartlist),now);

                render();
            }
                
            
        })
    })
})
    
