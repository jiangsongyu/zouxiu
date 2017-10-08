/* 
* @Author: Marte
* @Date:   2017-10-08 08:59:55
* @Last Modified by:   Marte
* @Last Modified time: 2017-10-08 10:08:12
*/
require(['config'],function(){
    require(['jquery','../lib/common'],function($){
        var $btn = $('#nav .her #btn1');
        console.log($btn);
        $btn.on('click',function(){
            var use = document.querySelector('#nav .her #email').value;
            var psw = document.querySelector('#nav .her #psw').value;
            var $use = $('#nav .her #email');
            var $psw = $('#nav .her #psw');
            $.ajax({
                url: '../api/login.php',
                data: {"username": use,"password": psw},
                success:function(res){
                    console.log(res);
                    if(res=="ok"){
                        var date = new Date();
                        date.setDate(date.getDate()+7);
                        document.cookie = 'user=' + use + ";expires=" +date.toString()+";path=/";
                        setTimeout(function(){
                            window.location.href="../index.html";
                        }, 300);
                        
                    }else{
                        alert('用户名或密码错误！');
                        $use.val('');
                        $psw.val('');
                    }
                }
            })
        })
    })
})
